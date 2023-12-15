import { FormReceitasItem } from '../FormReceitasItem'
import { useEffect, useState } from "react";
import axios from "axios";
import './FormReceitas.css'


const FormReceitas = (props) => {

    const listaItems = []
    const [listaProdutos, setListaProdutos] = useState([]);
    const [nome, setNome] = useState("");
    const [ingrediente, setIngrediente] = useState([]);

    const cadastrarReceita = event => {
        event.preventDefault();

        axios.post("http://localhost:1337/api/receitas", {
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
                  "Ingrediente": ingrediente
                }
        }).then((response) => { 
            alert("Produto cadastrado com sucesso!");
            setNome(""); 
            setIngrediente(0);
    
        }).catch(err => console.log(err))

    }

    useEffect(() => {
        axios.get("http://localhost:1337/api/receitas")
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
            let receita = {
                'id': item.id,
                'nome': item.attributes.Nome,
                'ingrediente': item.attributes.Ingrediente
            }
            listaItems.push(receita)
        })
    }

    return(
        <div className='form-receitas'>
            <div className='receitas-form-item'>
                {listaItems.map((item) => {
                    return <FormReceitasItem key={item.id} item={item} />
                })}
            </div>
            <form className='form-cadastro-receita' onSubmit={cadastrarReceita}>
                <label htmlFor="nome">Nome:</label>
                <input type="text" name="nome" value={nome} onChange={(ev) => setNome(ev.target.value)}></input>
                <br />
                <label htmlFor="ingrediente">Ingredientes:</label>
                <textarea name="ingrediente" value={ingrediente} onChange={(ev) => setIngrediente(ev.target.value)} rows={12} cols={52}></textarea>
                <br />
                <input style={{backgroundColor: '#609966'}} type="submit"></input>
            </form>
        </div>
    )
}

export {FormReceitas}