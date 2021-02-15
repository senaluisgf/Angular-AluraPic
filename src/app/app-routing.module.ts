import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AuthGuard } from './core/auth/auth.guard'
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver'

import { PhotoFormComponent } from './photos/photo-form/photo-form.component'
import { PhotoListComponent } from './photos/photo-list/photo-list.component'
import { NotFoundComponent } from './errors/not-found/not-found.component'
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component'

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path:'user/:userName', 
        component: PhotoListComponent, 
        resolve:{
            photos: PhotoListResolver
        }
    },
    {
        path: 'p/:photoId',
        component: PhotoDetailsComponent
    },
    {
        path: 'p/add',
        component: PhotoFormComponent,
        canActivate: [AuthGuard]
    },
    {path: '**', component: NotFoundComponent}
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}