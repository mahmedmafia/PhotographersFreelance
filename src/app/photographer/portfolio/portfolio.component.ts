import { Component, OnInit } from '@angular/core';
import { PhotographerService } from 'src/app/services/photographer.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Photographer } from 'src/app/services/photographer.model';
import { AuthService, user } from 'src/app/auth/auth.service';
import { MatDialog } from '@angular/material';
import { SessionformComponent } from '../sessionform/sessionform.component';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  private photographer: Photographer;
  private photogrpaherId: number;
  isLoggedIn;
  private loggedUser: user;
  isHirer = false;
  isPhotographer = false;
  isProfile = false;
  constructor(
    private dialog: MatDialog,
    private PhotoService: PhotographerService,
    private activeRoute: ActivatedRoute,
    private authServ: AuthService
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      this.photogrpaherId = +params.id;
    });
    this.photographer = this.PhotoService.getPhotographer(this.photogrpaherId);
    this.authServ.loggedUser.subscribe((user: user) => {
      this.loggedUser = user;
      this.isLoggedIn = user ? true : false;
      if (this.isLoggedIn) {
        if (this.loggedUser.type.toLowerCase() == 'hirer') {
          this.isHirer = true;
        }
        if (this.loggedUser.type.toLowerCase() == 'photographer') {
          this.isPhotographer = true;
        }
        if (this.photogrpaherId == this.loggedUser.id) {
          this.isProfile = true;
        }
      } else {
        this.isHirer = false;
        this.isPhotographer = false;
      }
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(SessionformComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
  selectedFile: File;
  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  onFileChanged(event) {
    this.fileData = <File>event.target.files[0];
    if (event.target.files[0].size < 50000) {
      this.preview();
    }
  }
  preview() {
    // Show preview
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = _event => {
      this.previewUrl = reader.result;
    };
  }
  cancel() {
    this.previewUrl = null;
  }
}
