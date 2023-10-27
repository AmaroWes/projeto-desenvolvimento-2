import { ReceitasMenuButton, ReceitasMenuItem } from '../ReceitasMenuButton'
import './ReceitasMenu.css'


const listaItems = [
    {'nome': 'Cadastrar'},
    {'nome': 'Filtrar'}
]

const ReceitasMenu = (props) => {
    return(
        <div className='receitas-menu' style={{borderColor: props.color.middlegreen}}>
            {listaItems.map((items)=>{
                return <ReceitasMenuButton key={items.nome} color={props.color} item={items} />
            })}
        </div>
    )
}

export {ReceitasMenu}