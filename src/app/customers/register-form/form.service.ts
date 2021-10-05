import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

export class FormService {
  
  formData!: FormData;
  imgErrorMessage: null | string = 'NONE';
  messagesStream: Subject<null|string> = new Subject<null|string>();
  
  onDestroy: Subject<void> = new Subject<void>();

  checkFileToAppend (photo: File): void {
    
    const requiredFileChecked = 
    (fileSize: number, types: string[], resolution: { hImg: number; wImg: number; }): void =>
      {    
        const file = photo;
         
        if ( file.size < fileSize ) {     
          
          const checkResolutionImg = (arg: File): void => { 
            let img: HTMLImageElement = this.getImgShape(window.URL, arg);
            this.getResolutionImg(file, img, resolution.wImg, resolution.hImg);
          }
          
          return types.includes(file.name.split('.')[1].toLowerCase()) ? 
            checkResolutionImg(file) : 
            this.errImg(`The photo format must be ${types.join("/")} type`);
        }
          
        return this.errImg(`The photo size must not be greater than ${fileSize} Mb`);
    }
        
    requiredFileChecked( 5000000, ['jpg','jpeg'], { hImg: 70, wImg: 70 } );
  }
  
  errImg(arg: string): void {
    this.imgErrorMessage = arg;
    this.messagesStream.next(arg);
  }
  
  getImgShape(win: any, arg: File): HTMLImageElement {
    let img: HTMLImageElement = new Image();
    img.src = win.createObjectURL(arg);
    return img;
  }

  getResolutionImg(file: File, img: HTMLImageElement, w: number, h: number): void {
    img.onload = (): void =>  (img.width > w && img.height > h) ? 
      this.validImage(file) : 
      this.errImg(`Photo should be with resolution at least ${w}x${h}px`);
  }

  isImgErr = (): boolean => (this.imgErrorMessage != null || this.imgErrorMessage == 'NONE');   
  
  validImage(file: File): void {
    this.imgErrorMessage = null;  
    this.formData = new FormData();
    this.formData.append('photo', file);
  } 
}


