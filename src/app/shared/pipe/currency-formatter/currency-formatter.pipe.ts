import { Pipe, PipeTransform } from '@angular/core';

const LOCALE = {
    'USD': 'en-US',
    'VND': 'vi-VN'
}

@Pipe({
    name: 'currencyFmt',
    standalone: true,
})
export class CurrencyFormatterPipe implements PipeTransform {

    formatterCache: {[value: string]: Intl.NumberFormat} = {};

    transform(value: number, ccy: 'VND' | 'USD' = 'VND') {
        const formatter = this.formatterCache[ccy] ?? new Intl.NumberFormat(LOCALE[ccy], {
            style: 'currency',
            currency: ccy,
        });
        this.formatterCache[ccy] = formatter;
        return formatter.format(value);
    }
}
