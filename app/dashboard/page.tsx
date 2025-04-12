import { currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const user = await currentUser();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Welcome to your Dashboard</h1>
      <p className="mt-4">Hello, {user?.firstName} ({user?.emailAddresses[0]?.emailAddress})</p>
    </div>
  );
}
