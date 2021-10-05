import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SidebarService {

  set(element: HTMLDivElement, argOne: string, argTwo: string, argTr: string): void {
    element.style.transition = argOne;
    element.style.left = argTwo; 
    element.style.opacity = argTr;
  }

}