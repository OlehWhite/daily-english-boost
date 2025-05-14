import SignOutIMG from '@/public/images/logout.png';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

const Client = () => {
  const { data: session, status } = useSession();
  const data = useSession();

  console.log(data);
  if (status === 'loading') return null;
  if (!session) return null;

  return (
    <div className="flex gap-4 items-center">
      <Image
        src={session?.user?.image ?? ''}
        width={40}
        height={40}
        alt={session?.user?.name ?? ''}
        priority
        className="rounded-full"
      />

      {/*<Button onClick={() => signOut()}>*/}
      <button
        onClick={() => signOut({ callbackUrl: '/' })}
        className="cursor-pointer hover:scale-75 duration-300"
      >
        <Image src={SignOutIMG} width={30} alt="Log out" />
      </button>

      {/*</Button>*/}
    </div>
  );
};

export default Client;
