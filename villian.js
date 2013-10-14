// ********* Pacman Game JS Script          *************
// ******************************************************
// *** Dated 08/10/2013  ***** Last Mod : 14/10/2013 ****
// ******************************************************

//=== Declaring all our variables n globals

 var villianColor = "#000";
 var villianXPos = 0;
 var villianYPos = 0;
 var villianWidth = gridw;
 var villianHeight = gridh;
  
//=== Function Definitions

function placeVillians()
{
	// Lets place the villian at grid pos 9,9
	
	villianXPos = 9;
	villianYPos = 9;
	
	drawRectangle(villianXPos*gridw, villianYPos*gridh, villianWidth, villianHeight, villianColor);

//	drawRectangle(0, 10*gridh, villianWidth, villianHeight, villianColor);
}



function navigateVillians()
{
	// We move one step at a time checking route availability - a very basic walk 
	
	var newXPos = villianXPos;
	var newYPos = villianYPos;
	
     //check if the villian is at any of the four wall exits 
      //bottom wall
     if(newXPos == 10 && newYPos == 19){    //bottom wall
     	
     	villianXPos = 9;
     	villianYPos = 1;
     	drawRectangle(newXPos*gridw, newYPos*gridh, villianWidth, villianHeight, pathColor);
        
     }


     //Top wall
     if(newXPos == 10 && newYPos == 0){
     	
     	villianXPos = 10;
     	villianYPos = 18;
     	drawRectangle(newXPos*gridw, newYPos*gridh, villianWidth, villianHeight, pathColor);
        
     }

     //Right wall 
     if(newXPos == 19 && newYPos == 10){
     	
     	villianXPos = 1;
     	villianYPos = 11;
     	drawRectangle(newXPos*gridw, newYPos*gridh, villianWidth, villianHeight, pathColor);
     	
     }

     //Left Wall
     if(newXPos == 0 && newYPos == 10){
     	
     	villianXPos = 18;
     	villianYPos = 9;
     	drawRectangle(newXPos*gridw, newYPos*gridh, villianWidth, villianHeight, pathColor);
     	
     }
     else
     {
	// Checking all possible movement options
	var options = 0; 
	var optionX=[0,0,0,0]; var optionY=[0,0,0,0];
		
	if (maze[villianYPos][villianXPos-1] == 1) 		{ optionX[options]=villianXPos-1; optionY[options]=villianYPos;   options++; }
	// Check if we can move Up
	if (maze[villianYPos-1][villianXPos] == 1) 		{ optionX[options]=villianXPos;   optionY[options]=villianYPos-1; options++; }
	// Check if we can move Right
	if (maze[villianYPos][villianXPos+1] == 1) 		{ optionX[options]=villianXPos+1; optionY[options]=villianYPos;   options++; }
	// Check if we can move Down
	if (maze[villianYPos+1][villianXPos] == 1)      { optionX[options]=villianXPos;   optionY[options]=villianYPos+1; options++; }
	
	if (options==0) 
	{
		alert("Villian is stuck. Resetting");
		newXPos = 9;
		newYPos = 9		
	}
	else 
	{
		//Lets choose a random option to move on
		var randPos = Math.floor((Math.random()*options));
		newXPos = optionX[randPos];
		newYPos = optionY[randPos];
		
	}
	moveVillian(newXPos, newYPos);
}
} 


function moveVillian(newXPos, newYPos)
{
	drawRectangle(villianXPos*gridw, villianYPos*gridh, villianWidth, villianHeight, pathColor);
	villianXPos = newXPos;
	villianYPos = newYPos;
	drawRectangle(villianXPos*gridw, villianYPos*gridh, villianWidth, villianHeight, villianColor);
}                       
                               
//=== Execution

placeVillians();

setInterval(function(){navigateVillians()},100);
