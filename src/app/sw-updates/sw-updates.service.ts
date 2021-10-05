import { Injectable, OnDestroy } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CheckService } from '../shared/check.service';
import { MessageService } from '../shared/message.service';


@Injectable()

export class SwUpdatesService implements OnDestroy {
  private onDestroy = new Subject<void>();

  constructor( 
    private checkService: CheckService, 
    private swu: SwUpdate,
    private mS: MessageService
  ) { 
  
    if (checkService.nativeWindow) { 
      
      if (!swu.isEnabled ) {
        return;
      }
      
      this.swu.available
        .pipe(
          takeUntil(this.onDestroy),
        )
        .subscribe((): Promise<void | null> | null => 
          mS.showVersionMessage(<Window>checkService.nativeWindow) ? 
            this.swu.activateUpdate()
              .then(() => mS.reloadPage(<Window>checkService.nativeWindow))
            : null
        );
    }
  }

  ngOnDestroy() {
    this.onDestroy.next();
  }
}






