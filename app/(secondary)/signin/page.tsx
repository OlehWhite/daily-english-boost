'use client';

import { LINKS } from '@/types/enums/links';
import { signIn } from 'next-auth/react';

const Page = () => {
  return (
    <div className="flex items-center justify-center px-[20px]">
      <div className="p-10 rounded-xl shadow-lg text-center max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6">Welcome to Daily English Boost</h1>
        <p className="mb-4">Sign in to save your progress and continue learning 🚀</p>
        <button
          onClick={() => signIn('google', { callbackUrl: LINKS.HOME })}
          className="cursor-pointer bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Page;
