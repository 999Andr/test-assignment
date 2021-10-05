import { CheerfulService } from './cheerful.service';

describe('CheerfulService', () => {
  
  let service: CheerfulService;

  it('should be work', () => {
    
    service = new CheerfulService();

    expect(service).toBeTruthy();
    expect(service.doValues).toBeTruthy();
    expect(service.onDestroy).toBeTruthy();
    service.setValues(true);
    expect(spyOn(service.doValues, 'next')).not.toHaveBeenCalled();
  
  });
});
  