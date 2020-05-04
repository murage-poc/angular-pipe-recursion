import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'objectValue'})
export class ObjectValuePipe implements PipeTransform {

dynamicValues;
  transform(obj:{}): string[] {
    this.dynamicValues=[];
   return this.getValueFromObject(obj);
  }
  
 getValueFromObject(dataObj) {
    for (const prop in dataObj) {
      if (typeof dataObj[prop] === "object") {
        this.getValueFromObject(dataObj[prop]);
      } else {
        this.dynamicValues.push( " |=> " + dataObj[prop]);
      }
    }
    return this.dynamicValues;
  }
}