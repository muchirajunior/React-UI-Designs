import './styles.scss';

function TextInput3({name,type,placeholder}) {
    return (
        <fieldset className="text-input3" >
            <legend>{name}</legend>
             < input name={name} type={type} placeholder={placeholder} className="text-input3__input" />
           
        </fieldset>
        
    );
}

export default TextInput3;