let images = [];

for (let i = 1; i <= 4; i++) {
    const img = new Image(3210,560);
    img.src = `/images/anim/anim${i}.png`;
    images.push(img);
}

let avis = ['/images/capsule.png','/images/public_health.png','/images/kawaii_graph.png', '/images/kawaii_dev.png'];
let widths = ['10%','11%','12%','13%']
let click = 0;

for(let i = 0; i <= 4; i++){
  const img = new Image();
  img.src = avis[i];
  images.push(img);
}
$(document).ready(function()
{
 
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

function changeAvi(source,width)
{
  $("#main-avi").attr({'src': source, 'width': width}); 
}

