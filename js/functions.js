$(window).on('load', function () {
    $('#overlay').fadeOut();
});

const network = document.getElementById('network');
const software = document.getElementById('software');
const networkMegaMenu = document.getElementById('networkMenu')
const softwareMegaMenu = document.getElementById('softwareMenu')

network.addEventListener('click', () => {
    if(networkMegaMenu.style.display === 'none'){
        networkMegaMenu.style.display = "block";
        softwareMegaMenu.style.display = "none";
    } else {
        networkMegaMenu.style.display = "none";
    }
})

software.addEventListener('click', () => {
    if(softwareMegaMenu.style.display === 'none'){
        softwareMegaMenu.style.display = 'block';
        networkMegaMenu.style.display = "none";
    } else {
        softwareMegaMenu.style.display = 'none'
    }
})