import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal'; 

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip'; 
import { SidebarMenuComponent } from '../sidebar-menu/sidebar-menu.component';
import { CheerfulUsersComponent } from './cheerful-users/cheerful-users.component'; 
import { RegisterFormModule } from './register-form/register-form.module';

import { SwUpdatesModule } from '../sw-updates/sw-updates.module'; 

@NgModule({
  declarations: [CustomersComponent, CheerfulUsersComponent, SidebarMenuComponent],
  imports: [
    RegisterFormModule,
    ModalModule.forRoot(),
    TooltipModule,
    CommonModule,
    CustomersRoutingModule,
    SwUpdatesModule,
  ]
})
export class CustomersModule { }
