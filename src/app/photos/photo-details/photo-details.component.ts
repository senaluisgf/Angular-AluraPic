import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "src/app/core/user/user.service";
import { AlertService } from "src/app/shared/components/alert/alert.service";
import { Photo } from "../photo/photo";
import { PhotoService } from "../photo/photo.service";

@Component({
    templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit{

    photo$: Observable<Photo>;
    photoId: number;

    constructor(
        private route: ActivatedRoute,
        private photoService: PhotoService,
        private router: Router,
        private alertService: AlertService,
        private userService: UserService
    ){}

    ngOnInit(): void {
        this.photoId = this.route.snapshot.params.photoId;
        this.photo$ = this.photoService.findById(this.photoId)
        this.photo$.subscribe(
            () => {},
            err => {
                console.log(err)
                this.router.navigate(['not-found'])
            }
        )
    }

    remove(){
        this.photoService
            .remove(this.photoId)
            .subscribe(
                () => {
                    this.alertService.success('Photo Removed', true)
                    this.router.navigate(['/user', this.userService.getUserName()])
                },
                err => {
                    console.log(err)
                    this.alertService.warning('Could not remove the photo!')
                }
            )
    }

    like(){
        this.photoService
            .like(this.photoId)
            .subscribe(
                liked => {
                    if(liked){
                        this.photo$ = this.photoService.findById(this.photoId)
                        this.alertService.success('Photo Liked!', true)
                    } else {
                        this.alertService.info("You already liked this photo before!")
                    }
                },
                err => {
                    this.alertService.danger('ERROR!!!')
                    console.log(err)
                }
            )
    }
}