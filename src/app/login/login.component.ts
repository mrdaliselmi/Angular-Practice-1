import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  isAuthenticated: boolean = false;
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
  ) { }
  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
  }
  login(){
    console.log("email",this.email);
    console.log("password",this.password);
  }

  logout(){
    this.authService.logoutUser();
    this.toastr.success('You have been logged out');
  }
}
