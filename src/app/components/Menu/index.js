import { MenuButton } from '../MenuButton'
import './Menu.css'


const Menu = (props) => {

    return(
        <div className="container-menu" style={{backgroundColor: props.color.darkgreen}}>
            <h1 style={{color: props.color.white}}>Subchef</h1>
            <MenuButton key={'Inventário'} color={props.color} titulo={'Inventário'} handler={props.handler} />
            <MenuButton key={'Dashboard'} color={props.color} titulo={'Dashboard'} handler={props.handler} />
            <MenuButton key={'Relatório'} color={props.color} titulo={'Relatório'} handler={props.handler} />
            <MenuButton key={'Receitas'} color={props.color} titulo={'Receitas'} handler={props.handler} />
        </div>
    )
}

export {Menu}