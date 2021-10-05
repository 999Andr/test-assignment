import { ModalService } from './modal.service';

describe('ModalService', () => {
  
  let service: ModalService;

  it('should be work', () => {
    
    service = new ModalService();
    expect(service).toBeTruthy();
    expect(service.doModal).toBeTruthy();
    expect(service.onDestroy).toBeTruthy();
    service.setModal(true);
    expect(spyOn(service.doModal, 'next')).not.toHaveBeenCalled;
  
  });

});