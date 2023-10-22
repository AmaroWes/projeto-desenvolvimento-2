import './InventarioMenuButton.css'


const InventarioMenuButton = (props) => {
    return(
        <div className='inventario-menu-button' style={{backgroundColor: props.color.darkgreen}}>
            <p style={{color: props.color.white}}>{props.item.nome}</p>
        </div>
    )
}

export {InventarioMenuButton}