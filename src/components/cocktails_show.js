import React from 'react';
import {connect} from 'react-redux';

function CocktailsShow (props) {
  const cocktail = props.cocktail;

  return cocktail.name === undefined ? (<div>'Click on a Cocktail to see details...'</div>) :
  (
    <div>
      <h2>{cocktail.name}</h2>
      <p>{cocktail.description}</p>
      <p>{cocktail.instructions}</p>
      <ul>
        {cocktail.proportions.map( proportion => <li key={proportion.id}>{`${proportion.amount} ${proportion.ingredient_name}`}</li>)}
      </ul>
    </div>);
}

function mapStateToProps(state, ownProps){
  const cocktail = state.cocktails.find(cocktail => cocktail.id == state.currentCocktail) || {}
  return {
    cocktail: cocktail
  }
}

export default connect(mapStateToProps)(CocktailsShow)
