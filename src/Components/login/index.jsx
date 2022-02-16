import SubmitButton from '../common/submitButton';
import TextInput from '../common/textInput';
import './style.scss';

function Login(props) {
    return (
        <div className="login" >
            <span className="login__title" > Login </span>
            <br />
            < TextInput placeholder="username" type="text" />
            < TextInput placeholder="username" type="text" />
            <a href="#!" className='login__links'>forgot pass</a>
            <br />
            <SubmitButton/>
            <br />
            <a href="#!" className='login__links'>register </a>
            <br />

        </div>
    );
}

export default Login;