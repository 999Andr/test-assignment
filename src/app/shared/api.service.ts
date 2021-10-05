import { CheckService } from './check.service';
import { Injectable } from '@angular/core';
import { ClientErr, Fails, ServerErr, HandleErr, Post } from './kinds';
import { OfflineService } from './offline.service';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  private apiUrl: string = 'https://frontend-test-assignment-api.abz.agency/api/v1/';
  
  private window: Window | null;
  
  constructor( 
    private checkService: CheckService,
    private offlineService: OfflineService, 
  ) { 
      this.window = checkService.nativeWindow 
  } 

  resHandler = (arg: string, argPost?: RequestInit): Promise<any> => 
    (this.window as Window).fetch(arg, argPost).then((res: Response): Promise<any> => res.json()); 
  
  getPositions = (): Promise<any> => this.resHandler( this.apiUrl + 'positions' );
  
  getToken = (): Promise<any> => this.resHandler( this.apiUrl + 'token' );

  passTokenToPostRequest = (): Promise<any> => this.getToken()
    .then((data): string | void => data.success ? data.token : this.errServerHandler("getToken", data))
    .catch((err): HandleErr => this.errClientHandler("getToken", err))

  getUsers = (arg: number): Promise<any> => 
    arg < 768 ? this.resHandler( this.apiUrl + 'users?page=1&count=3' ) :
      this.resHandler( this.apiUrl + 'users?page=1&count=6' );
  
  makePost = (arg: FormData): Promise<any> => this.passTokenToPostRequest()
    .then((data): Promise<any> => this.resHandler( this.apiUrl + 'users', new Post(arg, data)))
  
  showMoreUsers = (arg: number): Promise<any> => 
    this.resHandler( this.apiUrl + `users?page=1&count=${arg * 6}`);

  errClientHandler(operation: string, err: ClientErr): HandleErr {
    console.error(`Operation "${operation}" failed. Error: ${err.message}.`); 
    return (operation == "getUsers" || operation == "showMoreUsers") ?
      [this.offlineService.getUsers(), true] : [this.offlineService.positions, true]
  }

  errServerHandler(operation: string, err: ServerErr): void { 
    console.error(`Operation "${operation}" failed. Backend message: ${err.message}.`); 
    
    err.fails ? Object.keys(<Fails>err.fails).forEach((key: string): void =>  
      console.warn(`Error details: error in ${key}. ${(<any>err.fails)[key]}.`)) : null 
  }

}
  