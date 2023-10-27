import { useState } from 'react';
import './MenuButton.css'


const MenuButton = (props) => {

    const [screen, setScreen] = useState('');
    const handler = (event) => {
        event.preventDefault()
        props.handler(props.titulo)
        setScreen(props.titulo)
    }

    return(
        <div className="menu-btn" style={{backgroundColor: props.color.lightgrey}} onClick={handler} >
            <p>{props.titulo}</p>
        </div>
    )
}

export {MenuButton}