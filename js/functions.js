let getYear = () => {
    let year = new Date().getFullYear();
    let stamp = document.querySelector('#timeStamp');
    stamp.innerHTML = year;
}

$(window).on('load', function () {
    $('#overlay').fadeOut();
    getYear();
});