import { UserBusinessProfileHeader } from '@/components/user-business-profile/user-business-profile-header';
import { UserBusinessProfileDescription } from '@/components/user-business-profile/user-business-profile-description';
import { getUserBusinessProfileData } from '@/services/api/get-user-business-profile';

export default async function UserBusinessProfile() {
  const { userBusinessProfileData } = await getUserBusinessProfileData();
  return (
    <div className="mb-auto flex w-80 flex-col gap-4 lg:w-full lg:max-w-3xl lg:items-start">
      <UserBusinessProfileHeader userBusinessProfileData={userBusinessProfileData} />
      <UserBusinessProfileDescription userBusinessProfileData={userBusinessProfileData} />
    </div>
  );
}
