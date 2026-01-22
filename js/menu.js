// Menu Data for Savanna Fine Dining
const menuItems = [
    {
        course: "Amuse-Bouche",
        name: "Kenyan Oyster",
        description: "Lake Turkana tilapia tartare, passion fruit mignonette, finger lime"
    },
    {
        course: "First",
        name: "Heritage Tomato",
        description: "Naivasha heirloom tomatoes, buffalo mozzarella, basil oil, aged balsamic"
    },
    {
        course: "Second",
        name: "Ocean & Earth",
        description: "Mombasa prawns, smoked avocado, citrus gel, micro herbs"
    },
    {
        course: "Third",
        name: "The Garden",
        description: "Seasonal vegetables, black garlic puree, truffle emulsion"
    },
    {
        course: "Main",
        name: "Wagyu of the Savanna",
        description: "Laikipia ranch beef, bone marrow, roasted shallots, red wine jus"
    },
    {
        course: "Pre-Dessert",
        name: "Palate Cleanser",
        description: "Diani coconut sorbet, lime zest, toasted coconut flakes"
    },
    {
        course: "Dessert",
        name: "Chocolate Safari",
        description: "Kenyan single-origin chocolate, coffee cream, gold leaf"
    }
];

// Render Menu Items
function renderMenu() {
    const menuContainer = document.getElementById('menu-container');
    if (!menuContainer) return;
    
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <span class="menu-course">${item.course}</span>
            <div class="menu-details">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            </div>
            <span class="menu-divider"></span>
        `;
        menuContainer.appendChild(menuItem);
    });
}

// Initialize menu on DOM load
document.addEventListener('DOMContentLoaded', renderMenu);
