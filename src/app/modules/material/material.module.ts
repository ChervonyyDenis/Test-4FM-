import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatDialogModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
  ],
  exports: [
    MatButtonModule,
    MatDialogModule,
    MatCardModule
  ]
})
export class MaterialModule { }
