import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-4">
      <h1 className="text-5xl font-bold mb-6">Welcome to AutoCloud</h1>
      <p className="text-lg mb-8 text-gray-300 text-center max-w-md">
        Manage your car life in the cloud. Track services, parts, and maintenance all in one place.
      </p>
      
      <Link href="/dashboard">
        <Button 
          size="lg"
          className="bg-white text-black font-semibold hover:bg-gray-200 transition rounded-full px-8 py-4 text-lg shadow-lg"
        >
          Go to Dashboard →
        </Button>
      </Link>
    </div>
  );
}
