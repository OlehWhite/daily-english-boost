import Logo from '@/components/header/Logo';
import Nav from '@/components/header/Nav';
import Button from '@/components/UI/Button';
import { loginButton, startedButton } from '@/constants/animations';

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Logo />

      <Nav />

      <div className="flex gap-2">
        <Button delay={2} variants={loginButton}>
          Login
        </Button>

        <Button delay={1} variants={startedButton}>
          Get started
        </Button>
      </div>
    </header>
  );
};

export default Header;
