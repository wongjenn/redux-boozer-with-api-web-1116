import React from 'react'
import NavBar from './nav_bar'
import CocktailsIndex from './cocktails_index'
import CocktailsShow from './cocktails_show'
import CocktailsCreate from './cocktails_create'

export default (props) => {
    return (
      <div>
        < NavBar  title="Boozr" url="/" />
        <div className='container'>
        </div>
        <div className='col-md-4'>
         < CocktailsIndex />
        </div>
        <div className='col-md-8'>
         < CocktailsShow />
        </div>
        <div className='col-md-9'>
         < CocktailsCreate />
        </div>
      </div>
    )
};
