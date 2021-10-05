import { CheckService } from './check.service';
import { Injectable } from '@angular/core';
import { Position, User } from './kinds';

@Injectable({
  providedIn: 'root'
})

export class OfflineService { 
  
  positions: Position[] = [  
    {id: 1, name: "Lawyer"}, 
    {id: 2, name: "Content manager"}, 
    {id: 3, name: "Security"}, 
    {id: 4, name: "Designer"}
  ];

  users: User[] = [
    {
      email: "controldepartament@gmail",
      id: 1,
      name: "Maximillian",
      phone: "+380506780324",
      photo: "assets/photo-cover.svg",
      position: "Leading specialist of the Control Departament"
    },
    {
      email: "adolf.blainecharles@gmail.biz",
      id: 2,
      name: "Adolf Blaine Charles David Earl Matthew Matthew",
      phone: "+380506780324",
      photo: "assets/photo-cover.svg",
      position: "Contextual advertising specialist"
    },
    {
      email: "elizabet.front@gmail.com",
      id: 3,
      name: "Elizabeth",
      phone: "+380506780324",
      photo: "assets/photo-cover.svg",
      position: "Frontend developer"
    },
    {
      email: "alexander.back@gmail.com",
      id: 4,
      name: "Alexander Jauden",
      phone: "+380506780324",
      photo: "assets/photo-cover.svg",
      position: "Backend developer"
    },
    {
      email: "noah1998@gmail.com",
      id: 5,
      name: "Noah",
      phone: "+380506780324",
      photo: "assets/photo-cover.svg",
      position: "QA"
    },
    {
      email: "liamgrievescaseysmith@gmail.com",
      id: 6,
      name: "Liamgrievescasey Smith Wiam",
      phone: "+380506780324",
      photo: "assets/photo-cover.svg",
      position: "Lead designer"
    }
  ];

  private window: Window | null;
 
  constructor(private checkService: CheckService) { 
    this.window = checkService.nativeWindow 
  }

  getInnerWidth = (w: Window): number => w.innerWidth ;
  getElClWidth = (w: Window): number => w.document.documentElement.clientWidth;
  getBodyClWidth = (w: Window): number => w.document.body.clientWidth;
  
  getViewportSize = (w: Window): number =>
    ( this.getInnerWidth(w) || this.getElClWidth(w) || this.getBodyClWidth(w) );

  getViewport = (): number | null => this.window == null ? null : this.getViewportSize(this.window);

  getUsers = (): User[] | null => this.getViewport() ? 
    <number>this.getViewport() < 768 ? this.users.slice(0,3) : this.users 
    : null
}