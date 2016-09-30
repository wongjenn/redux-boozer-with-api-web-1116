import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { createCocktail } from '../actions';

class CocktailsNew extends React.Component {

  constructor(props){
    super(props);
    this.state = { cocktail: {name: '', ingredients: [{amount: 0, ingredient_name: ''}]} };

    this.onSubmit = this.onSubmit.bind(this);
    this.addProportion = this.addProportion.bind(this);
  }

  addProportion(){
    var ingredientForm = [...this.state.cocktail.ingredients, {amount: 0, ingredient_name: ''}]
    this.setState({
      cocktail: {ingredients: ingredientForm}
    })
  }

  onSubmit(e){
    e.preventDefault();
    const params = {
      cocktail: {
        name: this.refs.name.value,
        description: this.refs.description.value,
        instructions: [],
        proportions: [{amount: this.refs.amount.value, ingredient_name: this.refs.ingredient_name.value}]
      }
    }


    this.props.createCocktail(params);

  }

  render (){
    return (
      <div>
        <h2>Cocktails New</h2>
        <form onSubmit={this.onSubmit}>
          <input ref="name" placeholder="Cocktail Name"  />
          <input ref="description" placeholder="Description"  />
          <input ref="instructions" placeholder="Instructions"  />
          {this.state.cocktail.ingredients.map( (ingredient, i) =>
            <div key={i}>
              <input name="ingredient_name"  placeholder="Ingredient Name"/>
              <input ref="amount"  placeholder="Ingredient Amount"/>
            </div>
          )}
          <input type="submit" value="Submit"/>
        </form>
        <button onClick={this.addProportion} >Add Proportion</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {createCocktail: bindActionCreators(createCocktail, dispatch)}
}

export default connect(null, mapDispatchToProps)(CocktailsNew);
