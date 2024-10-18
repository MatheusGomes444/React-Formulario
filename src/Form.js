import {render} from 'react'
import React, {Component} from 'react'
class Form extends Component{
    state = {
        name:""
    }
    handleSumit = (e) => {
        e.prevenDefault()
        let {name} = this.state

        name =name

        console.log('funcionou',name)
    }
    handleImputChange = (e) =>{
        this.setState({
            name:e.target.value
        })
    }
    render(){
        const {name } = this.state
        return(
         <section>
            <form onSubmit={this.handleSumit}>
            <label>
            nome:
            <input onChange={this.handleImputChange} type='text' placeholder='Nome'/>
            </label>
            <button type='submit'></button>
            </form>
            <h3>{name}</h3>
            </section>
        )
        
    }
}
export default Form