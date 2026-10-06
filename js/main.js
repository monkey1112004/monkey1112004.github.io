// ==========================================
// 🐒 Monkey Sec — Main Script
// ==========================================

// ---------- 1. Hiệu ứng fade-in khi scroll ----------
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Chỉ chạy 1 lần
        }
    });
}, observerOptions);

// Áp dụng cho các phần tử có class .fade-in (dùng chung cho mọi trang)
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Tự động thêm hiệu ứng cho card ở các trang danh sách
    document.querySelectorAll('.section-card, .list-card').forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.transitionDelay = `${index * 80}ms`;
        observer.observe(el);
    });
});

// ---------- 2. Đánh dấu menu active theo URL ----------
// (Tự động highlight menu item tương ứng trang hiện tại)
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav ul a').forEach(link => {
        const href = link.getAttribute('href');
        // So khớp đường dẫn, kể cả file trong /posts/
        if (href === currentPath ||
            (currentPath.startsWith('posts/') && href.includes(currentPath.split('/').pop()))) {
            link.classList.add('active');
        }
    });
});

// ---------- 3. Hiệu ứng gõ chữ cho logo (optional) ----------
// Bỏ comment nếu muốn logo tự gõ
/*
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    if (!logo) return;
    const text = logo.textContent.trim();
    logo.textContent = '';
    let i = 0;
    const type = () => {
        if (i < text.length) {
            logo.textContent += text[i++];
            setTimeout(type, 80);
        }
    };
    type();
});
*/

// ---------- 4. Console Easter Egg ----------
console.log(
    '%c🐒 Monkey Sec',
    'color: #58a6ff; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px #58a6ff;'
);
console.log(
    '%cChào mừng hacker! 🚀\nNếu bạn tò mò về source code, có thể bạn sẽ thích blog này đó.',
    'color: #3fb950; font-size: 13px;'
);
