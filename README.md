# Shaq Free Throw Challenge

![screen shot](http://res.cloudinary.com/ashcon/image/upload/v1474272815/Github/shaq3.gif)

## Description

A javscript based game where you help Shaquille O'Neal improve his career 52.7% free throw average. Make sure to hit the spacebar at the right power level!

## Technologies 

Used Easel.js with Canvas to draw images and Matter.js as the physics engine. 

## Demo

[Shaw Free Throw Challenge](https://ashcza.github.io/Shaq_Freethrow_Challenge/)


## Some Interesting Features

### Scoring A Basket

Located a coordinate under the rim that would only catch successful shots and checked to see if that point overlapped any area belonging to a ball.

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

### Power Meter

Created a power meter using HTML5 meter element. Used setInterval to update the value of the meter element every 10ms. Each iteration checked to see if the meter should be increasing or decreasing.

```
          function powerMeter(){
            let up = true;
            
            setInterval(() => {
            
            //checks to see if interval should be counting up
            	if (up) {
            		power++;
            		if (power === 100) {
            			up = false;
            		}
            	} else {
            		power --;
            		if (power === 0) {
            			up = true;
            		}
            	}
              //sets value of power meter
              $(".powerMeter").val( power );
              
              //sets value of baskets scored
              $("#score").val(hoop.basketsMade.length);
              
              //sets value of remaining baskets
              $("#remaining").text(basketCount());
            }, 10 );
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
