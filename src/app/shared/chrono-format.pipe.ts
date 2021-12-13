import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chronoFormat'
})
export class ChronoFormatPipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {

    let ms = value%100;
    let sec = Math.floor(value/100)%60;
    let min = Math.floor(value/6000)%60;

    return `${min<10?'0'+min:min} : ${sec<10?'0'+sec:sec} : ${ms<10?'0'+ms+'0':ms+'0'}`;
  }

}
