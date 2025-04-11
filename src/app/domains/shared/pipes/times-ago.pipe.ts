import { Pipe, PipeTransform } from '@angular/core';
import { differenceInDays, parseISO } from 'date-fns';
@Pipe({
  name: 'timesAgo'
})
export class TimesAgoPipe implements PipeTransform {

  transform(public_date: string): string {
    // 1. Obtener la fecha actual
    const now = new Date();
    //Forma con librería Date-fns
    // 2. Obtener la fecha de la publicación con formato ISO
    const date = parseISO(public_date);
    // 3. Calcular la diferencia en días
    const diffInDays = differenceInDays(now, date);

    return `${diffInDays} days ago`;
  }

}
