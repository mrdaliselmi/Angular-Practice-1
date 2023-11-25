// user.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { compareSegments } from '@angular/compiler-cli/src/ngtsc/sourcemaps/src/segment_marker';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private usersUrl = 'https://apilb.tridevs.net/api/Users/login';

  isAuthenticated$: Observable<boolean> =
    this.isAuthenticatedSubject.asObservable();

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
    response
      .pipe(
        tap(() => {
          this.isAuthenticatedSubject.next(true);
        }),
      )
      .subscribe();

    return response;
  }

  logoutUser() {
    // Code to handle logout
    localStorage.clear();
    this.isAuthenticatedSubject.next(false);
  }
}
