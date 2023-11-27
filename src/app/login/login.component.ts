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
    if (this.checkboxValue) {
      this.dataSave();
    }
    this.authService.login(credentials).subscribe(
      {
        next: (user:any) => {
          this.userStore.setUser({id: user['id'], email: credentials.email});
          this.router.navigate(['/cv']);
        },
        error: (err) => {
          this.toastr.error('Email ou mot de passe incorrect');
        },
      }
    );
  }

  dataSave() {
    localStorage.setItem('token', this.user.id);
  }

}
