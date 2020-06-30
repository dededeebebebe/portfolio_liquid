// slick
$(document).ready(function(){
    $('.slider').slick({
    autoplay: true,
    slidesToShow: 2,
    centerMode: true,
    variableWidth: true
    });
  });

// YouTube
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  ytPlayer = new YT.Player(
    'youtube',
    {
      videoId: 'GlhV-OKHecI', // YouTubeのvideoIdを入れる
      playerVars: {
        loop: 1, // ループしない
        controls: 0, // コントローラー表示
        autoplay: 1, // 自動再生オフ
        rel: 0,  // オススメ動画を表示させない
        showinfo: 0 // タイトル表示
      },
      events: {
        'onReady': onPlayerReady
      }
    }
  );
}
function onPlayerReady(event) {
  event.target.setVolume(0);
}
