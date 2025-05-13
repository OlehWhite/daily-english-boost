import Button from '@/components/UI/Button';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

const Client = () => {
  const { data } = useSession();

  if (!data) return null;

  return (
    <div className="flex gap-4 items-center">
      <Image
        src={data?.user?.image ?? ''}
        width={55}
        height={55}
        alt={data?.user?.name ?? ''}
        priority
        className="rounded-full"
      />

      <Button onClick={() => signOut({ callbackUrl: '/' })}>Log out</Button>
    </div>
  );
};

export default Client;
