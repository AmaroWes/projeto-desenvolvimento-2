import './FormReceitasItem.css'
import { useEffect, useState } from "react";


const FormReceitasItem = (props) => {

    const [modal, setModal] = useState(false);
    const toggleModal = () => {setModal(!modal)}

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return(
        <>
            <div className='form-receitas-item' onClick={toggleModal}>
                <div></div>
                <p>{props.item.nome}</p>
            </div>
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>{props.item.nome}</h2>
                        <p>
                            {props.item.ingredientes}
                        </p>
                        <button className="close-modal" onClick={toggleModal}>
                            CLOSE
                        </button>
                        <button className='btn-default' onClick={toggleModal}>
                            Update
                        </button>
                        <button className='btn-default' onClick={toggleModal}>
                            Deletar
                        </button>
                    </div>
                </div>
            )}
        </>
        
    )
}

export {FormReceitasItem}