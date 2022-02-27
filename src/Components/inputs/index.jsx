import TextInput from '../common/textInput';
import TextInput2 from '../common/textInput2';
import TextInput3 from '../common/textInput3';
import TextInput4 from '../common/textInput4';
import  './style.scss';

function Inputs(props) {
    return (
        <div className="inputs">
            <span className='inputs__title'>Text Inputs</span>
            <br />
            <  TextInput name='first name' placeholder="enter your name" type="text" />
            < TextInput2 name="first name" placeholder="first name" type="text" /> <br />
            < TextInput3 name="first name" placeholder="enter your name" type="text" /> <br />
            < TextInput4 name="first name" placeholder="your name" type="text" />
           
        </div>
    );
}

export default Inputs;