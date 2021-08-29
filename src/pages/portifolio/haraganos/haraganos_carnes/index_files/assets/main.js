var emblaNode = document.getElementById("embla");
var embla;

function abrirembla(index){
    emblaNode.classList.remove("d-none");
    var options = {
        containScroll: 'trimSnaps',
        startIndex: index
      };
    embla = EmblaCarousel(emblaNode, options);

}
function fechaembla(){
    if(embla) {embla.destroy();}
    emblaNode.classList.add("d-none");
}

/*lazy load settings*/
var fastlazyload = new LazyLoad({
    elements_selector: ".fastlazy"
});
setTimeout(function () {
    fastlazyload.loadAll();
}, 4000);


var itenstelacheialazyload = new LazyLoad({
    elements_selector: ".itenstelacheia"
});


