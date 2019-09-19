import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-history-window',
  templateUrl: './history-window.component.html',
  styleUrls: ['./history-window.component.scss']
})
export class HistoryWindowComponent {
  constructor(
    public dialogRef: MatDialogRef<HistoryWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {number: number, time: string}[]
  ) {}
}
