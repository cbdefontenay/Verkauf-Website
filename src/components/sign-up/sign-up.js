// import createUserDocumentFromAuth from '../../utils/firebase/firebase-utils';
import { useState } from 'react';
import {createAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase-utils';

const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '' 
}

const SignUp = () => {
    const [ formFields, setFormFields ] = useState(defaultFormField);
    const [ displayName, email, password, confirmPassword ] = formFields;
 
    const resetFormFields = () => {
        setFormFields(defaultFormField)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (password !== confirmPassword){
            alert("passwords do not match")
            return;
        }

        try{
            const user = await createAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        // await createUserDocumentFromAuth(user, {displayName});
        
        } catch(error) {
            if (error.code === 'auth/email-already-in-use'){
                alert('Cannot create new user, email already in use!')
            } else{
                console.log(error);
            }
        }
    };

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    };

    return(
        <div>
            <h1>Sign up with email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input type='text' required onChange={handleChange} name='displayName' value={displayName} />

                <label>Email</label>
                <input type='email' required onChange={handleChange} name='email' value={email} />

                <label>Password</label>
                <input type='password' required onChange={handleChange} name='password' value={password} />

                <label>Confirm Password</label>
                <input type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} />

                <button type='submit' >Sign Up</button>
            </form>
        </div>

    );
};


export default SignUp;