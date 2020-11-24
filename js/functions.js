$(window).on('load', function () {
    $('#overlay').fadeOut();
});

const network = document.getElementById('network');
const software = document.getElementById('software');
const programs = document.getElementById('programs');
const overlay = document.getElementById('overlay');
const networkMegaMenu = document.getElementById('networkMenu')
const softwareMegaMenu = document.getElementById('softwareMenu')
const programsMegaMenu = document.getElementById('programsMenu')

const styleOverlay = (element) => {
    element.style.display = 'block'
    let attr = document.createAttribute('class');
    attr.value = 'dark-overlay';
    element.attributes.setNamedItem(attr);
}

network.addEventListener('click', () => {
    if(networkMegaMenu.style.display === 'none'){
        networkMegaMenu.style.display = "block";
        softwareMegaMenu.style.display = "none";
        programsMegaMenu.style.display = "none";
        styleOverlay(overlay);
    } else {
        networkMegaMenu.style.display = "none";
        overlay.style.display = 'none'
    }
})

software.addEventListener('click', () => {
    if(softwareMegaMenu.style.display === 'none'){
        softwareMegaMenu.style.display = 'block';
        networkMegaMenu.style.display = "none";
        programsMegaMenu.style.display = "none";
        styleOverlay(overlay);
    } else {
        softwareMegaMenu.style.display = 'none';
        overlay.style.display = 'none'
    }
})

programs.addEventListener('click', () => {
    if(programsMegaMenu.style.display === 'none'){
        programsMegaMenu.style.display = 'block';
        networkMegaMenu.style.display = "none";
        softwareMegaMenu.style.display = "none";
        styleOverlay(overlay);
    } else {
        programsMegaMenu.style.display = 'none';
        overlay.style.display = 'none'
    }
})