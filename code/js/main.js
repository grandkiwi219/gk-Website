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
