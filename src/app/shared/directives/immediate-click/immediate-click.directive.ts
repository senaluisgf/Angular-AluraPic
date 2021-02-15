import { Directive, ElementRef, OnInit } from "@angular/core";
import { PlatformDetectorService } from "src/app/core/platform-detector/platform-detector.service";

@Directive({
    selector: '[apImmediateClick]'
})
export class ImmediateClickDirective implements OnInit {

    constructor(
        private elementRef: ElementRef<any>,
        private platformDetectorService: PlatformDetectorService
    ){}
    
    ngOnInit(): void {
        this.platformDetectorService.isPlatformBrowser()
            && this.elementRef.nativeElement.click()
    }
}