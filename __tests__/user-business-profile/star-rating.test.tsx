import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StarRating } from '@/components/user-business-profile/star-rating';

describe('StarRating Component', () => {
  it('renders without crashing', () => {
    render(<StarRating stars={5} />);
    const starIcons = screen.getAllByTestId('star-icon');
    expect(starIcons).toHaveLength(5);
  });

  it.each([
    { stars: 0, filledStars: 0 },
    { stars: 3, filledStars: 3 },
    { stars: 5, filledStars: 5 },
  ])('renders $filledStars filled stars when stars prop is $stars', ({ stars, filledStars }) => {
    render(<StarRating stars={stars} />);
    const filledStarIcons = screen
      .getAllByTestId('star-icon')
      .filter((icon) => icon.getAttribute('fill') === '#EAB308');
    expect(filledStarIcons).toHaveLength(filledStars);
    const totalStarIcons = screen.getAllByTestId('star-icon');
    expect(totalStarIcons).toHaveLength(5);
  });
});
