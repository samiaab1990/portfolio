// Load images so they don't flicker 
let images = [];

for (let i = 1; i <= 4; i++) 
{
    const img = new Image(3210,560);
    img.src = `./images/anim/anim${i}.png`;
    images.push(img);
}

let avis = ['./images/capsule.png','./images/public_health.png','./images/kawaii_graph.png', './images/kawaii_dev.png'];
let widths = ['11.5%','16%','21%','20%']
let click = 0;

for(let i = 0; i <= 4; i++)
{
  const img = new Image();
  img.src = avis[i];
  images.push(img);
}

// avitar change 
$(document).ready(function()
{
 
  // Change avis by clicking the avatar itself
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
// adapted largely from https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8

const stored = localStorage.getItem("theme") ? localStorage.getItem("theme"):null;

$(document).ready(function()
{ 
  const toggle = ($('.switch input[type="checkbox"]'));

  if(stored)
  {
    $(":root").attr("data-theme",stored);
    
    if(stored === "light")
    {
      toggle.prop("checked",true); 
    }
  }

  toggle.change(function(){
    
    if($(this).prop("checked"))
    {
      $(":root").attr("data-theme","light");
      localStorage.setItem("theme","light")
    }
    else
    {
      $(":root").attr("data-theme","dark");
      localStorage.setItem("theme","dark");
    }
  });
});


$(document).ready(function()
{
  $($('.navbar a')[0]).addClass('active');

$('.container').on('scroll', function()
 {
 $('section').each(function(i)
 {
    var section_id = $($('section')[i]).attr('id');
    var height_threshold = document.getElementById(section_id).offsetTop * .75;

    if($('.container').scrollTop() >= height_threshold)
    {
  
      $('.navbar a').each(function(i)
      {
        $($('.navbar a')[i]).removeClass('active');
      });

      $($('.navbar a')[i]).addClass('active');
    }
  
 });
  
});
});

const abt_divs = [];
const desc_divs =['About.','Skills.','Hobbies.','This Page.']

$(document).ready(function()
{ 
  for(let i = 1; i < $('.about > div').length - 1; i++)
  {
    abt_divs.push($($('.about > div')[i]).attr('class'));
  }

});

$(document).ready(function()
{ 
  for(let i = 0; i < abt_divs.length; i++)
  {
    if($("." + abt_divs[i]).css('display') === 'block')
    {
      $('.div-change-buttons > a:nth-child(' + (i + 1) + ')').css('background-color','var(--font-color)');
    }
  }

});


function changeDiv(div)
{

  $("." + div).css({'display':'block','animation':'linear-transition 1s'});

  for(let i = 0; i < abt_divs.length; i++)
  {
    if(div != abt_divs[i])
    {
        $("." + abt_divs[i]).css({'display':'none'});
        $('.div-change-buttons > a:nth-child(' + (i + 1) + ')').css('background-color','transparent');
    }
    else
    {
      $('.div-change-buttons > a:nth-child(' + (i + 1) + ')').css('background-color','var(--font-color)');
      $('#secondary-heading').html(desc_divs[i]);

      if(i + 1 < abt_divs.length)
      {
        const div_string = desc_divs[i + 1].substring(0 , desc_divs[i + 1].length - 1); 
        $('.next-page').attr("onclick","changeDiv('" + abt_divs[i + 1]+"');");
        $('.next-page > span').html(div_string);
      }
      else
      {
        const div_string = desc_divs[0].substring(0 , desc_divs[0].length - 1); 
        $('.next-page').attr("onclick","changeDiv('" + abt_divs[0]+"');");
        $('.next-page > span').html(div_string);
      }

     
    }
  }
}

