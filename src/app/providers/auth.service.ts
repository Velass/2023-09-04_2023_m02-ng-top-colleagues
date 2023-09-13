import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private apiUrl = 'https://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2/login';

  private userLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public userLoggedIn$: Observable<boolean> = this.userLoggedInSubject.asObservable();

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",


    })
  };
  constructor(private http: HttpClient, private route: Router) { }

  userLoggin(loginForm: any) {
    return this.http.post<any>(`${this.apiUrl}`, loginForm, this.httpOptions)
    .pipe(tap(response => {
      this.userLoggedInSubject.next(true);
      this.userLoggedInSubject.next(response);
    }))
  }

  userLogout() {  
      this.userLoggedInSubject.next(false);
      localStorage.clear();
      this.route.navigate(["/login"]);
    }
  

  isLogged(loginForm: any): Observable<boolean> {
    return this.http.post<any>(this.apiUrl, loginForm, this.httpOptions).pipe(
      map(response => {
         console.log(response)
        // Si l'authentification réussit, émettez true
        this.userLoggedInSubject.next(true);
        return true;
      }),
      catchError(error => {
        console.log(error)
        // Si l'authentification échoue, émettez false et gérez l'erreur
        this.userLoggedInSubject.next(false);
        return of(false);
      })
    );
  }
}
