import { TestBed } from '@angular/core/testing';
import { SidebarService } from './sidebar.service';

describe('SidebarService', () => {
  
  let service: SidebarService;
  const fackeElem = document.createElement('div') as HTMLDivElement;
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('"set" method should be work', () => {
    service.set(fackeElem, 'all .9s ease-out', '9px', '0');
    expect(fackeElem.style.left === '9px').toBeTruthy();
    
    expect(fackeElem.style.transition).toBeTruthy();
    expect(fackeElem.style.opacity === '0').toBeTruthy(); 
    expect(fackeElem.style.left === '999px').toBeFalsy();
    expect(fackeElem.style.opacity === '0.9').toBeFalsy();
  });
});
