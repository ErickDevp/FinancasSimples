import { useState } from 'react';
import '../../assets/styles/Input.css'

export default function Input({type, name, icon, iconVisibility, iconVisibilityOf, placeholder, onChange}) {
    const [typeInput, setTypeInput] = useState(type); 


    const isTypeInput = () => {
        if(typeInput == 'password') setTypeInput('text');
        if(typeInput == 'text') setTypeInput('password');
    }

    return (
        <div className="container_input">
            <span className='icon icon_type'>{icon}</span>
            <input 
                type={typeInput} 
                name={name} 
                id={name} 
                placeholder={placeholder} 
                onChange={e => onChange(e)}
            />
            <span className='icon icon_visibility' onClick={e =>isTypeInput()}>{typeInput == 'text' ?iconVisibility : iconVisibilityOf}</span>
            
        </div>
    )
}