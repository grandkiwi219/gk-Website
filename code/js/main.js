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

const title = document.title.replace('grand kiwi | ', '');

var menu_description = '';

const menu_type 
=
[
'<a href="/">Home</a>',
'<a href="/information">Information</a>',
'<a href="/community">Community</a>',
'<a href="/project">Project</a>',
'<a href="/status">Status</a>'
];

menu_type.forEach(desc => menu_description += desc);

if (title == 'Home') {
    document.getElementById('menu').innerHTML = menu_description.replace('<a href="/">Home</a>', '<a class="here" href="/"><b>Home</b></a>');
} else if (title == 'Information') {
    document.getElementById('menu').innerHTML = menu_description.replace('<a href="/information">Information</a>', '<a class="here" href="/information"><b>Information</b></a>');
} else if (title == 'Community') {
    document.getElementById('menu').innerHTML = menu_description.replace('<a href="/community">Community</a>', '<a class="here" href="/community"><b>Community</b></a>');
} else if (title == 'Project') {
    document.getElementById('menu').innerHTML = menu_description.replace('<a href="/project">Project</a>', '<a class="here" href="/project"><b>Project</b></a>');
} else if (title == 'Status') {
    document.getElementById('menu').innerHTML = menu_description.replace('<a href="/status">Status</a>', '<a class="here" href="/status"><b>Status</b></a>');
} else {
    document.getElementById('menu').innerHTML = menu_description;
}
