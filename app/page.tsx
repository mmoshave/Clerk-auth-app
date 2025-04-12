import { Button } from "../components/ui/button"; // or use relative path
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Welcome to AutoCloud</h1>
      <p className="text-lg text-gray-600 mb-6">
        Manage your car life in the cloud. Sign in to access your dashboard.
      </p>

      <Link href="/dashboard">
        <Button size="lg">Go to Dashboard</Button>
      </Link>
    </div>
  );
}
