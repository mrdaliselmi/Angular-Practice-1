import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {UserStore} from "../store/user.store";

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
  constructor(private userStore:UserStore) {}
  ngOnInit(): void {
    this.userStore.isAuthenticated().subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });
    this.userStore.loginUser(this.email, this.password).subscribe();
    this.userStore.getUser().subscribe((user) => {
      this.user=user;

    });

  }
  logout() {
    localStorage.clear();
    this.userStore.logoutUser();
  }
}
