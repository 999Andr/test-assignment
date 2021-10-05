
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService { 
  
  reloadPage = (w: Window): void | null => w.document.getElementsByTagName('title')[0].textContent == 'Frontend' ? 
    w.document.location.reload() : null;
  
  showVersionMessage = (w: Window): boolean => w.confirm("New version available. Load New Version?");

}