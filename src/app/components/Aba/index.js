import { AbaForm } from '../AbaForm'
import './Aba.css'


const Aba = (props) => {
    return(
        <div className='container-aba' style={{backgroundColor: props.color.middlegreen}}>
            <h2 style={{color: props.color.white}}>{props.subtitulo}</h2>
            <AbaForm color={props.color} handler={props.subtitulo} />
        </div>
    )
}

export {Aba}