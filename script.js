// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle Logic (Previous code remains the same)
    const themeSwitch = document.getElementById('theme-switch');
    
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        if (currentTheme === 'dark') {
            themeSwitch.checked = true;
            updateToggleLabel('Light Mode');
        }
    } else {
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        if (prefersDarkScheme.matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeSwitch.checked = true;
            updateToggleLabel('Light Mode');
            localStorage.setItem('theme', 'dark');
        }
    }
    
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            updateToggleLabel('Light Mode');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            updateToggleLabel('Dark Mode');
        }
    });
    
    function updateToggleLabel(text) {
        const toggleLabel = document.querySelector('.toggle-label');
        toggleLabel.textContent = text;
    }

    // New Section Collapse Logic
    const collapsibleSections = document.querySelectorAll('.collapsible');
    
    collapsibleSections.forEach(section => {
        const header = section.querySelector('.section-header');
        const content = section.querySelector('.section-content');
        const toggleButton = section.querySelector('.collapse-toggle');
        
        header.addEventListener('click', () => {
            const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
            
            // Toggle expanded state
            toggleButton.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle content collapse
            content.classList.toggle('collapsed');
        });
    });
});
