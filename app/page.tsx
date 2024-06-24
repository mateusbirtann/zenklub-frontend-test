import UserBusinessProfile from '@/components/user-business-profile';
import Calendar from '@/components/calendar';

export default async function Home() {
  return (
    <main className="mx-auto flex flex-col items-center justify-center gap-8 px-4 py-5 lg:w-full lg:max-w-7xl lg:flex-row">
      <UserBusinessProfile />
      <Calendar />
    </main>
  );
}
