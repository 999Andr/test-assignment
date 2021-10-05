import { ApiService } from '../../shared/api.service';
import { Component, OnInit, OnDestroy } from '@angular/core'; 
import { CheckService } from '../../shared/check.service';
import { CheerfulService } from '../../shared/cheerful.service';
import { FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { FormService } from './form.service';
import { Position } from '../../shared/kinds';
import { ModalService } from '../../shared/modal.service';
import { OnlineService } from '../../shared/online.service';
import { ValidatorFormService } from './validator-form.service';
import { SwUpdatesService } from '../../sw-updates/sw-updates.service'; 

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})

export class RegisterFormComponent implements OnInit, OnDestroy {
  
  offline: boolean = false; 
  positions!: Position[]; 
  registered: boolean = false;
  showButton: boolean = false;
  showWait: boolean = true;
  submitted: boolean = false;
  userForm: FormGroup | undefined;
  
  constructor(
    public fS: FormService,
    private apiService: ApiService,
    private checkService: CheckService,
    private cheerfulService: CheerfulService,
    private modalService: ModalService,
    private onlineService: OnlineService,
    private validService: ValidatorFormService,
    private swu: SwUpdatesService) {}
  
  
  ngOnInit(): void { 
    
    if ( this.checkService.nativeWindow ) {
      this.getPositions();
      this.onlineService.doOnline
        .pipe(takeUntil(this.onlineService.onDestroy))
          .subscribe((arg: boolean): boolean | null => arg ? this.offline = false : null);
    }
      
    this.userForm = this.validService.setForm();

  }

  getPositions(): void {
    this.apiService.getPositions()
      .then((data): Position[] | void => data.success ? 
        this.positions = data.positions : this.apiService.errServerHandler("getPositions", data)
      )
      .catch((err): void => {
        this.positions = <Position[]>this.apiService.errClientHandler("getPositions", err)[0];
        this.offline = this.apiService.errClientHandler("getPositions", err)[1];
      });
  }  
   
  invalidField = (arg: string): boolean => 
    (this.submitted && (<FormGroup>this.userForm).controls[arg]['errors'] != null);
  
  invalidFieldPhoto = (): boolean => (this.submitted && (this.fS.isImgErr()));

  isFormValueInvalidExceptImg = (): boolean => (<FormGroup>this.userForm).invalid == true;

  isFormValueInvalid = (): boolean => (this.isFormValueInvalidExceptImg() || this.fS.isImgErr());

  onPicked(input: HTMLInputElement): void {
    
    if (input.files && input.files[0]) 
      this.fS.checkFileToAppend(input.files[0]);
      this.fS.messagesStream
        .pipe(
          takeUntil(this.fS.onDestroy)
        )
        .subscribe((arg: null | string): string => input.value = '');  
  }
  
  onSubmit(): void {
    this.submitted = true;
    
    if (this.isFormValueInvalid()) {  
      return;
    } else { 
      this.showButton =  true;
      this.showWait = false;
      Object.entries((<FormGroup>this.userForm).value).forEach(([key,v]: [string, unknown]): void => { 
        key == 'photo' ? key = '' : null; this.fS.formData.append(key, <Blob>v) } ); 
      this.sendPost(this.fS.formData);
      this.registered = true; 
      (<FormGroup>this.userForm).reset();
      this.submitted = false;
      this.fS.imgErrorMessage = 'NONE';
    }
  } 
  
  sendPost(formDataValue: FormData): void {
    this.apiService.makePost(formDataValue)
      .then((data): void => {
        console.log(data);
        this.showButton = false;
        this.showWait = true; 

          if (data.success) { 
            this.modalService.setModal(true);
            this.cheerfulService.setValues(true); 
          } else { 
            this.apiService.errServerHandler("sendPost", data);
          }

      })
      .catch((err): void => { 
        this.offline = this.apiService.errClientHandler("sendPost", err)[1]; 
        this.showButton = !this.apiService.errClientHandler("sendPost", err)[1]; 
        this.showWait = this.apiService.errClientHandler("sendPost", err)[1];
      })      
  } 

  ngOnDestroy(): void {
    this.fS.onDestroy.next();
    this.onlineService.onDestroy.next();
  }

}

