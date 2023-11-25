import {BehaviorSubject, map, Observable} from 'rxjs';
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
export interface User {
  id: string;
  email: string;
}
@Injectable({
  providedIn: 'root',
})
export class UserStore {
  private readonly user$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  private readonly isAuthenticated$: Observable<boolean> = this.user$.pipe(
    map(user => user !== null)
  );
  private usersUrl = 'https://apilb.tridevs.net/api/Users/login';
  constructor(private http: HttpClient) {

  }
  public loginUser(email: string, password: string) {
    return(this.http.post(this.usersUrl, {
      email: email,
      password: password,
    }));

  }
  public logoutUser() {
    this.clearUser();
  }
  public getUser(): Observable<User | null> {
    return this.user$;
  }

  public setUser(user: User): void {
    this.user$.next(user);
  }

  public clearUser(): void {
    this.user$.next(null);
  }

  public isAuthenticated(): Observable<boolean> {
    return this.isAuthenticated$;
  }}
