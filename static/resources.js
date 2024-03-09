window.addEventListener('scroll', function () {
    var sidebarToggler = document.querySelector('.tutorialSidebar');
    var footer = document.querySelector('footer');
    var footerTop = footer.getBoundingClientRect().top;

    // Check if footer is in the viewport
    if (footerTop <= window.innerHeight) {
        sidebarToggler.classList.add('animateSidebarToggler');
    } else {
        sidebarToggler.classList.remove('animateSidebarToggler');
    }

    if (footerTop > window.innerHeight) {
        sidebarToggler.classList.add('animateSidebarTogglerReverse');
    } else {
        sidebarToggler.classList.remove('animateSidebarTogglerReverse');
    }
});

const backdrop = document.querySelector('.backdrop');
const tableOfContents = document.querySelector('.tutorialSidebar h4');

const toggleSidebar = document.getElementById('toggleSidebar');
const Sidebar = document.getElementById('Sidebar');
let sidebarTogglers = document.querySelectorAll(".sidebarTogglers")

const toggleButton = document.getElementById('toggleButton');

let rotation = 45;

function SidebarToggling(Sidebar) {
    // Sidebar.classList.toggle('animateSidebarContent');
    if (Sidebar.classList.contains('animateSidebarContent')) {
        // If the class is present, remove it
        Sidebar.classList.remove('animateSidebarContent');
        backdrop.style.display = 'none';
        tableOfContents.style.display = 'flex';
    } else {
        // If the class is not present, add it
        Sidebar.classList.add('animateSidebarContent');
        backdrop.style.display = 'block';
        tableOfContents.style.display = 'none';
    }
    rotation += 180;
    toggleButton.style.transform = `rotate(${rotation}deg)`;
}

toggleSidebar.addEventListener('click', function () {
    SidebarToggling(Sidebar);
});

backdrop.addEventListener('click', function () {
    SidebarToggling(Sidebar);
});

sidebarTogglers.forEach(function (toggler) {
    toggler.addEventListener('click', function () {
        SidebarToggling(Sidebar);
    });
});
