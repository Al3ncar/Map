import React, {Component} from 'react'
import './App.css'

class App extends Component{
  state = {
    mercado: [
      {
        produto:'Arroz',
        valor: 20,
      },{
        produto:'Feijão',
        valor: 10,
      },{
        produto:'Macarrao',
        valor: 8,
      },{
        produto:'Açucar',
        valor: 12,
      },{
        produto:'Sal',
        valor: 9,
      },{
        produto:'Óleo',
        valor: 7,
      }
    ]
  }
  render(){
    return(
      <main>
        <div className='mercado'>
          <div className='mercadoTitle'>
            <h1>Mercado</h1>
          </div>
            <div className='CardProduct'>
              {this.state.mercado.map ((item) => (
                <div className='Card'>
                  <h2>{item.produto}</h2>
                  <p>R$: {item.valor},00</p>
                </div>
              ))}
            </div>
        </div>
      </main>
    )
  }
}
export default App