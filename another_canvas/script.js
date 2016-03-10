/*
# vim: foldmethod=manual
*/
// Conjunto de scripts para o trabalho 1
function abre_link (pag) {

    // Testando uma funcionalidade necessaria
    var req = window.ActiveXObject ?
                new ActiveXObject("Microsoft.XMLHTTP") :
                new XMLHttpRequest();

    if (!req) {
      alert('Atualize seu navegador!');
    }

    // Passando o link completo:
    pag = window.location.href.replace('#','') + '/' + pag;

    req.open("GET", pag, false);
    req.send(null);

    var div_obj = document.getElementById("conteudo");
    div_obj.innerHTML = req.responseText;
}

function desenha (canvas, cor) {

    var c=document.getElementById(canvas);
    var ctx=c.getContext("2d");
    ctx.fillStyle="#00ee00";
    ctx.fillRect(0,0,150,75);
}

function mostraCoordenadas(e) {
    var x,y;
    if(e.offsetX) {
        x = e.offsetX;
        y = e.offsetY;
    }
    else if(e.layerX) {
        x = e.layerX;
        y = e.layerY;
    }
    //var canvas = document.getElementById("canvas");
    //var canv = document.getElementById("coord").innerHTML = "Coordenadas: "+x+", "+y;
    document.getElementById("coord").innerHTML = "Coordenadas: "+x+", "+y;
}

function limpaCoordenadas() {
    document.getElementById("coord").innerHTML = "Coordenadas: ";
}

function inicia_canvas () {

    var canvas = document.getElementById("quadro");
    canvas.addEventListener('mousemove', mostraCoordenadas(event), false);
    canvas.addEventListener('mouseout', limpaCoordenadas(), false);
}
