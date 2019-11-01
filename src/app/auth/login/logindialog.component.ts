import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-logindialog',
    templateUrl: './logindialog.component.html',
})
export class LoginDialogComponent implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<LoginDialogComponent>) { }
    
    onCancel(): void {
        this.dialogRef.close();
    }

    ngOnInit(): void { }
}
