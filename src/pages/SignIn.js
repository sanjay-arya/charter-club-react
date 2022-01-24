import { useNavigate, useLocation } from 'react-router-dom';
import { MainLayout, SignIn as SignInForm } from '../components';
import { useUser, useSnack } from '../hooks';

export default function SignIn() {

  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const { user: { userItems: users }, signIn } = useUser();
  const { successSnack, errorSnack } = useSnack();

  const onSignIn = (data) => {
    const user = users.find(({ username, password }) => username === data.username && password === data.password);
    if (user) {
      signIn(user);
      successSnack('SignIn Successful');
      navigate(from, { replace: true });
    } else {
      errorSnack('Invalid Username OR Password');
    }
  };

  return (
    <>
      <MainLayout>
        <SignInForm onSignIn={onSignIn} />
      </MainLayout >
    </>
  );
};