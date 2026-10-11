// 鹈鹕测试网页 - 交互脚本

document.addEventListener('DOMContentLoaded', () => {
  // 滚动动画 - Intersection Observer
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // 为各区域添加滚动动画
  const animatableElements = document.querySelectorAll(
    '.info-card, .fact-item, .gallery-card, .hero-content, .hero-illustration'
  );
  animatableElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // 导航栏滚动效果
  let lastScroll = 0;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }

    lastScroll = currentScroll;
  });

  // 趣味知识卡片点击效果
  const factItems = document.querySelectorAll('.fact-item');
  factItems.forEach(item => {
    item.addEventListener('click', () => {
      item.style.borderLeftColor = '#ff7f7f';
      setTimeout(() => {
        item.style.borderLeftColor = '#1a8a9e';
      }, 500);
    });
  });

  // 平滑滚动 - 导航链接
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // 控制台彩蛋
  console.log('%c🦢 欢迎来到鹈鹕测试网页！', 'font-size: 20px; color: #1a8a9e; font-weight: bold;');
  console.log('%c你知道鹈鹕的喉囊可以容纳 13 升水吗？', 'font-size: 14px; color: #6b7b8d;');
});
