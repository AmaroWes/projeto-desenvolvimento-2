import './FormDashboard.css'


const FormDashboard = (props) => {
    return(
        <div className='form-dashboard' style={{backgroundColor: props.color.lightgrey}}>
            <h3>Vencimentos x produto</h3>
            <img src="" alt='Gráfico de vencimentos'/>
            <p>Quantidade de produtos vencendo agrupados pelo dia de vencimento</p>
        </div>
    )
}

export {FormDashboard}