import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginFormGroup: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.loginFormGroup = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    if (this.authService.isAuthenticated()) this.router.navigate(['/home']);
  }

  login() {
    if (this.loginFormGroup.valid) {
      const res = this.authService.login(
        this.loginFormGroup.get('email')!.value,
        this.loginFormGroup.get('password')!.value
      );
      if (res) {
        this.router.navigate(['/home/authors']);
      } else {
        alert('Invalid email or password');
      }
    }
  }
}
