document.addEventListener('DOMContentLoaded', () => {
  const skillItems = document.querySelectorAll('.skill-item');
  
  // 스킬 버튼들이 한 박자씩 늦게 뚜둥! 나타나는 화려한 효과 (Stagger 효과)
  skillItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('show');
    }, index * 150);
  });
});