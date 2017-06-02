# Fire! Fire! Fire!

![bill hader](https://media1.giphy.com/media/3orieLZelMyxenarwQ/giphy.gif)

The realestate market is hot, but we need to make sure it doesn't burn down to the ground. How can we best do that? Let's compile a list of all the firehouses in NYC to make sure that we can keep an eye on things. Oh, and let's build it in reacrt because everyone knows that Mark Zuckerberg is in cahoots with the FDNY.

## Step 1

Use our old friend `create-react-app` to create a react app. 

## Step 2

Let's create three components, `App.js`, `House.js`, and `HouseList.js`. Be sure to manage your state in App.js.  

In `App.js`, create a function that grabs all of the firehouses and saves them in state. We can find all of the firehouse data in the provided json file `data/firehouse.json`. Let's also ceate a function that selects one firehouse and updates the state current firehouse.  

## Step 3

In House.js, pass the current house as props down and render it to the component

## Step 4

In `HouseList.js` pass the props of all the firehouses and map over them to make a list of every houses. 

Add an onClick function to each of the map components so that the state of current house is updated to the firehouse clicked

## Step 5

Style it. Make the FDNY glimmer like FIRE!!!!  
![fire](https://media2.giphy.com/media/yr7n0u3qzO9nG/giphy.gif)


