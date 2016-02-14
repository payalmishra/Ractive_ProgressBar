$(document).ready(function(){
	 
	/* initializing the Ractivejs constructor to create the progress bars*/ 
	var ractive = new Ractive(
		{
		  el: document.body,
		  template: '#template',
		  data: {
		    bar1 : {
		    readonly: true,					
		    progress: 20
		   },
		   bar2 : {
		    readonly: true,					
		    progress: 40
		   },
		   bar3 :{
		    readonly: true,					
		    progress: 60
		   }
		  }
		}
	);

    $('#actionBtns').on('click',function(ref){
          
          var selectedProgressBarVal = $('#progressBarSelection option:selected').val(), // getting value of the dropdown
              initialBarValue = $(selectedProgressBarVal)[0].style.width.replace(/[^a-z0-9\s]/gi, ''),  // removing the % from value of the progress bar
              newBarValue = parseInt(initialBarValue) + parseInt(ref.target.value);

          $(selectedProgressBarVal).width(newBarValue+'%');
          
          /* if new value is less than 0, then display it as 0% in the span,
           * if new value is more than 100 , display it in the span
           */
          if(newBarValue >= 0){
             $(selectedProgressBarVal).children().html(newBarValue+'%');
          }else{
             $(selectedProgressBarVal).children().html('0%');
          }


          /* if new value is more than 100, change the background color of the progress bar to red,
           * if new value is less than or equal to 100, show background color of the progress bar as blue
           */
          if(newBarValue > 100){
              $(selectedProgressBarVal).addClass('exceedingLimit');
          }else{
          	  $(selectedProgressBarVal).removeClass('exceedingLimit');
          }

    });
	  
});

