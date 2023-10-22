import { FormInventarioItem } from '../FormInventarioItem'
import { InventarioMenu } from '../InventarioMenu'
import './FormInventario.css'


const listaItems = [
    {'id': 0, 'nome': 'Nome do produto','tipo': 'Uni', 'qtde': 10, 'grupo': 'Legume'},
    {'id': 1, 'nome': 'Nome do produto','tipo': 'Uni', 'qtde': 10, 'grupo': 'Legume'},
    {'id': 2, 'nome': 'Nome do produto','tipo': 'Uni', 'qtde': 10, 'grupo': 'Legume'},
    {'id': 3, 'nome': 'Nome do produto','tipo': 'Uni', 'qtde': 10, 'grupo': 'Legume'},
    {'id': 4, 'nome': 'Nome do produto','tipo': 'Uni', 'qtde': 10, 'grupo': 'Legume'},
    {'id': 5, 'nome': 'Nome do produto','tipo': 'Uni', 'qtde': 10, 'grupo': 'Legume'},
    {'id': 6, 'nome': 'Nome do produto','tipo': 'Uni', 'qtde': 10, 'grupo': 'Legume'},
    {'id': 7, 'nome': 'Nome do produto','tipo': 'Uni', 'qtde': 10, 'grupo': 'Legume'}
]

function gerarItems(item) {
    return <FormInventarioItem item={item} />
}

const FormInventario = (props) => {
    return(
        <div className='inventario-form'>
            <InventarioMenu color={props.color} />
            <div className='inventario-form-items'>
                {listaItems.map(gerarItems)}
            </div>
        </div>
    )
}

export {FormInventario}