import { FormService } from './form.service';
import { fakeAsync, tick} from '@angular/core/testing';
describe('FormService', () => {
  
  let service: FormService;

  it('should be work', fakeAsync(() => {
    
    service = new FormService();

    expect(service).toBeTruthy();

    service.isImgErr();
    service.imgErrorMessage = null; 
    service.isImgErr();  
    service.validImage({size: 999, name: 'photo.png'} as unknown as File);
    
    const fackeImg = new Image() as HTMLImageElement;
    fackeImg.width = 9;
    fackeImg.height = 99;

    const fackeImgTwo = new Image() as HTMLImageElement;
    fackeImg.width = 999;
    fackeImg.height = 999;
    
    service.getResolutionImg(
      {size: 999, name: 'photo.jpg'} as unknown as File, 
      fackeImg, 
      70, 
      70
    );
    
    fackeImg.dispatchEvent(new Event('load'));
    tick();
   
    service.getResolutionImg(
      {size: 999, name: 'photo.jpg'} as unknown as File, 
      fackeImgTwo,
      70, 
      70
    )
    
    fackeImgTwo.dispatchEvent(new Event('load'));
    tick();

    service.getResolutionImg(
      {size: 999, name: 'photo.jpg'} as unknown as File, 
      fackeImg, 
      999999999, 
      70
    );
    
    fackeImg.dispatchEvent(new Event('load'));
    tick();

    class ObjURL {
      createObjectURL = (arg: any): string => 'src'
    }
    
    try {
      service.getImgShape( new ObjURL(), {} as unknown as File);
    }
    catch(_) {}
    
    service.checkFileToAppend({size: 999, name: 'photo.png'} as unknown as File);

    
    spyOn(service, 'getImgShape').and.returnValue(fackeImg);
    service.checkFileToAppend({ size: 999, name: 'photo.jpg' } as unknown as File);
  
  }));
});
  
