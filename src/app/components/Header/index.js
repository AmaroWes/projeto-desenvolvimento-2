import { HeaderButton } from '../HeaderButton'
import './Header.css'


const Header = (props) => {
    return(
        <div className="header-container" style={{backgroundColor: props.color.darkgreen}}>
            <HeaderButton color={props.color} titulo={'Config'} />
            <HeaderButton color={props.color} titulo={'user'} />
        </div>
    )
}

export {Header}