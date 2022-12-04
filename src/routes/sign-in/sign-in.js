
import { createUserDocumentFromAuth, signInWithGooglePopUp } from '../../utils/firebase/firebase-utils';
import SignUp from '../../components/sign-up/sign-up';


const SignIn = () => {
    const logGoogleUser = async () => {
        const user = await signInWithGooglePopUp();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(user)
    };

    return(
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign In With Google Pop Up</button>
            <SignUp />
        </div>
    )
}

export default SignIn;