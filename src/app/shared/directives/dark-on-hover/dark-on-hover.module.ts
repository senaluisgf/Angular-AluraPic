import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { DarkOnHoverDirective } from "./dark-on-hover.directive";

@NgModule({
    declarations:[DarkOnHoverDirective],
    exports: [DarkOnHoverDirective],
    imports: [CommonModule]
})
export class DarkOnHoverModule {}