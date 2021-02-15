import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { PhotoModule } from "../photo/photo.module";

import { PhotoListComponent } from "./photo-list.component";
import { PhotosComponent } from "./photos/photos.component";
import { LoadButtonComponent } from "./load-button/load-button.component";

import { FilterByDescriptionPipe } from "./filter-by-description.pipe";
import { SearchComponent } from "./search/search.component";

import { CardModule } from "src/app/shared/components/card/card.module";
import { DarkOnHoverModule } from "src/app/shared/directives/dark-on-hover/dark-on-hover.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations:[
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescriptionPipe,
        SearchComponent
    ],
    imports:[
        CommonModule,
        PhotoModule,
        CardModule,
        DarkOnHoverModule,
        RouterModule
    ]
})
export class PhotoListModule {}