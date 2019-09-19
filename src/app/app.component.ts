import { Component, OnInit } from '@angular/core';
import { RandomService } from './services/random/random.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private randomService: RandomService
  ) {}

  ngOnInit() {
    this.randomService.setStartTime(Date.now());
  }
}
