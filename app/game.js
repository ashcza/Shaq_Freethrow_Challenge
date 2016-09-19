import createjs from 'createjs-collection';
import $ from 'jquery';
import PhysicsWrapper from './physics';
import Hoop from './hoop';
import Ball from './ball';

export default function game() {


          let physicsWrapper = new PhysicsWrapper();
          let stage = new createjs.Stage("courtCanvas");
          $(".gameOver").hide();

          let background = new Image();
          background.src = "images/background.png";
          let bitmap = new createjs.Bitmap(background);
          stage.addChild(bitmap);
          stage.update();

          let netStage = new createjs.Stage("netCanvas");
          let net = new Image();
          net.src = "images/net.png";
          let bitmap2 = new createjs.Bitmap(net);
          netStage.addChild(bitmap2);
          netStage.update();


          let basketsAttempted = 0;
          let gameOver = false;
          let queue = [];
          let ballArray = [];
          let hoop = new Hoop(physicsWrapper);
          let power = 0;
          powerMeter();
          queue.push(physicsWrapper);
          queue.push(hoop);




          function shootBall () {
            let ball = new Ball(stage, (.0030 + (power / 10000)), physicsWrapper, hoop);
            hoop.ballArray.push(ball);
            ballArray.push(ball);
            queue.push(ball);
          }

          function removeAllBalls () {
            for(let i = 0; i < hoop.ballArray.length; i++) {
              ballArray[i].removeBall();
            }
          }
          function endGame () {
            gameOver = true;
            $(".gameOver").show();
            //need to hide css power bar
          }

          function basketCount() {
            if (basketsAttempted >= 10) {
              return '0';
            } else if (basketsAttempted < 10) {
              return (10 - basketsAttempted).toString();
            }
          }

          function powerMeter(){
            let up = true;
            setInterval(() => {
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
              $(".powerMeter").val( power );
              $("#score").val(hoop.basketsMade.length);
              $("#remaining").text(basketCount());
            }, 10 );
          }



          $(window).keypress(function (e) {

            if (e.keyCode === 0 || e.keyCode === 32) {
              e.preventDefault();
              basketsAttempted ++;
              if (gameOver === true) {
                $(".gameOver").hide();
                basketsAttempted = 0;
                removeAllBalls();
                gameOver = false;
                hoop.removeBasketsMade();
                //need to unhide css power bar
              } else if (basketsAttempted > 10) {
              } else if (basketsAttempted < 10) {
                shootBall();
              } else if (basketsAttempted === 10){
                shootBall();
                setTimeout(endGame, 4000);
              }
            }
          });


          // stage.update();

          //Update stage will render next frame
          createjs.Ticker.addEventListener("tick", handleTick);

          function handleTick() {

            for(let i = 0; i < queue.length; i+=1) {
              queue[i].step();
            }

            for(let i = 0; i < queue.length; i+=1) {
              queue[i].draw();
            }
            //update canvas according to new physics engine calculations
            $("#score").html(hoop.basketsMade.length);

            stage.update();
            netStage.update();
          }

          // 9 in air, spacebar, 10 in air, wait 5 seconds, display the result (hide power bar), spacebar again resets game (show power bar)

}
