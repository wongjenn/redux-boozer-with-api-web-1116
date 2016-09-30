# Redux Boozr With API

It's the next iteration of our cocktail tracker application. First, fork and clone the corresponding `Rails Boozr API`.

## Instructions

1. Right now, our `FETCH_COCKTAILS` action is loading a default list of cocktails - sad! Let's connect it to our API so that we can see a bunch of different cocktails.
2. Create a Component and route to create a new cocktail. This component should be rendered at `cocktails/new`. To begin, a cocktail should have a name, description, and instructions.
3. Submitting the form should dispatch an action to create a new cocktail. This should make a post request to our API and persist the cocktail to the database. **NOTE** - you'll have to build out the create action on the API side of things for this to work.
4. **BONUS** Once you get this working, add the ability to also create proportions along with the cocktail. You'll need some logic in your controller to handle this. 
