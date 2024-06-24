import { Button } from '@/components/ui/button';

interface DayPickerProps {
  dayOfWeek: string;
  date: string;
  times: string[];
  selectedTime: { time: string; date: string };
  onTimeSelect: (time: string, date: string) => void;
}

export function DayPicker({ dayOfWeek, date, times, selectedTime, onTimeSelect }: DayPickerProps) {
  return (
    <div className="flex flex-col text-center">
      <div className="mb-2 flex h-12 flex-col items-center justify-center border-b">
        <p className="text-xs">{dayOfWeek}</p>
        <p className="text-xs">{date}</p>
      </div>
      {times.map((time: string) => (
        <Button
          variant={'secondary'}
          size={'xs'}
          className={`m-0.5 ${selectedTime.time === time && selectedTime.date === date ? 'border-brand-100 bg-brand-100' : ''}`}
          key={time}
          onClick={() => onTimeSelect(time, date)}
        >
          {time}
        </Button>
      ))}
    </div>
  );
}
