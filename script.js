// Swiper
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const navLinks = document.querySelectorAll('.navbar a');

// Fungsi untuk mengganti highlight aktif
function setActiveNav(targetId) {
    navLinks.forEach(link => {
        link.classList.remove('home-active');
        if (link.getAttribute('href') === `#${targetId}`) {
            link.classList.add('home-active');
        }
    });
}

// Satu event listener untuk semua fungsi
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Mencegah efek bawaan browser

        // Ambil ID target dan teks link
        const targetId = this.getAttribute('href').substring(1);
        const linkText = this.textContent;

        // Ganti highlight aktif
        setActiveNav(targetId);

        // Smooth scrolling
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Offset untuk navbar
                behavior: 'smooth'
            });
        }

        // Cetak ke console
        console.log('Navbar clicked:', linkText);
    });
});

// Menampilkan nama kategori
document.querySelectorAll('.categories-container .bx-right-arrow-alt').forEach(arrow => {
    arrow.addEventListener('click', () => {
        const categoryName = arrow.closest('.box').querySelector('h2').textContent;
        console.log('Category clicked:', categoryName);
    });
});

// Manampilkan nama produk
document.querySelectorAll('.products-container .bx-cart-alt').forEach(cart => {
    cart.addEventListener('click', () => {
        const productName = cart.closest('.box').querySelector('h2').textContent;
        console.log('Product added to cart:', productName);
    });
});

// Menampilkan Sosial Media
document.querySelectorAll('.social a').forEach(social => {
    social.addEventListener('click', (e) => {
        e.preventDefault(); // Mencegah link default
        const platform = social.querySelector('i').classList[1]; // Ambil nama kelas ikon
        console.log('Social media clicked:', platform.replace('bxl-', ''));
    });
});

// Untuk Categories di footer
const categoryLinks = document.querySelectorAll('.footer-box:nth-child(2) a');
categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Mencegah aksi default link
        const categoryText = link.textContent;
        console.log('Category clicked:', categoryText);
    });
});

// Untuk Useful Links di footer
const usefulLinks = document.querySelectorAll('.footer-box:nth-child(3) a');
usefulLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Mencegah aksi default link
        const usefulText = link.textContent;
        console.log('Useful link clicked:', usefulText);
    });
});

// Untuk Mengirim Email
const arrow = document.querySelector('.footer-box form .bx-arrow-back');
const emailInput = document.querySelector('.footer-box form input');

arrow.addEventListener('click', () => {
    const email = emailInput.value;
    console.log('Email entered:', email);
});