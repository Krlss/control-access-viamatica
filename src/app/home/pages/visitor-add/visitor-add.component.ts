import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VisitorService } from '../../services/visitor.service';

@Component({
  selector: 'app-visitor-add',
  templateUrl: './visitor-add.component.html',
  styleUrl: './visitor-add.component.css',
})
export class VisitorAddComponent implements OnInit {
  addVisitorForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private visitorService: VisitorService
  ) {}

  ngOnInit(): void {
    this.addVisitorForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      razon_v: ['', Validators.required],
      h_pico: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.addVisitorForm.invalid) {
      this.addVisitorForm.markAllAsTouched();
      return;
    }

    this.visitorService.register(this.addVisitorForm.value);
    this.addVisitorForm.reset();
  }
}
