import './FormReceitasItem.css'


const FormReceitasItem = (props) => {
    return(
        <div className='form-receitas-item'>
            <div></div>
            <p>{props.item.nome}</p>
        </div>
    )
}

export {FormReceitasItem}