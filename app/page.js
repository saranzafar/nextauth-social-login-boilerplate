"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  console.log("Data: ", session);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        {session ? (
          <>
            <p className="text-lg font-semibold text-gray-700">
              Signed in as <span className="text-blue-600">{session.user.email}</span>
            </p>
            <button
              onClick={() => signOut()}
              className="mt-4 px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200"
            >
              Sign out
            </button>
          </>
        ) : (
          <>
            <p className="text-lg font-semibold text-gray-700">Not signed in</p>
            <button
              // onClick={() => signIn("github")} //if you want to signin without opening the GitHub page
              onClick={() => signIn()}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
            >
              Sign in using GitHub
            </button>
          </>
        )}
      </div>
    </div>
  );
}