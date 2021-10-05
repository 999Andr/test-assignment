import { CheckService } from '../shared/check.service';
import { AfterViewInit, Component, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ModalService } from '../shared/modal.service'; 
import { SidebarService } from '../shared/sidebar.service'; 
import { SidebarTriggerService } from '../shared/sidebar-trigger.service'; 
import { takeUntil } from 'rxjs/operators';
import { OnlineService } from '../shared/online.service'; 
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'] 
})

export class CustomersComponent implements AfterViewInit, OnInit, OnDestroy {
  hiddModal: boolean = true;
  online: boolean = true; 
  @ViewChild('childModal', { static: false }) childModal!: ModalDirective;
  @ViewChild('sideBar', {static: false}) nameElem!: ElementRef<HTMLDivElement>;
  win: Window | null;

  constructor(
    private checkService: CheckService,
    private modalService: ModalService,
    private onlineService: OnlineService,
    private sidebarService: SidebarService,
    private sidebarTriggerService: SidebarTriggerService) { 
      this.win = checkService.nativeWindow;
  }
  
  
  ngAfterViewInit(): void {

    this.sidebarTriggerService.isInitial
      .pipe(takeUntil(this.sidebarTriggerService.onDestroy))
        .subscribe((arg: boolean): void | null => arg ? this.showSidebarMenu() : null)

    if ( this.checkService.nativeWindow ) {
        (<Window>this.checkService.nativeWindow).ononline = (): void => 
          this.onlineService.setOnline(true); 
    }
  }

  ngOnInit(): void {

    this.modalService.doModal
      .pipe(takeUntil(this.modalService.onDestroy))
        .subscribe((arg: boolean): void | null => arg ? this.showChildModal(true) : null)  
  }

  handler = (arg: boolean): void | null => arg ? 
    this.sidebarService.set(this.nameElem.nativeElement, 'all 1.17s ease-in', '-290px', '0') 
      : null; 

  hideChildModal = (): void => this.childModal.hide(); 
  
  showChildModal(arg: boolean): void {
    this.childModal.show(); 
    this.hiddModal = !arg;
    this.modalService.setModal(false);
  }

  showSidebarMenu(): void { 
    this.showChildModal(false);  
    this.sidebarService.set(this.nameElem.nativeElement, 'all .9s ease-out', '0', '1');
    this.sidebarTriggerService.setInitial(false);
  }

  ngOnDestroy(): void {
    this.modalService.onDestroy.next();
    this.sidebarTriggerService.onDestroy.next();
  }

}
