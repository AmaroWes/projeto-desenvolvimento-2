import './FormRelatorio.css'


const opt = ['XML', 'PDF', 'XLSX']

const FormRelatorio = (props) => {
    return(
        <div className='relatorio' style={{backgroundColor: props.color.lightgreen}}>
            <div className='form-relatorio' style={{backgroundColor: props.color.lightgrey}}>
                <form>
                    <label htmlFor='extensoes'>Formato: </label>
                    <select id='extensoes' name='extensoes' style={{backgroundColor: props.color.lightgrey}}>
                        {opt.map((item) =>{
                            return <option key={item} value={item}>{item}</option>
                        })}
                    </select>
                </form>
                <a href='#' target='_blank' style={{backgroundColor: props.color.lightgrey}}>Download</a>
            </div>
        </div>
    )
}

export {FormRelatorio}