// Load images so they don't flicker 
let images = [];

for (let i = 1; i <= 4; i++) 
{
    const img = new Image(3210,560);
    img.src = `/images/anim/anim${i}.png`;
    images.push(img);
}

let avis = ['/images/capsule.png','/images/public_health.png','/images/kawaii_graph.png', '/images/kawaii_dev.png'];
let widths = ['11.5%','16%','21%','20%']
let click = 0;

for(let i = 0; i <= 4; i++)
{
  const img = new Image();
  img.src = avis[i];
  images.push(img);
}

$(document).ready(function()
{
 
  // Change avis by clicking 
  $("#main-avi").click(function()
  {
    click++;

    if(click < avis.length)
    {
      $(this).attr({'src': avis[click], 'width': widths[click]});
    }
    else
    {
      click = 0;
      $(this).attr({'src': avis[click], 'width': widths[click]});
    }

  });
});

// Create a function that changes avi upon link click 
function changeAvi(source,width)
{
  $("#main-avi").attr({'src': source, 'width': width}); 
}

// light-dark mode


$(document).ready(function()
{
  var state = 0;
  
   $('.switch input[type="checkbox"]').click(function()
   
   {
      if(state === 0)
      {
        state = 1;
        $('body').css({"background-color":"#F4F4F4", "color":"#1A1A1A"});
        $('a').css("color","#1A1A1A");

      }
      else
      {
        state = 0; 
        $('body').css({"background-color":"#1A1A1A", "color":"#FFFFFF"});
        $('a').css("color","#F4F4F4");
  
      }
   })
   
});

