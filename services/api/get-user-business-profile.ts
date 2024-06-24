import { UserBusinessProfileDataProps } from '@/types/types';

const USER_BUSINESS_PROFILE_API_URL = 'http://localhost:3333/userBusinessProfile';

export async function getUserBusinessProfileData(): Promise<UserBusinessProfileDataProps> {
  try {
    const response = await fetch(USER_BUSINESS_PROFILE_API_URL);

    if (!response.ok) {
      throw new Error(`Failed to fetch user business profile data. Status: ${response.status}`);
    }

    const userBusinessProfileData: UserBusinessProfileDataProps = await response.json();
    return userBusinessProfileData;
  } catch (error) {
    throw error;
  }
}
