/*
 @author : Louis-Vincent Boudreault.
*/

var isRunning = false;  //Follow the game state.
var lastTime;           //Used in the game loop to determine what is time before each cycle.
var fpsCounter;         //Count the number of frame per second the application does.
var delta;              //Calculate the different time state of the game.
var canvas;             //The surface to display.
var canvasContext;      //The context and controller of our canvas.

window.onload = initializer();


/*
 This function initialize variable to their default value and start the game.
 */
function initializer()
{
    setupCanvas();
    fpsCounter = 0;             // Set the fpsCounter to 0.
    delta = 0;                  // Set the delta to 0.
    lastTime = Date.now();      // Set the lastTime to the current time in millisecond.
    start();                    //Start the game.
}

/*
 This function sets our canvas properties.
 */
function setupCanvas()
{
    canvas  = document.getElementById("mainCanvas");            //Get our canvas Id from HTML.
    canvasContext = canvas.getContext(CONSTANT_CONTEXT);        //Set the context for our canvas to 2D.
    canvasContext.canvas.width = CONSTANT_WIDTH;                //Set the width of our canvas.
    canvasContext.canvas.height = CONSTANT_HEIGHT;              //Set the height of our canvas.
    canvasContext.canvas.style = CONSTANT_BORDER;               //Set the border style of our canvas.
}

/*
 This function display the number of fps.
 */
function tick()
{
    console.log(fpsCounter);
}

function start()
{
    isRunning = true;           // Set the state of the game to running.
    gameLoop();                 // Start the game loop.
}

/*
This is the game loop that runs 60 operations per second.
 */
function gameLoop()
{
    if(isRunning)                           //Check if the game has not stop.
    {
        var now = Date.now();               //Get the current time in millisecond.

        delta += (now - lastTime);          //Get the difference between lastTime and now, then add it to a delta.
        fpsCounter++;                       //Increment the frame per second.
        while (delta >= CONSTANT_SECOND)    //If the delta is greater or equal to one second then you can see how much frame we increment per second.
        {
            tick();                         //Display the fps.
            fpsCounter = 0;                 //Reset the fps counter.
            delta -= 1000;                  //Substract one second from the delta.
            update();                       //Update the graphics every every second.
        }
        render();                           //render every in every frame.
        lastTime = now;                     //lastTime becomes now.
        requestAnimationFrame(gameLoop);    //requestAnimationFrame() allows us to stay in the loop.
    }
}

/*
 This function update the game graphics.
 */
function update()
{
}

/*
 This function render the graphics to the screen.
 */
function render()
{
}

/*
 This function change the state of the game by change the variable isRunning from true to false.
 */
function stop()
{
    if(isRunning)               //Check if the game is already stopped.
    {
        isRunning = false;      //Set running to false.
    }
}














