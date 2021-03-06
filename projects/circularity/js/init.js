var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables
            var circle; // undefined variable that will hold an individual circle
            var circles = [];// empty array that will later hold multple circles
        // TODO 2 : Create a function that draws a circle 
        function drawCircle(){
            circle = draw.randomCircleInArea(canvas, true, true, '#999', 2); // calls random circle function, creates a circle
            physikz.addRandomVelocity(circle, canvas, 5, 5); // adds random velocity
            view.addChild(circle); // add circle to canvas
            circles.push(circle); // push method pushes individual circle to circles array


        }

        // TODO 3 / 8 : Call the drawCircle() function 
            /*
            drawCircle();
            drawCircle();
            drawCircle();
            drawCircle();
            drawCircle();
            Calls the circle 5 times thorugh hard coding
            */

        // tells the code to run 500 times, usiing the drawCircles function
        for (var Dc = 0; Dc < 500; Dc++){
            drawCircle();
        }

        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Updates the circle's position //
            /*
            physikz.updatePosition(circles[0]);
            physikz.updatePosition(circles[1]);
            physikz.updatePosition(circles[2]);
            physikz.updatePosition(circles[3]);
            physikz.updatePosition(circles[4]);
            */

            // TODO 5 / 10 : Call game.checkCirclePosition() on your circles.
            /* Checks the position of the circle, hardcoded
            game.checkCirclePosition(circles[0])
            game.checkCirclePosition(circles[1])
            game.checkCirclePosition(circles[2])
            game.checkCirclePosition(circles[3])
            game.checkCirclePosition(circles[4])
            */
            // TODO 9 : Iterate over the array
            // Uses a loop to itterate over array and use the itteration in all the circles generated through the loop
            for (var j =0; j < circles.length; j++){
                var eachCircle = circles[j];
                physikz.updatePosition(circles[j]);
                game.checkCirclePosition(circles[j]);
 
            }
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            // Tells the code to reset on the opposite border when reaching a border.
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            } else if(circle.x < 0){
                circle.x = canvas.width
            } else if(circle.y > canvas.height) {
                  circle.y = 0   
            } else if (circle.y < 0){
                circle.y = canvas.height;
            }
            
            // TODO 7 : YOUR CODE STARTS HERE //////////////////////
           


            // YOUR TODO 7 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
