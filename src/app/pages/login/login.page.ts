import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tc-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  loginForm: FormGroup | any
  constructor(private formBuilder: FormBuilder,) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      pseudo: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(2)]],
    });

  }
  login(){
    console.log(this.loginForm.value)
  }

}
