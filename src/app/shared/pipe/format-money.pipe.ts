import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatMoney' })
export class FormatMonetPipe implements PipeTransform {
  transform(value: number): string {
    return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
  }
}