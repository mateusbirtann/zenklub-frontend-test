import { render, screen, fireEvent } from '@testing-library/react';
import { DayPicker } from '@/components/calendar/calendar-content/day-picker';

describe('DayPicker', () => {
  const mockOnTimeSelect = jest.fn();
  const props = {
    dayOfWeek: 'Monday',
    date: '2023-04-03',
    times: ['10:00', '11:00', '12:00'],
    selectedTime: { time: '11:00', date: '2023-04-03' },
    onTimeSelect: mockOnTimeSelect,
  };

  it('renders without crashing', () => {
    render(<DayPicker {...props} />);
    expect(screen.getByText('Monday')).toBeInTheDocument();
    expect(screen.getByText('2023-04-03')).toBeInTheDocument();
  });

  it('displays the correct day of the week and date', () => {
    render(<DayPicker {...props} />);
    expect(screen.getByText(props.dayOfWeek)).toBeInTheDocument();
    expect(screen.getByText(props.date)).toBeInTheDocument();
  });

  it('renders all times as buttons', () => {
    render(<DayPicker {...props} />);
    props.times.forEach((time) => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
  });

  it('styles the selected time button differently', () => {
    render(<DayPicker {...props} />);
    const selectedButton = screen.getByText(props.selectedTime.time);
    expect(selectedButton).toHaveClass('border-brand-100 bg-brand-100');
  });

  it('calls onTimeSelect with correct arguments when a time button is clicked', () => {
    render(<DayPicker {...props} />);
    const timeButton = screen.getByText('10:00');
    fireEvent.click(timeButton);
    expect(mockOnTimeSelect).toHaveBeenCalledWith('10:00', '2023-04-03');
  });
});
