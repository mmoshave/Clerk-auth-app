// app/sign-out/[[...signout]]/page.tsx
"use client";

import { SignOutButton } from "@clerk/nextjs";

export default function SignOutPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Are you sure you want to sign out?</h1>
      <SignOutButton redirectUrl="/" />
    </div>
  );
}
