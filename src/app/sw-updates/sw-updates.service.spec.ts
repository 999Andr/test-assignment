import { SwUpdatesService } from './sw-updates.service';
import { SwUpdate } from '@angular/service-worker';
import { Injector } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { PLATFORM_ID } from '@angular/core';
import { CheckService } from '../shared/check.service';
import { MessageService } from '../shared/message.service';


class MockSwUpdate {
  
  $$availableSubj = new Subject<{available: {hash: string}}>();

  available = this.$$availableSubj.asObservable();
  
  activateUpdate = jasmine.createSpy('MockSwUpdate.activateUpdate')
                          .and.callFake(() => Promise.resolve());

  constructor(public isEnabled: boolean) {}
}


class MockMessageService {
  constructor(public isDownload: boolean) {}
  reloadPage = (w: Window): void => {};
  showVersionMessage = (w: Window): boolean => this.isDownload;
}

describe('SwUpdatesService', () => {
  
  let service: SwUpdatesService; 
  let injector: Injector;
  let swu: MockSwUpdate;
  let mS: MockMessageService;
  
  
  const setup = (isSwUpdateEnabled: boolean, platformId: string, isDownload: boolean) => {
    injector = Injector.create({providers: [
      { provide: CheckService, useClass: CheckService, deps: [PLATFORM_ID] },
      { provide: PLATFORM_ID, useValue: platformId }, 
      { provide: SwUpdate, useFactory: () => new MockSwUpdate(isSwUpdateEnabled), deps: [] },
      { provide: MessageService, useFactory: () => new MockMessageService(isDownload), deps: [] },
      { provide: SwUpdatesService, deps: [ CheckService, SwUpdate, MessageService] }
    ]});

    service = injector.get(SwUpdatesService) as unknown as SwUpdatesService;
    swu = injector.get(SwUpdate) as unknown as MockSwUpdate;
    
  };
  

  const tearDown = () => service.ngOnDestroy();
  
  const run = (
    specFn: VoidFunction, 
    isSwUpdateEnabled = true, 
    platformId = 'browser',
    isDownload = true
  ) => () => {
    setup(isSwUpdateEnabled, platformId, isDownload);
    specFn();
    tearDown();
  };

  it('should create', run(() => {
    expect(service).toBeTruthy();
  
  }));
   
  it('should not activate available updates immediately', fakeAsync(run(() => {
    
    expect(swu.isEnabled).toBe(true);
    expect(swu.activateUpdate).not.toHaveBeenCalled();
    
  })));

  it('should activate available updates ', fakeAsync(run(() => {
    
    expect(swu.activateUpdate).not.toHaveBeenCalled();
    swu.$$availableSubj.next({available: {hash: 'foo'}});

    expect(swu.activateUpdate).toHaveBeenCalled();
  })));

  const runNotDownload = (specFn: VoidFunction) => run(specFn, true, 'browser', false);

  it('if not confirm should not activate available updates', fakeAsync(runNotDownload(() => {
    swu.$$availableSubj.next({available: {hash: 'foo'}});
    expect(swu.activateUpdate).not.toHaveBeenCalled();
  })));

  const runDeactivated = (specFn: VoidFunction) => run(specFn, false, 'browser', true);

    
  it('if update is unabled should not activate available updates', fakeAsync(runDeactivated(() => {
    swu.$$availableSubj.next({available: {hash: 'foo'}});
    expect(swu.activateUpdate).not.toHaveBeenCalled();
  })));

  const runServer = (specFn: VoidFunction) => run(specFn, true, 'server', true);

  it('if run on the server should not activate available updates', fakeAsync(runServer(() => {
    swu.$$availableSubj.next({available: {hash: 'foo'}});
    expect(swu.activateUpdate).not.toHaveBeenCalled();
  })));
   
  it('when destroyed should not activate available updates', fakeAsync(run(() => {
      service.ngOnDestroy();
      swu.$$availableSubj.next({available: {hash: 'foo'}});

      expect(swu.activateUpdate).not.toHaveBeenCalled();
  })));

});

