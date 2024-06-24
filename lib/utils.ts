import { CalendarDayPickerProps } from '@/types/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NUM_DAYS_TO_CONSIDER = 5;

/**
 * Cria um novo seletor de dia do calendário com base na data atual, dias da semana ordenados, horários e nomes dos meses.
 * @param currentDate A data atual.
 * @param daysOfWeek Os dias da semana ordenados.
 * @param times Os horários disponíveis.
 * @param monthNames Os nomes dos meses.
 * @returns Um objeto com as propriedades do seletor de dia do calendário.
 */
export const configureCalendarDayPicker = (
  currentDate: Date,
  daysOfWeek: (string | number)[],
  times: string[],
  monthNames: string[],
): CalendarDayPickerProps => {
  // Reduz os dias da semana para criar as propriedades do seletor de dia do calendário
  return daysOfWeek
    .slice(0, NUM_DAYS_TO_CONSIDER)
    .reduce((accumulator: CalendarDayPickerProps, _, index: number) => {
      const newDate = addDaysToDate(currentDate, index);
      const dayOfWeekKey = daysOfWeek[newDate.getDay()];
      accumulator[dayOfWeekKey] = {
        date: formatDate(newDate, monthNames),
        times,
      };
      return accumulator;
    }, {});
};

/**
 * Adiciona um número específico de dias a uma data.
 * @param date A data original.
 * @param days O número de dias a ser adicionado.
 * @returns A nova data.
 */
function addDaysToDate(date: Date, days: number): Date {
  const result = new Date(date.getTime());
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * Formata uma data como "NomeDoMês Dia".
 * @param date A data a ser formatada.
 * @param monthNames Os nomes dos meses.
 * @returns A data formatada como string.
 */
function formatDate(date: Date, monthNames: string[]): string {
  return `${monthNames[date.getMonth()]} ${date.getDate()}`;
}
