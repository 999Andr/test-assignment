import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterFormComponent } from './register-form.component';
import { FormService } from './form.service';
import { ValidatorFormService } from './validator-form.service';
import { PopoverModule } from 'ngx-bootstrap/popover';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PopoverModule
  ],
  declarations: [ RegisterFormComponent ],
  providers:    [ FormService, ValidatorFormService ],
  exports:      [ RegisterFormComponent, PopoverModule ]
})
export class RegisterFormModule {}


