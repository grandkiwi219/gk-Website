//notice

var desc = new XMLHttpRequest();
desc.open('GET', 'https://gk219.kro.kr/code/json/notice.json', true);
desc.onload = function () {
    var data = JSON.parse(this.response);
    data.forEach((type) => {
        document.getElementById('notice').innerHTML += type.replace('/n/', '<br/>');
    })
}
desc.send();


//title

document.getElementById('title').innerHTML = '<b>grand kiwi</b>';


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

var menu_request = new XMLHttpRequest();
menu_request.open('GET', 'https://gk219.kro.kr/code/json/menu.json', true);
menu_request.onload = function () {
    var data = JSON.parse(this.response);
    data.forEach((type) => {
        menu_description += type;
    })
}
menu_request.send();


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
