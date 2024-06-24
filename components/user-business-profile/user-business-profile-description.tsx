import { UserBusinessProfileDataProps } from '@/types/types';

export function UserBusinessProfileDescription({
  userBusinessProfileData,
}: UserBusinessProfileDataProps) {
  const { description } = userBusinessProfileData;

  return <p className="text-gray-600">{description}</p>;
}
