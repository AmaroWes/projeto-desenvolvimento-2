import { MenuButton } from '../MenuButton'
import './Menu.css'


const Menu = (props) => {
    return(
        <div className="container-menu" style={{backgroundColor: props.color.darkgreen}}>
            <h1 style={{color: props.color.white}}>Subchef</h1>
            <MenuButton color={props.color} titulo={'Inventário'} />
            <MenuButton color={props.color} titulo={'Dashboard'} />
            <MenuButton color={props.color} titulo={'Relatório'} />
            <MenuButton color={props.color} titulo={'Receitas'} />
        </div>
    )
}

export {Menu}