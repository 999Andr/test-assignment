export interface ClientErr {
  message: string;
}

export interface ServerErr {
  success: boolean;
  message: string;
  fails?: Fails; 
}

export interface Fails {
  name?: string[];
  email?: string[];
  phone?: string[];
  position_id?: string[];
  photo?: string[]; 
  user_id?: string[];
}

export class Post {
  method: string = "Post";
  headers: HeadersInit;
  constructor(public body: FormData, token: string ) {
    this.headers = { 'Token': token };
  }
}

export interface Position {
  id: number; 
  name: string;
}

export interface User {
  email: string;
  id: number;
  name: string;
  phone: string;
  photo: string;
  position: string;
}

export type HandleErr = [User[] | null, true] | [Position[], true];