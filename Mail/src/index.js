//console.log('its working');




const g = window.addEventListener('DOMContentLoaded', (event) => {
    //console.log('its working');

    let sideBar = document.querySelector('.sidebar-nav');
    let domCon = document.querySelector('.content');

    sideBar.addEventListener('click', (e) => {
        let li = e.target;

        let liValue = li.value;

        window.location.hash = liValue;
    });

    let router = new Router(domCon)
    router.start();
});