import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private apiUrl = 'https://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2/login';

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      
      
    })
  };
  constructor(private http: HttpClient) { }

  identification(loginForm: any) {
    return this.http.post<any>(`${this.apiUrl}`, loginForm, this.httpOptions)
  }
}
