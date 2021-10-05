import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { SidebarMenuComponent } from './sidebar-menu.component';

describe('SidebarMenuComponent', () => {
  
  let component: SidebarMenuComponent;

  beforeEach(() => {
    
    TestBed.configureTestingModule({
    
      providers: [
        SidebarMenuComponent
      ]
    });
  
    component = TestBed.inject(SidebarMenuComponent);
  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});