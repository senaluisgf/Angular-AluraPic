import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PhotoComment } from "../../photo/photo-comment";
import { PhotoService } from "../../photo/photo.service";

@Component({
    selector: 'ap-photo-comments',
    templateUrl: './photo-comments.component.html'
})
export class PhotoCommentsComponent implements OnInit{

    comments$: Observable<PhotoComment[]>;
    @Input() photoId: number;

    constructor(private photoService: PhotoService){}

    ngOnInit(): void {
        this.comments$ = this.photoService.getComments(this.photoId)
    }
}