import { AfterViewInit, ElementRef, Component, OnInit, OnDestroy, ViewChild } from 
'@angular/core';
import { ApiService } from '../../shared/api.service';
import { CheckService } from '../../shared/check.service';
import { CheerfulService } from '../../shared/cheerful.service';
import { User } from '../../shared/kinds';
import { DisplayUsersService } from '../../shared/display-users.service';
import { takeUntil } from 'rxjs/operators';
import { OnlineService } from '../../shared/online.service'; 

@Component({
  selector: 'cheerful-users',
  templateUrl: './cheerful-users.component.html' 
})

export class CheerfulUsersComponent implements AfterViewInit, OnInit, OnDestroy {
  
  @ViewChild('top', {static: false}) nameElem!: ElementRef<HTMLDivElement>;
  offline: boolean = false;  
  clickCount: number = 2; 
  hideButton: boolean = false;
  users!: User[];
  width!: number;
  
  constructor (
    private apiService: ApiService,
    private checkService: CheckService,
    private cheerfulService: CheerfulService,
    private dUs: DisplayUsersService,
    private onlineService: OnlineService
    ) {}
  
  getUsers(arg: number): void {
    this.apiService.getUsers(arg)
      .then((data): void => {
        console.log(data);  
        data.success? this.users = data.users : this.apiService.errServerHandler("getUsers", data);
      })
      .catch((err): void => {
        this.users = <User[]>this.apiService.errClientHandler("getUsers", err)[0];
        this.offline = this.apiService.errClientHandler("getUsers", err)[1];
      }) 
  }

  ifPlatformBrowserGetUsers(w: Window | null): void {
    
    if (w) {
      this.width = this.dUs.getViewport(<Window>this.checkService.nativeWindow);
      this.getUsers(this.width);
    }
  }

  ngAfterViewInit(): void {
    
    if (this.checkService.nativeWindow) {
      this.dUs.getUsers$()
        .subscribe((arg: number): void => { 
          this.getUsers(arg);
          this.hideButton = false;
          this.clickCount = 2;
        });
       
      this.onlineService.doOnline
        .pipe(takeUntil(this.onlineService.onDestroy))
          .subscribe((arg: boolean): void | null => arg ? this.setOnline() : null); 
    } 
  }
  
  ngOnInit(): void { 
	  this.ifPlatformBrowserGetUsers(this.checkService.nativeWindow);
    this.cheerfulService.doValues
      .pipe(takeUntil(this.cheerfulService.onDestroy))
        .subscribe((arg: boolean): void | null => arg ? this.resetUsers() : null);
  }

  resetUsers(): void { 
    this.users = []; 
    this.hideButton = false; 
    this.clickCount = 2;
    this.ifPlatformBrowserGetUsers(this.checkService.nativeWindow);
    this.cheerfulService.setValues(false);
    this.nameElem.nativeElement.scrollIntoView();
  }

  setOnline(): void {
    this.offline = false;
    this.hideButton = false; 
    this.clickCount = 2;
    this.width = this.dUs.getViewport(<Window>this.checkService.nativeWindow);
    this.getUsers(this.width);
  }

  showMoreUsers(): void {
    this.apiService.showMoreUsers(this.clickCount++)
      .then((data): void => {
        console.log(data);  
         
        if (data.success) {
          this.users = data.users;
          this.hideButton = data.links.next_url == null ? true : false;
        } else {
          this.apiService.errServerHandler("showMoreUsers", data);
	      }
      
      })
      .catch((err): void => { 
        this.users = <User[]>this.apiService.errClientHandler("showMoreUsers", err)[0];
        this.offline = this.apiService.errClientHandler("showMoreUsers", err)[1];
      }) 
  } 

  trackByFn = (index: number, user: User): number => user.id; 

  ngOnDestroy(): void {
    this.dUs.onDestroy.next();
    this.cheerfulService.onDestroy.next();
    this.onlineService.onDestroy.next();
  }

}