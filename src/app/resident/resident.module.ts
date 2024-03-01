import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './pages/register/register.component';
import { ResidentRoutingModule } from './resident-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, ResidentRoutingModule, ReactiveFormsModule],
  exports: [RegisterComponent],
})
export class ResidentModule {}
