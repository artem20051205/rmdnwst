function showContent(id) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
        content.style.opacity = '0';
    });
    const activeContent = document.getElementById(id);
    activeContent.classList.add('active');
    setTimeout(() => {
        activeContent.style.opacity = '1';
    }, 10);
    document.querySelector('.sidebar').classList.remove('active');
}

function toggleMenu() {
    document.querySelector('.sidebar').classList.toggle('active');
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}