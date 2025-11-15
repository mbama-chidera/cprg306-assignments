"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, logOut } = useUserAuth();

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Week 9 Shopping List</h1>

      {!user ? (
        <>
          <p className="mb-4">Sign in with GitHub to continue.</p>
          <button
            onClick={gitHubSignIn}
            className="px-4 py-2 bg-white text-black rounded"
          >
            Sign in with GitHub
          </button>
        </>
      ) : (
        <>
          <p className="mb-4">Welcome, {user.displayName || user.email}</p>
          <div className="flex gap-4">
            <Link
              href="/week-9/shopping-list"
              className="px-4 py-2 border border-white rounded"
            >
              Go to Shopping List
            </Link>
            <button
              onClick={logOut}
              className="px-4 py-2 border border-white rounded"
            >
              Log Out
            </button>
          </div>
        </>
      )}
    </main>
  );
}
