import { fakeAsync, tick, ComponentFixture, TestBed} from '@angular/core/testing';
import { CheckService } from './shared/check.service';
import { FirstPageService } from './first-page.service';
import { LazyImgService } from './lazy-img.service';  
import { ScrollService } from './shared/scroll.service'; 
import { AppComponent } from './app.component';
import { SidebarTriggerService } from './shared/sidebar-trigger.service';
import { Router } from '@angular/router';
import { AppModule } from './app.module';
import { routes, AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

let comp: AppComponent;
let fixture: ComponentFixture<AppComponent>;

describe('AppComponent & AppModule', () => {
  
  beforeEach(fakeAsync(() => {
    TestBed
      .configureTestingModule({ imports: [AppModule], })
        
        .compileComponents()
          .then(() => {
              fixture = TestBed.createComponent(AppComponent);
              
              comp = fixture.componentInstance;
              fixture.detectChanges();
              tick(4500);
          });
  }));

  it('should create', () => {
    expect(comp).not.toBeNull();
  });
 
});


describe('AppComponent', () => {
  
  let component: AppComponent;
  
  class FakeLazyImgService {
    showImg(): void {}
  }

  class MockCheckService {
    constructor(public nativeWindow: Window | null) {}
  }

  class MockFirstPageService {
     constructor(public router: Router) {}
     set(w: Window): void {};
  }

  class MockSidebarService {
    set(arg: HTMLDivElement, argOne: string, argTwo: string, argT: string){}
  }
  
  class MockRouter { 
    navigate(arg: string[]): void {} 
  }

  it('class should work on the server', () => {
    TestBed.configureTestingModule({
    
      providers: [
        AppComponent,
        { provide: CheckService, useFactory: () => new MockCheckService(null), deps: [] },
        { provide: SidebarTriggerService, useClass: SidebarTriggerService},
        { provide: FirstPageService,  
          useFactory: () => new FirstPageService(new MockRouter() as unknown as Router),
          deps: [] 
        },
        { provide: LazyImgService, useClass: FakeLazyImgService as unknown as LazyImgService  }
      ]
    }) ;
  
    component = TestBed.inject(AppComponent);

    expect(component).toBeTruthy();
  });

  it('class should start working in the browser', fakeAsync(() => {
    TestBed.configureTestingModule({
    
      providers: [
        AppComponent,
        { provide: CheckService, useFactory: () => new MockCheckService(window), deps: [] },
        { provide: SidebarTriggerService, useClass: SidebarTriggerService},
        { provide: FirstPageService,  
          useFactory: () => new MockFirstPageService(new MockRouter() as unknown as Router),
          deps: [] 
        },
        { provide: LazyImgService, useClass: FakeLazyImgService as unknown as LazyImgService  }
      ]
    });
  
    component = TestBed.inject(AppComponent);
    
    expect(component).toBeTruthy(); 
    component.firstValue = false;
    component.mainAppCompMethod({} as unknown as Window);

  }));

});    


import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkWithHref } from '@angular/router';
import { By } from '@angular/platform-browser';
import { DebugElement, Type } from '@angular/core';
import { Location } from '@angular/common';
import { SpyLocation } from '@angular/common/testing';
import { CustomersModule } from './customers/customers.module';
import { RegisterFormModule } from './customers/register-form/register-form.module';
import { SwUpdatesModule } from './sw-updates/sw-updates.module'; 

let router: Router;
let location: SpyLocation;
let sidebarTriggerService: SidebarTriggerService;

describe('AppComponent & RouterTestingModule', () => {
  beforeEach(fakeAsync(() => {
    TestBed
        .configureTestingModule({
          imports: [
            AppModule,
            RouterTestingModule.withRoutes(routes),
          ],
        })
        .overrideModule(CustomersModule, {
          remove: { imports: [RegisterFormModule, SwUpdatesModule] }
        }
        )
        .compileComponents();
  }));

  it('should navigate to "/" immediately', fakeAsync(() => {
    createComponent();
    tick(); 
    expectPathToBe('/', 'after initialNavigation()');
  }));

  it('should start to navigate to "Customers" on click ', fakeAsync(() => {
    createComponent();
    window.dispatchEvent(new Event('click'));
    avance();
    expectPathToBe('/customers');
  }));

  it('should start to navigate to "Customers" on scroll ', fakeAsync(() => {
    createComponent();
    window.dispatchEvent(new Event('scroll'));
    avance();
    expectPathToBe('/customers');
  }));

  it('"showSidebarMenu" method should work', fakeAsync(() => {
    createComponent();
    expect(comp.firstValue).toBeTruthy();
    comp.showSidebarMenu();
    tick(999);
    comp.firstValue = false;
    comp.showSidebarMenu();
  }));

});


import { NgModuleFactoryLoader } from '@angular/core';
import { SpyNgModuleFactoryLoader } from '@angular/router/testing';
 
import { CustomersComponent } from './customers/customers.component';
import { CustomersRoutingModule } from './customers/customers-routing.module';

let loader: SpyNgModuleFactoryLoader;
let firstPage: FirstPageService;


describe('AppComponent & Lazy Loading ', () => {
  
  beforeEach(fakeAsync(() => {
    TestBed
        .configureTestingModule({
          imports: [
            AppModule,
            RouterTestingModule.withRoutes(routes),
          ],
        })
        .overrideModule(CustomersModule
          , {
          remove: {imports: [RegisterFormModule, SwUpdatesModule]}
          }
        )
        .compileComponents();
  }));

  beforeEach(fakeAsync(() => {
   
    createComponent();
    loader = TestBed.inject(NgModuleFactoryLoader) as SpyNgModuleFactoryLoader;
    loader.stubbedModules = {expected: CustomersModule};
    router.resetConfig([{path: 'customers', loadChildren: 'expected'}]);
  }));

  it('should navigate to "Customers" on click', fakeAsync(() => {
    window.dispatchEvent(new Event('click'));
    avance();
    expectPathToBe('/customers');
    expectElementOf(CustomersComponent);
  
  }));

  it('should navigate to "Customers" on scroll', fakeAsync(() => {
    window.dispatchEvent(new Event('scroll'));
    avance();
    expectPathToBe('/customers');
    expectElementOf(CustomersComponent);
  }));

  it('can navigate to "Customers" when location URL change', fakeAsync(() => {
    location.go('/customers');
    avance();
    expectPathToBe('/customers');
    expectElementOf(CustomersComponent);
  }));

});


function avance(): void {
  tick();                   
  fixture.detectChanges();
  tick(4500);                 
}

function createComponent() {
  
  fixture = TestBed.createComponent(AppComponent);
  comp = fixture.componentInstance;

  const injector = fixture.debugElement.injector;
  sidebarTriggerService = injector.get(SidebarTriggerService);
  location = injector.get(Location) as SpyLocation;
  router = injector.get(Router); 
  router.initialNavigation();
  
  avance();
}

function expectPathToBe(path: string, expectationFailOutput?: any) {
  expect(location.path()).toEqual(path, expectationFailOutput || 'location.path()');
}

function expectElementOf(type: Type<any>): any {
  const el = fixture.debugElement.query(By.directive(type));
  expect(el).toBeTruthy('expected an element for ' + type.name);
  return el;
}


