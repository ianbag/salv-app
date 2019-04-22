import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "searchDates"
})

export class SearchPipe implements PipeTransform {
  transform(value, minDate , maxDate){
    return value.filter(row => {
      return row.tStartDate >= minDate && row.tEndDate <= maxDate;
    });
  }
}
