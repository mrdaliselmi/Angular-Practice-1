import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isAuthenticated: boolean = false;
  email: string = localStorage.getItem('email') || '';
  password: string = localStorage.getItem('password') || '';

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe(
      (isAuthenticated) => (this.isAuthenticated = isAuthenticated),
    );
    this.authService.loginUser(this.email, this.password).subscribe();
  }
  logout() {
    this.authService.logoutUser();
  }
}
