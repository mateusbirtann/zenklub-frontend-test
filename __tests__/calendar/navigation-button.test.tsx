import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NavigationButton } from '@/components/calendar/calendar-content/navigation-button';

describe('NavigationButton', () => {
  it('renders correctly with direction "next" and displays ChevronRightIcon', () => {
    render(<NavigationButton direction="next" onClick={() => {}} />);
    const button = screen.getByTestId('navigation-button-next');
    expect(button).toBeInTheDocument();
    expect(button.querySelector('svg.lucide.lucide-chevron-right')).toBeInTheDocument();
  });

  it('renders correctly with direction "previous" and displays ChevronLeftIcon', () => {
    render(<NavigationButton direction="previous" onClick={() => {}} />);
    const button = screen.getByTestId('navigation-button-previous');
    expect(button).toBeInTheDocument();
    expect(button.querySelector('svg.lucide.lucide-chevron-left')).toBeInTheDocument();
  });

  it('calls onClick when the button is clicked', () => {
    const mockOnClick = jest.fn();
    render(<NavigationButton direction="next" onClick={mockOnClick} />);
    const button = screen.getByTestId('navigation-button-next');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
