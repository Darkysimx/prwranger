
var canvas = new fabric.Canvas('myCanvas');
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObj= "";

function new_image(getImage)
{
	fabric.Image.fromURL(getImage,function(Img){
		blockImageObj=Img;

		blockImageObj.scaleToWidth(blockImageWidth); 
		blockImageObj.scaleToHeight(blockImageHeight);
		blockImageObj.set({
			top:blockY,
			left:blockX
		});
		canvas.add(blockImageObj);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '69') 
	{
		new_image('rr1.png');
	console.log("r");
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		new_image('gr.png');
	console.log("g");
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		new_image('yr.png');
	console.log("y");
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		new_image('pr.png');
		console.log("p");
	}
	if(keyPressed == '73')
	{
		blockX = 700;
		new_image('br.png');
		console.log("b");
	}
	
}

