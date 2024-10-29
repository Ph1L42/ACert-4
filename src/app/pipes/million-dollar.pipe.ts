import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'millionDollar',
  standalone: true
})
export class MillionDollarPipe implements PipeTransform {
  transform(value: string | number): string {
    let returnValue = '';
    let newVal = value.toString();
    if(newVal.includes('-')){
      let splitted = value.toString().split('-')
      let First = splitted[0].trim()
      let Second = splitted[1].trim();
      returnValue = `$${First} to $${Second} million`
    } else {
      returnValue = `$${value} million`
    }
    return returnValue;
  }
}
