document.addEventListener('DOMContentLoaded', () => {
  const contactBox = document.querySelector('.contact-box');
  const contactForm = document.getElementById('contact-form');

  // [기존] 3D 입체 효과는 그대로 유지
  if (contactBox) {
    contactBox.addEventListener('mousemove', (e) => {
      const rect = contactBox.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((rect.height / 2 - y) / (rect.height / 2)) * 3;
      const rotateY = -((rect.width / 2 - x) / (rect.width / 2)) * 3;
      contactBox.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    contactBox.addEventListener('mouseleave', () => {
      contactBox.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
    });
  }

  // 🌟 [수정] 실제 이메일 전송 기능 활성화
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // 버튼을 여러 번 누르지 못하도록 텍스트 변경 및 잠금
    const submitBtn = contactForm.querySelector('button');
    submitBtn.innerText = "Sending...";
    submitBtn.disabled = true;

    // 템플릿의 {{name}}, {{email}}, {{message}}와 매칭될 데이터 수집
    const templateParams = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };

    // EmailJS 전송 (본인의 Service ID와 Template ID로 교체하세요!)
    emailjs.send('service_fjbcpcr', 'template_b1qssk3', templateParams)
      .then(() => {
        alert('메시지가 성공적으로 내 이메일로 전송되었습니다! 🚀');
        contactForm.reset(); // 입력창 비우기
      })
      .catch((error) => {
        alert('전송에 실패했습니다. 다시 시도해 주세요. 오류: ' + JSON.stringify(error));
      })
      .finally(() => {
        // 버튼 상태 원상복구
        submitBtn.innerHTML = `<span>Message Send</span><svg class="send-icon" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>`;
        submitBtn.disabled = false;
      });
  });
});