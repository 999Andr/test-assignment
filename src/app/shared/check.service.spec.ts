import { TestBed } from '@angular/core/testing';
import { CheckService } from './check.service';

describe('CheckService', () => {
  
  let service: CheckService;
  let fakeService: CheckService = new CheckService({});
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be work', () => {
    expect(window == undefined).toBeFalsy();
    expect(window instanceof Window).toBeTruthy();
    
    expect(service.nativeWindow).toBe(window); 
    expect(fakeService.nativeWindow).toBe(null);
    expect(fakeService.nativeWindow == window).toBeFalsy();
    expect(service.nativeWindow == window).toBeTruthy();
  });
});