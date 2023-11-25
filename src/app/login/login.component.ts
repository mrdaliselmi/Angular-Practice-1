import { Component, OnChanges, OnInit, Output } from '@angular/core';
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
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  isAuthenticated: boolean = false;
  email: string = '';
  password: string = '';
  checkboxValue: boolean = false;
  constructor(
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService,
  ) {}
  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  login() {
    if (this.checkboxValue) {
      this.dataSave();
    }
    console.log(this.email, this.password);
    this.authService.loginUser(this.email, this.password).subscribe(
      (response) => {
        console.log('Login successful:', response);
        // Access the content of the response here
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Error during login:', error);
        // Handle errors here
        this.toastr.error('Wrong credentials', 'Error', {
          timeOut: 1000,
          toastClass:
            'absolute top-0 left-1/2 transform -translate-x-1/2 text-gray-900 p-4 rounded-md bg-red-300',
        });
      },
    );
  }

  dataSave() {
    localStorage.setItem('email', this.email);
    localStorage.setItem('password', this.password);
  }
  logout() {
    this.authService.logoutUser();
    this.toastr.success('You have been logged out');
    this.router.navigate(['/login']);
    this.isAuthenticated = false;
  }
}
