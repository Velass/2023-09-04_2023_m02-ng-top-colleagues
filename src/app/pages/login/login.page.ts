import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'tc-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  loginForm: FormGroup | any
  jwt: string | any;
  errorLogin: object | any;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private route: Router) { }



  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      pseudo: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(2)]],
    });

  }
  login() {
    this.auth.userLoggin(this.loginForm.value).subscribe((res) => {
      this.jwt = res.jwt;
      if (res.jwt) {
        localStorage.setItem('jwt', this.jwt)
        localStorage.setItem('pseudo',this.loginForm.value.pseudo)
        this.route.navigate(["/colleagues-list"]);
      } else {
        console.log("pas de jwt")
      }

    },
      (errorLogin) => {
        console.error(errorLogin)
        this.errorLogin = "Identifiant ou mot de passe incorrecte. ";
      });

  }

}
