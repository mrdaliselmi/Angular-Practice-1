import {Component, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'; // Import the Router

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

  constructor(private router: Router,
    private authService: AuthService,
    private toastr: ToastrService,
  ) { }
  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  login(){

    this.authService.loginUser(this.email, this.password).subscribe(
      (response) => {
        console.log('Login successful:', response);
        // Access the content of the response here
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Error during login:', error);
        // Handle errors here

      }
    );  }

  logout(){
    this.authService.logoutUser();
    this.toastr.success('You have been logged out');
    this.router.navigate(['/login']);
    this.isAuthenticated = false;
  }
}
