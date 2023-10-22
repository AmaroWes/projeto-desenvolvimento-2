import { InventarioMenuButton } from '../InventarioMenuButton'
import './InventarioMenu.css'


const listaItems = [
    {'nome': 'Criar'},
    {'nome': 'Filtar'},
    {'nome': 'Deletar'},
    {'nome': 'Atualizar'}
]

const InventarioMenu = (props) => {
    return(
        <div className="inventario-menu" style={{borderColor: props.color.middlegreen}}>
            {listaItems.map((items) => {
                return <InventarioMenuButton item={items} color={props.color} />
            })}
        </div>
    )
}

export {InventarioMenu}