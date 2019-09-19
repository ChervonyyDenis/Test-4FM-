import { Component, OnInit } from '@angular/core';
import { AuthorDevInfo } from '../../../assets/consts/dev-info';
import { ContactInfo } from '../../../assets/interfaces/dev-info';
@Component({
  selector: 'app-developer-info',
  templateUrl: './developer-info.component.html',
  styleUrls: ['./developer-info.component.scss']
})
export class DeveloperInfoComponent implements OnInit {
  public authorInfo: ContactInfo[];
  constructor() { }

  ngOnInit() {
    this.authorInfo = AuthorDevInfo;
  }

}
