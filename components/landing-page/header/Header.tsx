'use client';

import Client from '@/components/landing-page/header/Client';
import Logo from '@/components/landing-page/header/Logo';

const Header = () => {
  return (
    <header
      className="
      flex items-center justify-between p-[20px] w-full max-w-[1440px] m-[0_auto]
      lg:p-[40px]
    "
    >
      <Logo />
      <Client />
    </header>
  );
};

export default Header;
