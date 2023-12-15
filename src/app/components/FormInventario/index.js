import { FormInventarioItem } from '../FormInventarioItem'
import { InventarioMenu } from '../InventarioMenu'
import { useEffect, useState } from "react";
import axios from "axios";
import './FormInventario.css'



const FormInventario = (props) => {
    const listaItems = []
    const [listaProdutos, setListaProdutos] = useState([]);
    const [nome, setNome] = useState("");
    const [qtde, setQtde] = useState(0);

    const cadastrarProduto = event => {
        event.preventDefault();

        axios.post("http://localhost:1337/api/produtos", {
                "data": {
                  "fornecedors": {
                    "disconnect": [],
                    "connect": [
                      {
                        "id": 1,
                        "position": {
                          "end": true
                        }
                      }
                    ]
                  },
                  "grupos": {
                    "disconnect": [],
                    "connect": [
                      {
                        "id": 1,
                        "position": {
                          "end": true
                        }
                      }
                    ]
                  },
                  "tipos": {
                    "disconnect": [],
                    "connect": [
                      {
                        "id": 1,
                        "position": {
                          "end": true
                        }
                      }
                    ]
                  },
                  "Nome": nome,
                  "Qtde": qtde
                }
        }).then((response) => { 
            alert("Produto cadastrado com sucesso!");
            setNome(""); 
            setPreco(0);
    
        }).catch(err => console.log(err))

    }

    useEffect(() => {
        axios.get("http://localhost:1337/api/produtos")
            .then(function(response) {
                setListaProdutos(response.data);
            })
    }, [])

    if (listaProdutos.data === undefined) {
        console.log('Here')
    } else {
        listaProdutos.data.map(item => {
            console.log(item.id)
            console.log(item.attributes)
            let produto = {
                'id': item.id,
                'nome': item.attributes.Nome,
                'qtde': item.attributes.Qtde
            }
            listaItems.push(produto)
        })
    }
    
    return(
        <div className='inventario-form'>
            <div className='inventario-form-items'>
                {listaItems.map((item) => {
                    return <FormInventarioItem key={item.nome} item={item} />
                })}
            </div>
            <form className='form-cadastro-produto' onSubmit={cadastrarProduto}>
                <label htmlFor="nome">Nome:</label>
                <input type="text" name="nome" value={nome} onChange={(ev) => setNome(ev.target.value)}></input>
                <br />
                <label htmlFor="qtde">Qtde:</label>
                <input type="number" name="qtde" value={qtde} onChange={(ev) => setQtde(ev.target.value)}></input>
                <br />
                <input style={{backgroundColor: '#609966'}} type="submit"></input>
            </form>
        </div>
    )
}

export {FormInventario}