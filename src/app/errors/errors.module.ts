import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';

import { GlobalErrorsHandler } from './global-errors-handler/global-errors-handler';
import { GlobalErrorsComponent } from './global-errors/global-errors.component';

import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations: [
        NotFoundComponent,
        GlobalErrorsComponent
    ],
    exports: [],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [
        {
            provide: ErrorHandler,
            useClass: GlobalErrorsHandler
        }
    ]
})
export class ErrorsModule {}