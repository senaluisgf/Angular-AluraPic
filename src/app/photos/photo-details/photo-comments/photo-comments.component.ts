import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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
    photoCommentForm: FormGroup;

    constructor(
        private photoService: PhotoService,
        private formBuilder: FormBuilder
    ){}

    ngOnInit(): void {
        this.comments$ = this.photoService.getComments(this.photoId)

        this.photoCommentForm = this.formBuilder.group({
            comment: ['amazing!', Validators.maxLength(30)]
        })
    }
}