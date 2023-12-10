import {BehaviorSubject, map, Observable} from 'rxjs';
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../models/user.model";

@Injectable({
  providedIn: 'root',
})
export class UserStore {
  private readonly user$: BehaviorSubject<UserModel | null> = new BehaviorSubject<UserModel | null>(null);
  private readonly isAuthenticated$: Observable<boolean> = this.user$.pipe(
    map(user => user !== null)
  );
  constructor(private http: HttpClient) {

  }
   public getUser(): Observable<UserModel | null> {
    return this.user$;
  }

  public setUser(user: UserModel): void {
    this.user$.next(user);
  }

  public clearUser(): void {
    this.user$.next(null);
  }

  public isAuthenticated(): Observable<boolean> {
    return this.isAuthenticated$;
  }}
