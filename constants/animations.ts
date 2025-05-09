export const startedButton = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const loginButton = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

export const animationLogo = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const animationText = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const navAnimations = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 2,
    },
  },
};

export const linkAnimations = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } },
};

export const headerAnimations = {
  hidden: { opacity: 0, y: 150 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const welcomeAnimations = {
  hidden: { opacity: 0, y: 150 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' } },
};

export const introDesAnimations = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

export const introTitleAnimations = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 1, ease: 'easeOut' } },
};
