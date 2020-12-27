//menu

$( document ).ready( function() {
  var menu = $( '#menu' ).offset();
  $( window ).scroll( function() {
    if ( $( document ).scrollTop() > menu.top ) {
      $( '#menu' ).addClass( 'fixed' );
    } else {
      $( '#menu' ).removeClass( 'fixed' );
    }
  } );
} );

var title = document.title.replace('grand kiwi | ', '')

if (title == 'Home') {
    document.getElementById('menu').innerHTML = '<a class="here" href="/"><b>Home</b></a><a href="/information">Information</a><a href="/community">Community</a><a href="/project">Project</a><a href="/status">Status</a>'
}
