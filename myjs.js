function fetch()
{
      $.getJSON("https://api.covid19api.com/summary",
     
    
    function(data)
    {
      
      console.log(data['Countries']);
      var totalCount = 0;
      
     

      
      for(i=1;i<data['Countries'].length;i++)
      {
        totalCount += data['Countries'][i-1]['TotalConfirmed'];
      }
      document.getElementById('total').innerHTML = data['Global']['TotalConfirmed'];
      document.getElementById('recover').innerHTML = data['Global']['TotalRecovered'];
      document.getElementById('death').innerHTML = data['Global']['TotalDeaths'];
       //document.getElementById('total').innerHTML = totalCount;
       document.getElementById('intotal').innerHTML = data['Countries'][76]['TotalConfirmed'];
      document.getElementById('inrecover').innerHTML = data['Countries'][76]['TotalRecovered'];
      document.getElementById('indeath').innerHTML = data['Countries'][76]['TotalDeaths'];

    }
    
    );
}



    /*jQuery(document).ready(function($) {
  $('.count').counterUp({
    delay: 10,
    time: 1000,
  });
});
  mybutton = document.getElementById("mybtn");
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrolltop>100 || document.documentElement.scrolltop>100) 
    {
      mybutton.style.display = "block";
    }
    else
    {
      mybutton.style.display = "none"
    }
    // body...
  }
  function topFunction()
  {
    document.body.scrolltop=0;
    document.documentElement.scrolltop=0;
  }*/