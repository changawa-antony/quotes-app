import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value:any){
    if (value) {

      const firstTime:any = value;
      const secondTime:any = new Date().getTime();
      const diff = secondTime - firstTime;
      const seconds:any = Math.floor(diff/1000 % 60);

        console.log(seconds)

        if (seconds < 29)
            return "Just now"

        const timePeriod = {
            'year': 31536000,
            'month': 2592000,
            'week': 604800,
            'day': 86400,
            'hour': 3600,
            'minute': 60,
            'second': 1
        };

        const tP = Object.values(timePeriod);

        let counter;
        for (const i in tP) {
            counter = Math.floor(seconds / tP[i]);
            if (counter > 0)
                if (counter === 1) {
                    return counter + ' ' + i + ' ago';
                } else {
                    return counter + ' ' + i + 's ago';
                }
        }
    }

    return value;
}

}
