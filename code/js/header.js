//notice

var desc = new XMLHttpRequest();
desc.open('GET', 'https://gk219.kro.kr/code/json/notice.json', true);
desc.onload = function () {
    var data = JSON.parse(this.response);
    if (data[0] == '') { $('#notice').remove('#notice') } else {
        data.forEach((noticeType) => {
            document.getElementById('notice').innerHTML += noticeType.replace('/n/', '<br/>');
        })
    }
}
desc.send();


//title

document.getElementById('title').innerHTML = '<b>grand kiwi</b>';
