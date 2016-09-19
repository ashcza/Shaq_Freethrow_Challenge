# Shaq Free Throw Challenge

![screen shot](http://res.cloudinary.com/ashcon/image/upload/v1474272815/Github/shaq3.gif)

## Description

A javscript based game where you help Shaquille O'Neal improve his career 52.7% free throw average. Make sure to hit the spacebar at the right power level!

## Demo

[Demo Link](https://ashcza.github.io/Shaq_Freethrow_Challenge/)


## Some Interesting Features

#### Scoring A Basket

Defined a point under the rim and checked to see if that point overlapped any ball.

```
  step () {
    //Checks to see if ball exists
    if (this.ballArray.length > 0) {
    
    //Iterates over all balls
      for (let i = 0; i < this.ballArray.length; i++) {
        
        //Checks to see if area of ball contains x,y point directly below rim
        if (this.physics.Matter.Bounds.contains(this.ballArray[i].body.bounds, {x: 420, y: 265})) {
          
          //Checks to see if ball was already counted
          if (!this.basketsMade.includes(this.ballArray[i].body.id)) {
            this.basketsMade.push(this.ballArray[i].body.id);
          }
        }
      }
    }
  }
```



## Future Features

- Add basketball sprite image to ball and display rotational angle supplied by matter.js engine.
- Add animation for Shaq prior to shooting ball.




### To Play Locally
```sh
$ npm install
$ npm run watch
```


https://ashcza.github.io/Shaq_Freethrow_Challenge/

README
Link to live version
Instructions on how to play/use the project
List of techs/languages/plugins/APIs used
Technical implementation details for anything worth mentioning
Basically anything you had to stop and think about before building
Code snippets for these (make sure it looks good)
To-dos/future features
