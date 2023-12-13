import './FormInventarioItem.css'


const FormInventarioItem = (props) => {
    return(
        <div className='form-inventario-item'>
            <div></div>
            <p>Nome: {props.item.nome}</p>
            <p>Qtde: {props.item.qtde}</p>
        </div>
    )
}

export {FormInventarioItem}