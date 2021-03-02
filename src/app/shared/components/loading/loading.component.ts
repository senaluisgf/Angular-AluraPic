import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { LoadingType } from "./loading-type";
import { LoadingService } from "./loading.service";

@Component({
    selector: 'ap-loading',
    templateUrl: 'loading.component.html',
    styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit{

    loading$: Observable<LoadingType>

    constructor(private loadingService: LoadingService){}

    ngOnInit(): void {
        this.loading$ = this.loadingService.getLoading()
    }
}