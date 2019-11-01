import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotographerComponent } from './photographer/photographer.component';
import { PortfolioComponent } from './photographer/portfolio/portfolio.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
    { path: 'home', component: PhotographerComponent },
    {
        path: 'photographers', children: [
            { path: ':id/portofolio', component: PortfolioComponent }
        ]
    },
    { path: 'login', component:LoginComponent},
    { path: 'signup', component: SignupComponent },
    { path: '', redirectTo:'/home', pathMatch: 'full' },

  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
