import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { StarRating } from '@/components/user-business-profile/star-rating';
import { UserBusinessProfileDataProps } from '@/types/types';

export function UserBusinessProfileHeader({
  userBusinessProfileData,
}: UserBusinessProfileDataProps) {
  const { avatarImage, username, jobRole, address, stars, reviews, price, minutesDuration } =
    userBusinessProfileData;

  return (
    <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:items-start">
      <Avatar className="h-40 w-40">
        <AvatarImage src={avatarImage} />
      </Avatar>
      <div className="text-center lg:text-left">
        <h2 className="text-xl font-bold">{username}</h2>
        <div className="flex flex-col py-2">
          <p>
            <span className="font-bold text-brand-500">{jobRole}</span> |{' '}
            <span className="text-sm">{address}</span>
          </p>
          <div className="flex items-center justify-center space-x-1 lg:justify-start">
            <StarRating stars={stars} />
            <span className="text-sm text-gray-500">({reviews} Avaliações)</span>
          </div>
        </div>
        <p className="text-lg font-semibold">
          R${price} / <span className="text-sm">{minutesDuration} Minutos</span>
        </p>
      </div>
    </div>
  );
}
