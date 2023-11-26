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
  isAuthenticated: boolean = false;
  email: string = localStorage.getItem('email') || '';
  password: string = localStorage.getItem('password') || '';
  user: any;
  constructor(private userStore:UserStore,private authService:AuthService,private toaster:ToastrService) {}
  ngOnInit(): void {if(localStorage.getItem('email') && localStorage.getItem('password')){
    this.userStore.loginUser(this.email, this.password).subscribe(
      (response:any) => {
        console.log('Login successful:', response);
        const id = response["id"];
        this.userStore.setUser({id:id, email:this.email});
      })}
    this.userStore.isAuthenticated().subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });
    this.userStore.getUser().subscribe((user) => {
      this.user=user;

    });
    console.log(this.isAuthenticated)
  }
  logout() {
    this.authService.logout(localStorage.getItem('token')).subscribe(
      {
        next: () => {
          this.userStore.clearUser();
          localStorage.removeItem('token');
        },
        error: (err) => {
          this.toaster.error('Erreur de déconnexion')
        },
      }
    );
  }
}
