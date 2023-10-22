import { FormDashboard } from '../FormDashboard';
import { FormInventario } from '../FormInventario'
import { FormReceitas } from '../FormReceitas';
import { FormRelatorio } from '../FormRelatorio';
import './AbaForm.css'


const AbaForm = (props) => {
    const handler = [props.handler];
    return(
        <div className="aba-form" style={{backgroundColor: props.color.lightgreen}}>
            {handler.map((item) => {
                if (item == 'Inventário') {
                    return <FormInventario color={props.color} />
                } 
                else if (item == 'Dashboard') {
                    return <FormDashboard color={props.color} />
                }
                else if (item == 'Relatório') {
                    return <FormRelatorio color={props.color} />
                }
                else if (item == 'Receitas') {
                    return <FormReceitas color={props.color} />
                }
            })}
        </div>
    )
}

export {AbaForm}