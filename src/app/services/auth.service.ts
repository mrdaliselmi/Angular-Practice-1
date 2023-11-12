// user.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private userIdSubject = new BehaviorSubject<string | null>(null);
  private userEmailSubject = new BehaviorSubject<string | null>(null);

  isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();
  userId$: Observable<string | null> = this.userIdSubject.asObservable();
  userEmail$: Observable<string | null> = this.userEmailSubject.asObservable();

  constructor() {
    this.loadUser();
  }

  private loadUser() {
    // Code to load user state from storage or API on application startup
    // Update isAuthenticated, userId, and userEmail subjects accordingly
  }

  loginUser(id: string, email: string) {
    // Code to handle successful login
    this.isAuthenticatedSubject.next(true);
    this.userIdSubject.next(id);
    this.userEmailSubject.next(email);
  }

  logoutUser() {
    // Code to handle logout
    this.isAuthenticatedSubject.next(false);
    this.userIdSubject.next(null);
    this.userEmailSubject.next(null);
  }
}
