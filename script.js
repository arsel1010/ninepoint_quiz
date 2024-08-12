// Define the menu items
const menuItems = [
    "Section 1",
    "Section 2",
    "Section 3",
    "Section 4",
    "Section 5",
    "Section 6"
];

// Track the menu's open/closed state
let isMenuOpen = false;

/**
 * Toggle the menu's visibility and update the icon
 */
function toggleMenu() {
    const menuItemsElement = document.getElementById('menuItems');
    const menuIcon = document.getElementById('menuIcon');
    
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        menuItemsElement.style.display = 'block';
        menuIcon.textContent = 'x'; // Change to X when menu is open
    } else {
        menuItemsElement.style.display = 'none';
        menuIcon.textContent = '☰'; // Change back to ☰ when menu is closed
    }
}

/**
 * Dynamically create menu items based on the menuItems array
 */
function createMenuItems() {
    const menuItemsElement = document.getElementById('menuItems');
    menuItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.textContent = item;
        div.className = 'menu-item';
        div.addEventListener('click', () => scrollToSection(index + 1));
        menuItemsElement.appendChild(div);
    });
}

/**
 * Scroll to a specific section of the page
 * @param {number} sectionNumber - The number of the section to scroll to
 */
function scrollToSection(sectionNumber) {
    const section = document.getElementById(`section${sectionNumber}`);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        // Menu remains open to allow for further navigation
    }
}

// Initialize the menu when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menuIcon');
    menuIcon.addEventListener('click', toggleMenu);
    
    createMenuItems();
    
    // Initially hide the menu items
    document.getElementById('menuItems').style.display = 'none';
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    const menuItems = document.getElementById('menuItems');
    const menuIcon = document.getElementById('menuIcon');
    
    if (isMenuOpen && !menuItems.contains(event.target) && event.target !== menuIcon) {
        toggleMenu();
    }
});

// Set up overlay interaction
document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('itemSelect');
    const overlay = document.getElementById('overlay');
    const overlayTitle = document.getElementById('overlayTitle');
    const closeBtn = document.getElementById('closeBtn');

    // Show overlay when an item is selected
    select.addEventListener('change', function() {
        if (this.value) {
            overlayTitle.textContent = this.options[this.selectedIndex].text;
            overlay.style.display = 'block';
        }
    });

    // Close overlay when close button is clicked
    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        select.value = ''; // Reset select to default option
    });

    // Close overlay when clicking outside of it
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            overlay.style.display = 'none';
            select.value = ''; // Reset select to default option
        }
    });
});

//overlay interaction
document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('itemSelect');
    const overlay = document.getElementById('overlay');
    const overlayTitle = document.getElementById('overlayTitle');
    const closeBtn = document.getElementById('closeBtn');

    select.addEventListener('change', function() {
        if (this.value) {
            overlayTitle.textContent = this.options[this.selectedIndex].text;
            overlay.style.display = 'block';
        }
    });

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        select.value = ''; // Reset select to default option
    });

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            overlay.style.display = 'none';
            select.value = ''; // Reset select to default option
        }
    });
});