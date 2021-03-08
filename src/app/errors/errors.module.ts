import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core'

import { GlobalErrorsHandler } from './global-errors-handler/global-errors-handler';

import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations: [ NotFoundComponent ],
    exports: [],
    imports: [ CommonModule ],
    providers: [
        {
            provide: ErrorHandler,
            useClass: GlobalErrorsHandler
        }
    ]
})
export class ErrorsModule {}