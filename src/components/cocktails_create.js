import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCocktail } from '../actions'

class CocktailsCreate extends Component {
  constructor(){
    super()
    this.state = {
      name: "",
      description: "",
      instructions: "",
      source: "",
      proportions: []
    }

    this.baseState = this.state
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event){
    var key = event.target.name
    var value = event.target.value
    this.setState({
      [key]: value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.addCocktail(this.state)
    this.setState(this.baseState)
  }

  render(){
    return(
      <div>
      <h3>Add a Cocktail</h3>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <p><label>Name: </label>
        <input name ="name" type='text' onChange={this.handleInputChange} value={this.state.name}/></p>
        <p><label>Description: </label>
        <input name ="description" type='text' onChange={this.handleInputChange} value={this.state.description}/></p>
        <p><label>Instructions: </label>
        <input name ="instructions" type='text' onChange={this.handleInputChange} value={this.state.instructions}/></p>
        <p><label>Source: </label>
        <input name ="source" type='text' onChange={this.handleInputChange} value={this.state.source}/></p>
        <input type='submit' />
      </form>
      </div>
    )
  }
}

function mapDispatchToProps( dispatch ){
  return {
    addCocktail: function(newCocktail){
      let action = addCocktail( newCocktail )
      dispatch( action )
    }
  }
}

export default connect( null, mapDispatchToProps)( CocktailsCreate )
