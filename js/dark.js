const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        const toggleSlider = document.querySelector('.toggle-slider');

        // Carregar tema salvo
        const savedTheme = localStorage.getItem('theme') || 'light';
        body.className = savedTheme;
        updateIcon(savedTheme);

        themeToggle.addEventListener('click', () => {
            const currentTheme = body.classList.contains('light') ? 'light' : 'dark';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            body.className = newTheme;
            localStorage.setItem('theme', newTheme);
            updateIcon(newTheme);
        });

        function updateIcon(theme) {
            toggleSlider.textContent = theme === 'light' ? '☀️' : '🌙';
        }