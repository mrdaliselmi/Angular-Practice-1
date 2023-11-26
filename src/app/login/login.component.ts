import { Component, OnChanges, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {UserStore} from "../store/user.store"; // Import the Router

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
  user: any;
  constructor(
    private userStore: UserStore,
    private router: Router,
    private toastr: ToastrService,
  ) {}
  ngOnInit(): void {
   this.userStore.isAuthenticated().subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });
    this.userStore.getUser().subscribe((user) => {
      this.user=user;
    });
  }
  login() {
    if (this.checkboxValue) {
      this.dataSave();
    }
    this.userStore.loginUser(this.email, this.password).subscribe(
      (response:any) => {
        console.log('Login successful:', response);
        const id = response["id"];
        this.userStore.setUser({id:id, email:this.email});
        localStorage.setItem('id',id)
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

}
