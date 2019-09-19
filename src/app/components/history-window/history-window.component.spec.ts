import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryWindowComponent } from './history-window.component';

describe('HistoryWindowComponent', () => {
  let component: HistoryWindowComponent;
  let fixture: ComponentFixture<HistoryWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
