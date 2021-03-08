import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AuthGuard } from './core/auth/auth.guard'
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver'

import { PhotoFormComponent } from './photos/photo-form/photo-form.component'
import { PhotoListComponent } from './photos/photo-list/photo-list.component'
import { NotFoundComponent } from './errors/not-found/not-found.component'
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component'
import { GlobalErrorsComponent } from './errors/global-errors/global-errors.component'

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
        },
        data: {
            title: 'Timeline'
        }
    },
    {
        path: 'p/add',
        component: PhotoFormComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Photo Upload'
        }
    },
    {
        path: 'p/:photoId',
        component: PhotoDetailsComponent,
        data: {
            title: 'Photo Details'
        }
    },
    {
        path: 'not-found',
        component: NotFoundComponent,
        data: {
            title: 'Not Found!'
        }
    },
    {
        path: 'global-errors',
        component: GlobalErrorsComponent,
        data: {
            title: 'Global Errors'
        }
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}