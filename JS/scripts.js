document.addEventListener('DOMContentLoaded', () => {
  
  const hero = document.querySelector('.hero');
  
  if (hero) {
    // ==========================================
    // 마우스 움직임에 반응하는 실시간 radial 그라데이션 연출
    // ==========================================
    hero.addEventListener('mousemove', (e) => {
      // 현재 마우스 커서의 위치를 브라우저 창 기준 백분율(%)로 계산
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      
      // 마우스 좌표를 중심으로 조명이 퍼져나가는 듯한 효과 연출
      hero.style.background = `radial-gradient(circle at ${x}% ${y}%, #0ea5e9 0%, #4f46e5 100%)`;
    });

    // 마우스가 화면 밖으로 나가면 원래 선형 그라데이션으로 부드럽게 복귀
    hero.addEventListener('mouseleave', () => {
      hero.style.transition = 'background 0.5s ease';
      hero.style.background = 'linear-gradient(135deg, #4f46e5 0%, #0ea5e9 100%)';
    });
  }

});