import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResidentService } from '../../services/resident.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private residentService: ResidentService,
    private router: Router,
    private authService: AuthService
  ) {
    if (this.authService.isAuthenticated()) this.router.navigate(['/home']);
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      identificacion: ['', Validators.required],
      placa: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required, Validators.minLength(6)]],
      confirmar_contraseña: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.residentService.register(this.registerForm.value);
      this.router.navigate(['/auth/login']);
      return;
    }
    this.registerForm.markAllAsTouched();
  }
}
