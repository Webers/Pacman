// ********* Pacman Game JS Script          *************
// ******************************************************
// *** Dated 08/10/2013  ***** Last Mod : 14/10/2013 ****
// ******************************************************

//=== Declaring all our variables n globals
var canvas = document.getElementById("mazecanvas");
var context = canvas.getContext("2d");
var canvasColor = "#000";
var wallColor = "#07d";
var pathColor = "#bfb";
var startx = 0;
var starty = 0;
var gridw = 20;
var gridh = 20;
var cols = 20;
var rows = 20;
var rWallx = 9;
var rWally = 19;
var tWallx = 0;
var tWally = 10;
var lWallx = 10;
var lWally = 0;
var bWallx = 20;
var bWally = 10;

//=== Declaring the maze pattern (1 - path exists, 0 - wall)
var maze = [            [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
                        [0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0],
                        [0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0],
                        [0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0],
                        [0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0],
                        [0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0],
                        [0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
                        [0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0],
                        [0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0],
                        [0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0],
                        [1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1],
                        [0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0],
                        [0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0],
                        [0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
                        [0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0],
                        [0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0],
                        [0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0],
                        [0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0],
                        [0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0],
                        [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0]];
                               
//=== Function Definitions

function doMaze()
{
       clearCanvas(startx, starty, gridw*cols, gridh*rows);
       drawGrid(startx, starty, gridw, gridh, cols, rows);
}

function clearCanvas(x, y, w, h)
{
   context.beginPath();
   context.rect(x, y, w, h);
   context.closePath();
   context.fillStyle = canvasColor;
   context.fill();
}

function drawGrid(x, y, cellw, cellh, gridcols, gridrows)
{
       for(var i=0; i<gridcols; i++)
       {
               for (var j=0; j<gridrows; j++)
               {
                       if (maze[j][i] == 0)    
                               drawRectangle(i*cellw, j*cellh, cellw, cellh, wallColor);
                       else
                               drawRectangle(i*cellw, j*cellh, cellw, cellh, pathColor);
               }
       }
}

function drawRectangle(x, y, width, height, style)
{
   context.beginPath();
   context.rect(x, y, width, height);
   context.closePath();
   context.fillStyle = style;
   context.fill();
}

//=== Execution
doMaze();
