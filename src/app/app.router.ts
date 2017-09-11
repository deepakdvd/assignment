import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DesignComponent } from './design/design.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';

export const router: Routes = [
    { path: '', redirectTo: '/firstpage', pathMatch: 'full'},
    { path: 'design', component: DesignComponent },
    { path: 'firstpage', component: FirstpageComponent },
    { path: 'secondpage', component: SecondpageComponent },
    { path: 'thirdpage', component: ThirdpageComponent }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);