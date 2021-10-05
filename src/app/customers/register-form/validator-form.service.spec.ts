import { ValidatorFormService } from './validator-form.service';
import { FormBuilder } from '@angular/forms';


describe('ValidatorFormService', () => {
  
  let service: ValidatorFormService; 

  it('should be work', () => {
    
    class FakeFormBuilder {  
      group(arg: object): void {};
    }

    
    service =  new ValidatorFormService( new FakeFormBuilder() as unknown as FormBuilder );
    expect(service).toBeTruthy(); 
    service.setForm(); 

  });

});