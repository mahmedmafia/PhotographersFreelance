import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PhotographerComponent } from './photographer/photographer.component';
import { PhotographerListComponent } from './photographer/photographer-list/photographer-list.component';
import { PhotographerPanelComponent } from './photographer/photographer-panel/photographer-panel.component';
import { PhotographerSearchComponent } from './photographer/photographer-search/photographer-search.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PortfolioComponent } from './photographer/portfolio/portfolio.component';
import { AppRoutingModule } from './app-routing.module';
import { passwordMatch } from './auth/passwordMatch.directive';
import { AlertComponent } from './shared/alert/alert.component';
import { SessionformComponent } from './photographer/sessionform/sessionform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { LoginDialogComponent } from './auth/login/logindialog.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PhotographerComponent,
    PhotographerListComponent,
    PhotographerPanelComponent,
    PhotographerSearchComponent,
    LoginComponent,
    SignupComponent,
    PortfolioComponent,
    passwordMatch,
    AlertComponent,
    LoginDialogComponent,
    SessionformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents: [
    SessionformComponent,
    LoginDialogComponent
  ],
  providers: [{ provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
