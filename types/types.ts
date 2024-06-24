export type CalendarDayPickerProps = {
  [key: string]: {
    date: string;
    times: string[];
  };
};

export type UserBusinessProfileDataProps = {
  userBusinessProfileData: {
    avatarImage: string;
    username: string;
    jobRole: string;
    address: string;
    stars: number;
    reviews: number;
    description: string;
    price: number;
    minutesDuration: number;
  };
};

export type CalendarDataProps = {
  calendarData: {
    currentDate: Date;
    daysOfWeek: string[];
    monthNames: string[];
    times: string[];
    title: string;
    timezone: string;
  };
};

export type NavigationButtonProps = {
  direction: 'next' | 'previous';
  onClick: () => void;
  className?: string;
};
