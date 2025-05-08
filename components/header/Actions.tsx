import Button from '@/components/UI/Button';
import { loginButton, startedButton } from '@/constants/animations';

const Actions = () => {
  return (
    <div className="flex gap-3">
      <Button delay={2} variants={loginButton}>
        Login
      </Button>

      <Button delay={1} variants={startedButton}>
        Get started
      </Button>
    </div>
  );
};

export default Actions;
