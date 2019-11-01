import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService, user } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from '../auth/login/logindialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.loggedUserSub.unsubscribe();
  }
   loggedUserSub: Subscription;
   loggedUser:user;
   isLogged:boolean=false;
  constructor(private authServ: AuthService,private dialog:MatDialog) { }
  openDialog(){
    const dialogRef=this.dialog.open(LoginDialogComponent,{

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Login dialog was closed');
    });
  }
  ngOnInit() {
    this.loggedUserSub = this.authServ.loggedUser.subscribe((user: user) => {
      this.loggedUser = user;
      this.isLogged = user ? true : false;
    });
  }
  Logout(){
    this.authServ.logout();
  }
}
