import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {UserStore} from "../store/user.store";
import {AuthService} from "../CvTech/services/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit{
  isAuthenticated: boolean = !!localStorage.getItem('token');
  constructor(private userStore: UserStore, private authService: AuthService, private toaster: ToastrService) {

    }

  ngOnInit(): void {
    const email = localStorage.getItem('email');
    const id = localStorage.getItem('token');
    if (id&&email ) {
      this.userStore.setUser({id: id, email: email});
    }
    this.userStore.isAuthenticated().subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });
  }


  logout() {
    this.authService.logout().subscribe({
      next: () => {
        localStorage.removeItem('token');
        this.userStore.clearUser();
        this.toaster.success(
          'Logout successful',
          'Success',
          {
            timeOut: 1000,
            toastClass:
              'absolute top-0 left-1/2 transform -translate-x-1/2 text-gray-900 p-4 rounded-md bg-green-200',
          }
        )      },
      error: (err) => {
        this.toaster.error('Logout failed');
      },
    })
  }
}
