function Router(node) {
    this.node = node;
}

Router.prototype.start = function() {
    window.addEventListener('hashchange', (e) => {
          this.render();
    });
}

Router.prototype.activeRoute = function() {
    let w = window.location.hash;

    let newWindow = w.split('#').join("");

    return newWindow;
}

Router.prototype.render = function() {
    this.node.innerHTML = "";
    
    let newRoute = this.activeRoute();

    let p = `<p>${newRoute}<p/>`;

    this.node.append(p);

    console.log('rendering')
}