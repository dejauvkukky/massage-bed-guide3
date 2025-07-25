// 1. 날짜/시간 표시
function updateDateTime() {
  const now = new Date();
  const day = now.toLocaleDateString('ko-KR');
  const time = now.toLocaleTimeString('ko-KR', { hour12: false });
  document.getElementById('datetime').textContent = `${day} ${time}`;
}
setInterval(updateDateTime, 1000);
updateDateTime();

// 2. 메뉴버튼 클릭시 팝업 열기
const menuBtns = document.querySelectorAll('.menu-btn');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupVideo = document.getElementById('popupVideo');

menuBtns.forEach(btn => {
  btn.addEventListener('click', function(){
    popupTitle.textContent = this.textContent;
    popupVideo.currentTime = 0;
    popupVideo.muted = false; // 팝업 영상 소리 켜기
    popupVideo.play();
    popup.classList.add('active');
  });
});

function closePopup() {
  popup.classList.remove('active');
  popupVideo.pause();
}

popup.addEventListener('click', function(e){
  if(e.target === popup) closePopup();
});

// 3. PWA 서비스워커 등록
if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js');
  });
}
