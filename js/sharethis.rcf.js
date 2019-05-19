console.log("FS01 sharethis.rcf.js loaded.");

var buttons = 0;

$("div.rcf-sharethis").each(function(){
    buttons++;
    console.log("BUTTON "+buttons+" found, adding properties.")});

/*
$("div.rcf-sharethis").click(function(e){
    var network = $(this).attr("data-network");
    network = network.charAt(0).toUpperCase() + network.slice(1);
    console.log(network+" sharing button clicked.");
  
    //Add attributes:
    var shareDescription = ("{{ page.title }}\n{{ page.excerpt | strip_html | strip }}\n");
    var emailDescription = ("{{ page.title }}\n\n{{ page.excerpt | strip_html | strip }}\n\nRead more at {{ site.url }}{{ page.url }}");
    $(this).attr("data-title",shareDescription);
    $(this).attr("data-description",shareDescription);
    $(this).attr("data-message",emailDescription);
    $(this).attr("data-image","{{ site.url }}/assets/VimScreenshot.png");
    
    //Sharethis code:
    var elm = e.target;
    var network = elm.dataset.network;
    
  });
*/

$("div.rcf-sharethis").click(function(e){
    var network = $(this).attr("data-network");
    network = network.charAt(0).toUpperCase() + network.slice(1);
    console.log(network+" sharing button clicked.");
  
    //Sharethis code:
    var elm = e.target;
    var network = elm.dataset.network;
    
  });

