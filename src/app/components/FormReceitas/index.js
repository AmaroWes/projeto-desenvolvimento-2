import { FormReceitasItem } from '../FormReceitasItem'
import { ReceitasMenu } from '../ReceitasMenu'
import './FormReceitas.css'


const listaItems = [
    {'id': 0, 'nome': 'Nome da receita'},
    {'id': 2, 'nome': 'Nome da receita'},
    {'id': 3, 'nome': 'Nome da receita'},
    {'id': 4, 'nome': 'Nome da receita'},
    {'id': 5, 'nome': 'Nome da receita'},
    {'id': 6, 'nome': 'Nome da receita'},
    {'id': 7, 'nome': 'Nome da receita'}
]

const FormReceitas = (props) => {
    return(
        <div className='form-receitas'>
            <ReceitasMenu color={props.color} />
            <div className='receitas-form-item'>
                {listaItems.map((item) => {
                    return <FormReceitasItem item={item} />
                })}
            </div>
        </div>
    )
}

export {FormReceitas}