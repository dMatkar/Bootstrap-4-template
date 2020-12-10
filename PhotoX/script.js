$(document).ready(function()
{
  $('.nav-button').click(function()
  {
     $(this).toggleClass("change-menu");
  });

  $(window).scroll(function()
  {
    let position=$(this).scrollTop();
    if(position>132)
    {
      $('.nav-menu').addClass('custom-navbar');
    }
    else
    {
      $('.nav-menu').removeClass('custom-navbar');
    }
  });

  $(window).scroll(function()
  {
    let position=$(this).scrollTop();
    if(position>=540)
    {
      $('.camera-img').addClass('FromLeft');
      $('.mission-text').addClass('FromRight');
    }
    else
    {
      $('.camera-img').removeClass('FromLeft');
      $('.mission-text').removeClass('FromRight');
    }
  });

  $('.galary-list-item').click(function()
  {
    let value=$(this).attr('data-filter');
    console.log(value);
    if(value==="All")
    {
      $('.filter').show(300);
    }
    else
    {
      $('.filter').not('.'+value).hide(300);
      $('.filter').filter('.'+value).show(300);
    }
  });

  $('.galary-list-item').click(function()
  {
    $(this).addClass('active-item').siblings().removeClass('active-item')
  });

  $(window).scroll(function()
  {
    let position=$(this).scrollTop();
    if(position>=4341)
    {
       $('.card-1').addClass('moveFromLeft');
       $('.card-2').addClass('moveFromBottom');
       $('.card-3').addClass('moveFromRight');
    }
    else
    {
       $('.card-1').removeClass('moveFromLeft');
       $('.card-2').removeClass('moveFromBottom');
       $('.card-3').removeClass('moveFromRight');
    }
  });
});
