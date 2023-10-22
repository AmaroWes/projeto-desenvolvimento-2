import './HeaderButton.css'


const HeaderButton = (props) => {
    return(
        <div className='headerbtn' style={{backgroundColor: props.color.lightgrey}}>
            <p>{props.titulo}</p>
        </div>
    )
}

export {HeaderButton}