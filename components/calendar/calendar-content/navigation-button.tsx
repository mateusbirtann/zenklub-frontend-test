import { Button } from '@/components/ui/button';
import { NavigationButtonProps } from '@/types/types';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

export function NavigationButton({ direction, onClick }: NavigationButtonProps) {
  return (
    <Button
      data-testid={`navigation-button-${direction}`}
      variant={'outline'}
      className={`mb-auto flex h-12 w-5 items-center justify-center rounded-none border-l-0 border-r-0 border-t-0 p-0`}
      onClick={onClick}
    >
      {direction === 'next' ? (
        <ChevronRightIcon className="text-brand-500" />
      ) : (
        <ChevronLeftIcon className="text-brand-500" />
      )}
    </Button>
  );
}
