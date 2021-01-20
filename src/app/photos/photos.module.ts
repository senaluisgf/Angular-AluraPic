import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';

import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';

@NgModule({
    declarations: [],
    exports: [],
    imports: [ 
        CommonModule,
        PhotoListModule,
        PhotoModule,
        PhotoFormModule
    ]
})
export class PhotosModule {}