document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      
      // 카드 중심점 기준 마우스 상대 좌표 구하기
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // 회전 각도 제한 (숫자가 낮을수록 부드럽고 고급스럽게 까딱거림)
      const rotateX = -(y / (rect.height / 2)) * 8; 
      const rotateY = (x / (rect.width / 2)) * 8; 
      
      // 실시간으로 카드를 띄우고 회전시킴
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
      card.style.boxShadow = '0 25px 45px rgba(79, 70, 229, 0.12)';
    });

    // 마우스가 카드를 벗어나면 원상태로 아주 부드럽게 복귀 (CSS transition 연동)
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
      card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)';
    });

    // 클릭 안내
    card.addEventListener('click', () => {
      const title = card.querySelector('h3').innerText;
      alert(`[${title}] 상세 포트폴리오 준비 중입니다!`);
    });
  });
});