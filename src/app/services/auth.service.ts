// user.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private userIdSubject = new BehaviorSubject<string | null>(null);
  private userEmailSubject = new BehaviorSubject<string | null>(null);
  private usersUrl = 'https://apilb.tridevs.net/api/Users/login';

  isAuthenticated$: Observable<boolean> =
    this.isAuthenticatedSubject.asObservable();
  userId$: Observable<string | null> = this.userIdSubject.asObservable();
  userEmail$: Observable<string | null> = this.userEmailSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadUser();
  }

  private loadUser() {
    // Code to load user state from storage or API on application startup
    // Update isAuthenticated, userId, and userEmail subjects accordingly
  }
  loginUser(email: string, password: string) {
    // Code to handle successful login
    let response = this.http.post(this.usersUrl, {
      email: email,
      password: password,
    });
    response.pipe(
      // Do any processing you need here

      // Assuming the response indicates a successful login
      tap(() => {
        this.isAuthenticatedSubject.next(true);
        this.userEmailSubject.next(email);
      }),
    );
    return response;
  }

  logoutUser() {
    // Code to handle logout
    this.isAuthenticatedSubject.next(false);
    this.userIdSubject.next(null);
    this.userEmailSubject.next(null);
  }
}
