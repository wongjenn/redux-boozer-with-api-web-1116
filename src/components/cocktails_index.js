import React from 'react'

import { connect } from 'react-redux'
import { fetchCocktails, changeCocktail } from '../actions'

class CocktailsIndex extends React.Component {
  componentDidMount(){
    this.props.fetchCocktails()
  }

  handleClick(cocktailid){
    this.props.changeCocktail(cocktailid)
  }

  render(){
    const cocktails = this.props.cocktails
    return(
      <div>
        <h2>All Cocktails</h2>
        <ul>
          { cocktails.map((cocktail) => <li key={cocktail.id} >
          <a onClick={ this.handleClick.bind(this, cocktail.id) } >{cocktail.name}</a>
          </li> )}
        </ul>
      </div>)
  }

}

function mapStateToProps (state){
  return {
    cocktails: state.cocktails,
    currentCocktail: state.currentCocktail
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchCocktails: function(){
      let action = fetchCocktails()
      dispatch( action )
    },
    changeCocktail: function (id) {
      let action = changeCocktail(id)
      dispatch( action )
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(CocktailsIndex)
