import SubmitButton from '../common/submitButton';
import TextInput from '../common/textInput';
import  './style.scss';

function Register(props) {
    return (
        <div className="register">
            <span className='register__title'>Register</span>
            <br />
            <  TextInput name='fname' placeholder="first name" type="text" />
            <  TextInput name='lname' placeholder="last name" type="text" />
            <  TextInput name='email' placeholder="email" type="email" />
            <  TextInput name='password' placeholder="password" type="password" />
            <  TextInput name='rpass' placeholder="repeat pass" type="test" />
            <  TextInput name='place' placeholder="place" type="text" />
            <  TextInput name='andress' placeholder="adress" type="text" />
            < SubmitButton />
            <a href="#!" className="register__link">login </a>
            
        </div>
    );
}

export default Register;