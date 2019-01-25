// jQuery document to enhance 'How Do I' page (styles and show/hide behaviors)
// By: Frank Henderson
// Date: July 12, 2017

$(document).ready(function()	{
 
  $('.star > li').addClass('bold');				// add 'bold' class to all <li> in 'star' list
  $('.star > div').css('margin-top', '5px');	// add spacing to each 'more' div
  
  // arrays & variables
  var how = [],
	  more = [],
	  i = 0;
	  
  // function to show more (used later)
  function showMore(j) {
	$(how[j]).click(function()	{		
		$(more[j]).slideToggle(500);
		return false; 
    });
  }
  
  // gather up to 30 'how' items
  for (i = 0; i < 30; i += 1) {
    how[i] = document.getElementById("how"+i); 
    more[i] = document.getElementById("more"+i);
  }
  
  // for each how item, hide its 'more', and register its 'showMore' function
  for (i = 0; i < how.length; i+=1) {
    $(more[i]).hide();  
    showMore(i);
  }
	
});