import { Component, OnChanges, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserStore} from "../store/user.store";
import {AuthService} from "../CvTech/services/auth.service";

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
  constructor(
    private userStore: UserStore,
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService

  ) {}
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/cv']);
    }
  }
  login(credentials:NgForm) {
    this.authService.login(credentials.form.value).subscribe(
      {
        next: (user:any) => {
          this.userStore.setUser({id: user['id'], email: credentials.form.value.email});
          if (this.checkboxValue) {
            localStorage.setItem('token', user['id'])
          }
          this.router.navigate(['/cv']);
        },
        error: (err) => {
          console.log(err.message)
          this.toastr.error(err, 'Erreur',{
            timeOut: 1000,
            toastClass:
              'absolute top-0 left-1/2 transform -translate-x-1/2 text-gray-900 p-4 rounded-md bg-red-200',
          });
        },
      }
    );

  }

}
