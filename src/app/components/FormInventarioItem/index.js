import './FormInventarioItem.css'


const FormInventarioItem = (props) => {
    return(
        <div className='form-inventario-item'>
            <div></div>
            <p>{props.item.nome}</p>
            <p>{props.item.tipo}</p>
            <p>{props.item.qtde}</p>
            <p>{props.item.grupo}</p>
        </div>
    )
}

export {FormInventarioItem}