import { InventarioMenuButton } from '../InventarioMenuButton'
import './InventarioMenu.css'


const listaItems = [
    {'nome': 'BTN1'},
    {'nome': 'BTN2'},
    {'nome': 'BTN3'},
    {'nome': 'BTN4'}
]

const InventarioMenu = (props) => {
    return(
        <div className="inventario-menu" style={{borderColor: props.color.middlegreen}}>
            {listaItems.map((items) => {
                return <InventarioMenuButton key={items.nome} item={items} color={props.color} />
            })}
        </div>
    )
}

export {InventarioMenu}