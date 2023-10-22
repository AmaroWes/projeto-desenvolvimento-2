import './MenuButton.css'


const MenuButton = (props) => {
    return(
        <div className="menu-btn" style={{backgroundColor: props.color.lightgrey}}>
            <p>{props.titulo}</p>
        </div>
    )
}

export {MenuButton}