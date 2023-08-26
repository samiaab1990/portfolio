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

 
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

$(document).ready(function()
{ 
  const toggleSwitch = $('.switch input[type="checkbox"]');
  
  if (currentTheme) 
  {
    if (currentTheme === 'light') 
    {
      toggleSwitch.prop("checked") = true;
    }
  }

  
   toggleSwitch.change(function()
   {
      if(toggleSwitch.prop("checked"))
      {
        $(":root").attr('data-theme','light');
        localStorage.setItem('theme', 'light');
      } 

      else
      {
        localStorage.setItem('theme', 'dark');
      }
      
    }
   ); 

});

