import { Component, OnChanges, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {User, UserStore} from "../store/user.store";
import {AuthService} from "../CvTech/services/auth.service"; // Import the Router

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent implements OnInit {
  isAuthenticated: boolean = false;
  checkboxValue: boolean = false;
  user: any;
  constructor(
    private userStore: UserStore,
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService

  ) {}
  ngOnInit(): void {
   this.userStore.isAuthenticated().subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });
    this.userStore.getUser().subscribe((user) => {
      this.user=user;
    });
  }
  login(credentials:any) {

    this.authService.login(credentials).subscribe(
      {
        next: (user:any) => {
          this.userStore.setUser({id: user['id'], email: credentials.email});
          this.router.navigate(['/cv']);
        },
        error: (err) => {
          this.toastr.error('Email ou mot de passe incorrect', 'Erreur',{
            timeOut: 1000,
            toastClass:
              'absolute top-0 left-1/2 transform -translate-x-1/2 text-gray-900 p-4 rounded-md bg-red-200',

          });
        },
      }
    );
    if (this.checkboxValue) {
      this.dataSave();
    }
  }

  dataSave() {
    localStorage.setItem('token', this.user?.id);
  }

}
