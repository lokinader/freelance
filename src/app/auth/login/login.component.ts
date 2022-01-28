import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private _fb: FormBuilder, private _route: Router) {}

  ngOnInit(): void {
    this.intiLoginForm();
  }

  private intiLoginForm(): void {
    this.loginForm = this._fb.group({
      userName: [null, Validators.required],
      password: [null, Validators.required],
      rememberMe: [null],
    });
  }

  public submitForm(): void {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this._route.navigateByUrl('app/dashboard');
    }
  }
}
