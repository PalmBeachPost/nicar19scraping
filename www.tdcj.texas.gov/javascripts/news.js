// jQuery document to enhance News page (styles and show/hide behaviors)
// By: Frank Henderson
// Date: June 30, 2017

$(document).ready(function()	{
 
  $('.star > li').addClass('bold');				// add 'bold' class to all <li> in 'star' list
  $('.star > div').css('margin-top', '5px');	// add spacing to each div
  
  // arrays & variables
  var news = [],
	  more = [],
	  i = 0;
	  
  // function to show more (used later)
  function showMore(j) {
	$(news[j]).click(function()	{		
		$(more[j]).slideToggle(500);
		var $link = $(this);
		if($link.text() === 'Read more')	{
			$link.text('Read less');			
		}
		else	{
			$link.text('Read more');						
		}
		return false; 
    });
  }
  
  // gather up to 20 news items
  for (i = 0; i < 20; i += 1) {
    news[i] = document.getElementById("news"+i); 
    more[i] = document.getElementById("more"+i);
  }
  
  // for each news item, hide its 'more', and register its 'showMore' function
  for (i = 0; i < news.length; i+=1) {
    $(more[i]).hide();  
    showMore(i);
  }
	
});