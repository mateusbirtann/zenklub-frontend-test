import { StarIcon } from 'lucide-react';

export interface StarRatingProps {
  stars: number;
}

export function StarRating({ stars }: StarRatingProps) {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <StarIcon
          data-testid="star-icon"
          key={index}
          className="h-6 w-6 text-yellow-500"
          fill={index < stars ? '#EAB308' : 'none'}
        />
      ))}
    </>
  );
}
