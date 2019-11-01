import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-sessionform',
  templateUrl: './sessionform.component.html',
  styleUrls: ['./sessionform.component.css']
})
export class SessionformComponent implements OnInit {
  ngOnInit(): void {
  }


  constructor(
    public dialogRef: MatDialogRef<SessionformComponent>) { }

  onCancel(): void {
    this.dialogRef.close();
  }

}
