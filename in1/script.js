function showWidth( ele, w ) {
    $( "div" ).text( "The width for the " + ele + " is " + w + "px." );
  }
  $( "#getp" ).click(function() {
    showWidth( "paragraph", $( "p" ).width() );
  });