import { CustomersComponent } from './customers.component';
import { SwUpdatesService } from '../sw-updates/sw-updates.service';
import { fakeAsync, ComponentFixture, tick, TestBed } from '@angular/core/testing';
import { CheckService } from '../shared/check.service';
import { AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { OnlineService } from '../shared/online.service';
import { ModalService } from '../shared/modal.service'; 
import { SidebarService } from '../shared/sidebar.service'; 
import { SidebarTriggerService } from '../shared/sidebar-trigger.service'; 
import { CustomersModule } from './customers.module';
import { RegisterFormModule } from './register-form/register-form.module';
import { SwUpdatesModule } from '../sw-updates/sw-updates.module'; 
import { CustomersRoutingModule } from './customers-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './customers-routing.module';

let comp: CustomersComponent;
let fixture: ComponentFixture<CustomersComponent>;
let modalService: ModalService; let onlineService: OnlineService;
let sidebarTriggerService: SidebarTriggerService;

describe('CustomersComponent', () => {

  beforeEach(() => {
    
    TestBed.configureTestingModule({
      providers: [
        CustomersComponent,
      ]
    });
  
    comp = TestBed.inject(CustomersComponent);
  
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });
});

  
describe('CustomersComponent', () => {
  
  class MockCheckService {
    constructor(public nativeWindow: Window | null) {}
  }
  
  class MockSidebarService {
    set(arg: HTMLDivElement, argOne: string, argTwo: string, argT: string){}
  }

  it('class should work on the server', () => {
    TestBed.configureTestingModule({
    
      providers: [
        CustomersComponent,
        { provide: CheckService, useFactory: () => new MockCheckService(null), deps: [] },
        { provide: ModalService, useClass: ModalService},
        { provide: OnlineService, useClass: OnlineService},
        { provide: SidebarService, useClass: SidebarService},
        { provide: SidebarTriggerService, useClass: SidebarTriggerService},
      ]
    }) ;
  
    comp = TestBed.inject(CustomersComponent);
    
    expect(comp).toBeTruthy();
    comp.ngAfterViewInit();
    comp.ngOnInit();
    comp.ngOnDestroy();
  });

  it('class should start working in the browser', fakeAsync(() => {
    TestBed.configureTestingModule({
    
      providers: [
        CustomersComponent,
        { provide: CheckService, useFactory: () => new MockCheckService(window), deps: [] },
        { provide: ModalService, useClass: ModalService},
        { provide: SidebarService, useClass: MockSidebarService as unknown as SidebarService},
        { provide: SidebarTriggerService, useClass: SidebarTriggerService}
      ]
    }) ;
  
    comp = TestBed.inject(CustomersComponent);
    
    expect(comp).toBeTruthy();
    comp.ngAfterViewInit();
    comp.ngOnInit();
    comp.ngOnDestroy();  
  }));
});
  

describe('CustomersComponent & CustomersModule', () => {
  
  beforeEach(fakeAsync(() => {
    TestBed
        .configureTestingModule({ imports: [CustomersModule, RouterTestingModule.withRoutes(routes),], })
        .overrideModule(CustomersModule, {
            remove: { imports: [RegisterFormModule, SwUpdatesModule] }
          }
        )
        .compileComponents()
          .then(() => {
              fixture = TestBed.createComponent(CustomersComponent);
              
              comp = fixture.componentInstance;
              const injector = fixture.debugElement.injector;
              modalService = injector.get(ModalService);
              onlineService = injector.get(OnlineService);
              sidebarTriggerService = injector.get(SidebarTriggerService);
              fixture.detectChanges();
              tick(4500);
          
      }) 
          
  }));

  it('class methods should work', fakeAsync(() => {

    expect(comp).not.toBeNull();

    modalService.doModal.next(true);
    comp.ngOnInit();
    tick();                   
    fixture.detectChanges();
    tick(4500); 
    expect(comp.hiddModal).toBeFalsy();
    
    onlineService.doOnline.next(true);
    sidebarTriggerService.isInitial.next(true);
    comp.ngAfterViewInit();
    window.dispatchEvent(new Event('online'));
    tick();

    comp.showChildModal(true);
    comp.showSidebarMenu();
    comp.handler(true);
    comp.handler(false);
    comp.hideChildModal(); 
    tick();                   
    fixture.detectChanges();
    tick(4500);
        
  }));

})

