import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebace.utils';

import SignUp from '../../components/sign-up/sign-up-form/sign-up-form.componet';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>sign in with google pop up</button>
      <SignUp />
    </div>
  );
};
export default SignIn;
