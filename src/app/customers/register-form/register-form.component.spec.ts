import { fakeAsync, tick, ComponentFixture, TestBed} from '@angular/core/testing';
import { RegisterFormComponent } from './register-form.component';
import { FormService } from './form.service';
import { ValidatorFormService } from './validator-form.service';
import { FormBuilder } from '@angular/forms';
import { CheerfulService } from '../../shared/cheerful.service';
import { ModalService } from '../../shared/modal.service';
import { ApiService } from '../../shared/api.service';
import { OfflineService } from '../../shared/offline.service';
import { OnlineService } from '../../shared/online.service';
import { CheckService } from '../../shared/check.service';
import { SwUpdatesService } from '../../sw-updates/sw-updates.service';

let comp: RegisterFormComponent;
let fixture: ComponentFixture<RegisterFormComponent>;

class MockSwUpdatesService {}
class FakeFormBuilder {  
  group(arg: object): void {};
}

describe('RegisterFormComponent', () => {
  beforeEach(fakeAsync(() => {
    TestBed
        .configureTestingModule({
          declarations: [ RegisterFormComponent ],
          providers:    [
            { provide: FormService, useClass: FormService},
            { provide: ValidatorFormService,  
              useFactory: () => new ValidatorFormService(new FormBuilder()),
              deps: [] 
            },
            { provide: SwUpdatesService, useClass: MockSwUpdatesService as unknown as SwUpdatesService } 
          ]
        })
          .compileComponents()
            .then(() => {
              fixture = TestBed.createComponent(RegisterFormComponent);
              comp = fixture.componentInstance;
            });
  }));

  it('can instantiate the component', () => {
    
    fixture.detectChanges(); 
    expect(comp).not.toBeNull(); 
    comp.invalidField('email');
    comp.invalidFieldPhoto();
    comp.onSubmit(); 
    
  });

});




