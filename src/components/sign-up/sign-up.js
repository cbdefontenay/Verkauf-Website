// import createUserDocumentFromAuth from '../../utils/firebase/firebase-utils';
import { useState } from 'react';
import {createAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase-utils';
import FormInput from '../form-input/form-input';
import Button from '../button/button';
import './sign-up-form.scss';

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
        <div className='sing-up-container'>
        <h>Don't have an account? </h>
            <span>Sign up with email and password</span>
            <form onSubmit={handleSubmit}>
                <input label="Display Name" type='text' required onChange={handleChange} name='displayName' value={displayName} />

                <input label="Email" type='email' required onChange={handleChange} name='email' value={email} />

                <input label="Password" type='password' required onChange={handleChange} name='password' value={password} />

                <input label="Confirm Password" type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} />

                <Button type='submit' >Sign Up</Button>
            </form>
        </div>

    );
};


export default SignUp;