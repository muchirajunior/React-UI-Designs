import  './styles.scss';

function TextInput(props) {
    const { placeholder, name, type }=props;
    return (
        <div className="container">
            <label htmlFor={name}>{name}</label>
            <input placeholder={placeholder} name={name} type={type} className='text-input' />
        </div>  
    );
}

export default TextInput;