describe('RegisterFormComponent class', () => {
  
  let component: RegisterFormComponent;
  let modalService: ModalService;
  
  class MockCheckService {
    constructor(public nativeWindow: Window | null) {}
  }

  class MockRouter { 
    navigate(arg: string[]): void {} 
  }

  class MockApiService {
    constructor(private check: CheckService, private offline: OfflineService) {}  

    getPositions = (): Promise<any> => Promise.resolve({success: true, positions: []}); 
    errClientHandler = (arg: string, err: any): any[] => [] ;
    errServerHandler(arg: string, data: any): void {};
    makePost = (arg: FormData): Promise<any> => 
      Promise.resolve({success: true});
  } 
   
  class MockApiServiceWhenServerErrors {
    constructor(private check: CheckService, private offline: OfflineService) {}  

    getPositions = (): Promise<any> => Promise.resolve({success: false, positions: []}); 
    errClientHandler = (arg: string, err: any): any[] => [] ;
    errServerHandler(arg: string, data: any): void {};
    makePost = (arg: FormData): Promise<any> => 
      Promise.resolve({success: false});
  } 
  
  class MockApiServiceWhenClientErrors {
    constructor(private check: CheckService, private offline: OfflineService) {}  

    getPositions = (): Promise<any> => Promise.reject({success: true, positions: []}); 
    errClientHandler = (arg: string, err: any): any[] => [] ;
    errServerHandler(arg: string, data: any): void {};
    makePost = (arg: FormData): Promise<any> => 
      Promise.reject({success: true});
  } 

  it('class should work on the server', () => {
    TestBed.configureTestingModule({
    
      providers: [
        RegisterFormComponent,
        { provide: CheckService, useFactory: () => new MockCheckService(null), deps: [] },
        { provide: CheerfulService, useClass: CheerfulService},
        { provide: ModalService, useClass: ModalService},
        { provide: OnlineService, useClass: OnlineService},
        { provide: FormService, useClass: FormService},
        { provide: ApiService, useFactory: () => new ApiService(
            new CheckService('server' as unknown as object),
            new OfflineService( new CheckService('server' as unknown as object))
          ),
          deps: [] 
        },
        { provide: ValidatorFormService,  
          useFactory: () => new ValidatorFormService(new FormBuilder()),
          deps: [] 
        },
        { provide: SwUpdatesService, useClass: MockSwUpdatesService as unknown as SwUpdatesService }
      ]
    }) ;
  
    component = TestBed.inject(RegisterFormComponent);

    expect(component).toBeTruthy();
    component.ngOnInit();
    component.ngOnDestroy();
  });
   
  it('class should work on the browser', fakeAsync(() => {
    TestBed.configureTestingModule({
    
      providers: [
        RegisterFormComponent,
        { provide: CheckService, useFactory: () => new MockCheckService(window), deps: [] },
        { provide: CheerfulService, useClass: CheerfulService},
        { provide: ModalService, useClass: ModalService},
        { provide: OnlineService, useClass: OnlineService},
        { provide: FormService, useClass: FormService},
        { provide: ApiService, useFactory: () => new MockApiService(
            new CheckService('window' as unknown as object),
            new OfflineService( new CheckService('window' as unknown as object))
          ),
          deps: [] 
        },
        { provide: ValidatorFormService,  
          useFactory: () => new ValidatorFormService(new FormBuilder()),
          deps: [] 
        },
        { provide: SwUpdatesService, useClass: MockSwUpdatesService as unknown as SwUpdatesService }
      ]
    }) ;
  
    component = TestBed.inject(RegisterFormComponent);
    let onlineService: OnlineService = TestBed.inject(OnlineService);
    
    expect(component).toBeTruthy();
    
    component.ngOnInit();
    component.getPositions();
    component.onPicked({} as unknown as HTMLInputElement);
    component.onPicked({files: []} as unknown as HTMLInputElement);
    component.onPicked(
      {files: [{} as unknown as File], value: null} as unknown as HTMLInputElement);
    
    component.submitted = true;
    component.invalidFieldPhoto();

    component.invalidField('email');
    
    component.submitted = false;
    component.invalidFieldPhoto();

    spyOn(component, 'isFormValueInvalid').and.returnValue(false);
    class mockFormData {
      append(): void {}
    }
    component.fS.formData = new mockFormData() as unknown as FormData;
    component.onSubmit();

    component.sendPost({} as unknown as FormData);

    onlineService.doOnline.next(true);
    component.ngOnInit();
    tick();
    
    onlineService.doOnline.next(false);
    component.ngOnInit();
    tick();

  })); 

  it('class should work on the browser when server errors', () => {
    TestBed.configureTestingModule({
    
      providers: [
        RegisterFormComponent,
        { provide: CheckService, useFactory: () => new MockCheckService(window), deps: [] },
        { provide: CheerfulService, useClass: CheerfulService},
        { provide: ModalService, useClass: ModalService},
        { provide: FormService, useClass: FormService},
        { provide: ApiService, useFactory: () => new MockApiServiceWhenServerErrors(
            new CheckService('window' as unknown as object),
            new OfflineService( new CheckService('window' as unknown as object))
          ),
          deps: [] 
        },
        { provide: ValidatorFormService,  
          useFactory: () => new ValidatorFormService(new FormBuilder()),
          deps: [] 
        },
        { provide: SwUpdatesService, useClass: MockSwUpdatesService as unknown as SwUpdatesService }
      ]
    }) ;
  
    component = TestBed.inject(RegisterFormComponent);
    let fS: FormService = TestBed.inject(FormService);
    
    expect(component).toBeTruthy();
    component.ngOnInit();
    component.getPositions();
    component.sendPost({} as unknown as FormData);

    let sP = spyOn(component, 'isFormValueInvalidExceptImg');
    sP.and.returnValue(false); 
    component.isFormValueInvalid();
    
  }); 

  it('class should work on the browser when client errors', () => {
    TestBed.configureTestingModule({
    
      providers: [
        RegisterFormComponent,
        { provide: CheckService, useFactory: () => new MockCheckService(window), deps: [] },
        { provide: CheerfulService, useClass: CheerfulService},
        { provide: ModalService, useClass: ModalService},
        { provide: FormService, useClass: FormService},
        { provide: ApiService, useFactory: () => new MockApiServiceWhenClientErrors(
            new CheckService('window' as unknown as object),
            new OfflineService( new CheckService('window' as unknown as object))
          ),
          deps: [] 
        },
        { provide: ValidatorFormService,  
          useFactory: () => new ValidatorFormService(new FormBuilder()),
          deps: [] 
        },
        { provide: SwUpdatesService, useClass: MockSwUpdatesService as unknown as SwUpdatesService }
      ]
    }) ;
  
    component = TestBed.inject(RegisterFormComponent);

    expect(component).toBeTruthy();
    component.ngOnInit();
    component.getPositions();
    component.sendPost({} as unknown as FormData);
   
  });
});  


