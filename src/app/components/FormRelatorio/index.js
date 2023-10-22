import './FormRelatorio.css'


const opt = ['XML', 'PDF', 'XLSX']

const FormRelatorio = (props) => {
    return(
        <div className='form-relatorio'>
            <form>
                <label htmlFor='extensoes'>Formato: </label>
                <select id='extensoes' name='extensoes' style={{backgroundColor: props.color.lightgrey}}>
                    {opt.map((item) =>{
                        return <option value={item}>{item}</option>
                    })}
                </select>
            </form>
            <a href='#' target='_blank' style={{backgroundColor: props.color.lightgrey}}>Download</a>
        </div>
    )
}

export {FormRelatorio}