//notice

var notice = '';

    if (notice == '') {
        console.log('공지 없음')
        $('#notice').remove('#notice')
    } else {
        document.getElementById('notice').innerHtml = notice;
    }


//title

document.getElementById('title').innerHTML = '<b>grand kiwi</b>';


//menu

var title = document.title.replace('grand kiwi | ', '');

menuDescription = '';

var menuRequest = new XMLHttpRequest();
menuRequest.open('GET', 'https://gk219.kro.kr/code/json/menu.json', true);
menuRequest.onload = function () {
    var data = JSON.parse(this.response);
    data.forEach((menuType) => {
        menuDescription += menuType;
        console.log(menuDescription);
    })
}
menuRequest.send();

if (title == 'Home') {
    document.getElementById('menu').innerHTML = menuDescription.replace('<a href="/">Home</a>', '<a class="here" href="/"><b>Home</b></a>');
} else if (title == 'Information') {
    document.getElementById('menu').innerHTML = menuDescription.replace('<a href="/information">Information</a>', '<a class="here" href="/information"><b>Information</b></a>');
} else if (title == 'Community') {
    document.getElementById('menu').innerHTML = menuDescription.replace('<a href="/community">Community</a>', '<a class="here" href="/community"><b>Community</b></a>');
} else if (title == 'Project') {
    document.getElementById('menu').innerHTML = menuDescription.replace('<a href="/project">Project</a>', '<a class="here" href="/project"><b>Project</b></a>');
} else if (title == 'Status') {
    document.getElementById('menu').innerHTML = menuDescription.replace('<a href="/status">Status</a>', '<a class="here" href="/status"><b>Status</b></a>');
} else {
    document.getElementById('menu').innerHTML = menuDescription;
}


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

