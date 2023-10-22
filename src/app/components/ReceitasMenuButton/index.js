import './ReceitasMenuButton.css'


const ReceitasMenuButton = (props) => {
    return(
        <div className='receitas-menu-button' style={{backgroundColor: props.color.darkgreen}}>
            <p style={{color: props.color.white}}>{props.item.nome}</p>
        </div>
    )
}

export {ReceitasMenuButton}