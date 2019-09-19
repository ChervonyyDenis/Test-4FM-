import { Component, OnInit } from '@angular/core';
import { RandomService } from '../../services/random/random.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { HistoryWindowComponent } from '../history-window/history-window.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public currentNumber: {number: number, figure: string} ;
  public historyDialogRef: MatDialogRef<HistoryWindowComponent>;
  constructor(
    public historyDialog: MatDialog,
    private randomService: RandomService
  ) { }

  ngOnInit() {
  }

  public randomizeNumber() {
    this.currentNumber = this.randomService.getRandomNumber();
  }

  public getHistory() {
    this.historyDialogRef = this.historyDialog.open(HistoryWindowComponent, {
      width: '500px',
      height: '600px',
      maxHeight: '70vh',
      maxWidth: '50vw',
      data: this.randomService.getClicksHistory()
    });
  }
}
