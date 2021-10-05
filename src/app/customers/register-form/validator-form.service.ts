import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
@Injectable()

export class ValidatorFormService {
  
  constructor(private formBuilder: FormBuilder) {}
  
  setForm = (): FormGroup => this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(60), Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.maxLength(100),
    Validators.minLength(2), Validators.email
    ]],
    phone: ['', [Validators.required, 
    Validators.pattern('^[\+]{0,1}380([0-9]{9})$')
    ]],
    position_id: ['', [Validators.required]],
    photo: ['', [Validators.required]]
    }); 
}