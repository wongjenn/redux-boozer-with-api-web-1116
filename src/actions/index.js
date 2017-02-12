import axios from 'axios'
const BASE_URL = "http://localhost:3000/api/v1"
// API file: boozer-api-web-0716-web-1116

export function fetchCocktails(){
  const cocktails = axios.get(`${BASE_URL}/cocktails`).then(response =>  response.data)
  return {
    type: 'FETCH_COCKTAILS',
    payload: cocktails
  }
}

export function addCocktail(newCocktail){
  const cocktail = axios.post(`${BASE_URL}/cocktails`, newCocktail).then ( response => response.data)
  return {
    type: 'ADD_COCKTAIL',
    payload: cocktail
  }
}

export function changeCocktail (id) {
    return {
    type: 'UPDATE_CURRENT_COCKTAIL',
    payload: id
  }
}
