'use client';

import { defAnimations } from '@/constants/animations';
import { socialsMedias } from '@/constants/socials-medias';
import SignOutIMG from '@/public/images/logout.png';
import { LINKS } from '@/types/enums/links';
import { motion } from 'framer-motion';
import { useInView } from 'motion/react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const Footer = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      variants={defAnimations}
      animate={isInView ? 'visible' : 'hidden'}
      className="flex gap-5 justify-center items-center w-full my-[60px]"
    >
      {socialsMedias.map(({ id, icon, title, link }) => (
        <Link key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={title}>
          <Image
            src={icon}
            width={32}
            height={32}
            alt={title}
            className="transition-transform hover:scale-110"
          />
        </Link>
      ))}

      <button onClick={() => signOut({ callbackUrl: LINKS.HOME })} className="cursor-pointer">
        <Image src={SignOutIMG} width={30} height={30} alt="Log out" />
      </button>
    </motion.footer>
  );
};

export default Footer;
