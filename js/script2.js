// alert ('');

var cnt = 0;
var $slideWrap = document.querySelector('.slide-wrap')
var $page = document.querySelector('.page')


// setInterval(nextSlideFn, 3000); //3초에 한번씩 자동으로 다음 슬라이드 호출
//1초가 1000. 3초에 한번씩 다음 슬라이드로 자동으로 넘어감 버튼을 누르는 효과를 줌
//setTimeout(nextSlideFn, 5000);
//정해진 시간에 한번만 슬라이드 넘어감. 5초 후에 실행하고 끝나는 것



function nextSlideFn() {
    cnt++;
    cnt > 3 ? cnt = 0 : cnt ;
    // 3보다 크면 0(처음슬라이드)으로 움직이는 것
    $slideWrap.style = 'left:' + (-1200*cnt) + 'px';
    $page.innerHTML = cnt+1 + '/4';
    //cnt값에 1을 더하고 innerhtml 값을 넣어주는 것

}

function prevSlideFn() {
    cnt--;
    cnt < 0 ? cnt = 3 : cnt ; 
    // 0보다 작으면 3(마지막슬라이드)으로 움직이는 것
    $slideWrap.style = 'left:' + (-1200*cnt) + 'px';
    $page.innerHTML = cnt+1 + '/4';
}


