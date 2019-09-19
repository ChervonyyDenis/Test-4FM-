import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {
  public clickHistory: { number: number; time: string }[] = [];
  public startTime: number;
  constructor() { }

  public getRandomNumber(): { number: number, figure: string } {
    const randomNumber = Math.floor(Math.random() * 100);
    this.clickHistory.push({ number: randomNumber, time: this.getClickTime() });
    return this.setOutputShape(randomNumber);
  }

  public setStartTime(time): void {
    this.startTime = time;
  }

  private getClickTime(): string {
    const now = Date.now();
    const difference = this.convertSercondsToTime(now - this.startTime);
    return difference;
  }

  private setOutputShape(num: number): { number: number, figure: string } {
    let shape;
    switch (true) {
      case num <= 33:
        shape = 'square';
        break;
      case num > 33 && num <= 66:
        shape = 'circle';
        break;
      case num > 66:
        shape = 'triangle';
        break;
    }
    return { number: num, figure: shape };
  }

  private convertSercondsToTime(timeStamp: number): string {
    const dateObj = new Date(timeStamp);
    const hours = dateObj.getUTCHours();
    const minutes = dateObj.getUTCMinutes();
    const seconds = dateObj.getSeconds();

    const timeString = hours.toString().padStart(2, '0')
      + ':' + minutes.toString().padStart(2, '0')
      + ':' + seconds.toString().padStart(2, '0');
    return timeString;
  }

  public getClicksHistory(): { number: number; time: string }[] {
    return this.clickHistory;
  }
}
