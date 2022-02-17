import  './styles.scss';

function TextInput({placeholder, name , type}) {
    return (
        <div className="container">
            <label htmlFor={name}>{name}</label>
            <input placeholder={placeholder} name={name} type={type} className='text-input' />
        </div>  
    );
}

export default TextInput;