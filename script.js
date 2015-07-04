function toca_som () {

    lista = new
    Array('here_we_go','push_the_tempo','the_bear_and_the_maiden_fair',
          'toemksa','dont_drag_me_down','wake_me_up','levels');

    // Selecionando um aleatoriamente
    escolhido   = Math.round((Math.random() * 123491)) % lista.length;

    var musica  = "./music/" +lista[escolhido] + ".ogg";
    var play    = document.getElementById('som');
    var audio   = document.getElementById('audiotag');

    play.src    = musica;
    audio.load();

    //// Tratando o browser:
    //reg1 = new RegExp("firefox","gi");
    //reg2 = new RegExp("chrom","gi");

    //console.log("Resultado do userAgent: " + navigator.userAgent);
    //// Se for o ffox:
    //if (!reg1.test(navigator.userAgent) ||!reg2.test(navigator.userAgent)) {

    //    alert("Provavelmente nao vai tocar som de fundo no firefox! Se quiser som use o chrome pq dae eh garantido");
    //    document.getElementById("mp3").innerHTML="\
    //        <embed type=\"application/x-mplayer2\"\
    //        src=\"music/"+lista[escolhido]+".mp3\"\
    //        width=0\
    //        height=0\
    //        loop=\"true\"\
    //        name=\"myMusic\"\
    //        id=\"myMusic\"\
    //        autostart=\"true\">\
    //        <noembed>\
    //        <bgsound src=\"music/"+lista[escolhido]+".mp3\"\
    //        loop=\"true\"/>\
    //        </noembed>";
    //}

    //// IE && chrom{e,ium}
    //else {

    //    document.getElementById("mp3").innerHTML ="\
    //        <embed src=\"music/"+lista[escolhido]+".mp3\"\
    //        autostart=\"true\"\
    //        hidden=\"true\"\
    //        loop=\"true\"\
    //        name=\"myMusic\"\
    //        id=\"myMusic\">";
    //}
}

function desenha_pagina () {

    //toca_som();
    traduiz();
}

function traduiz () {

    reg = new RegExp("isto","gi");
    headerElement = document.getElementById("maHeader");
    paragraphElement = document.getElementById("toTranslate");

    if (reg.test(headerElement.innerHTML) || headerElement.innerHTML == "") {
        headerElement.innerHTML="Meditate on this:";
        paragraphElement.innerHTML = "<p align=\"center\">\
        \"Morpheus: The Matrix is a system, Neo. That system is our enemy.</br>\
        But when you're inside, you look around. What do you\
        see&#63;</br></br>Business men, teachers, lawyers, carpenters. The very\
        minds of the people we are trying to save.</br></br>But until we do,\
        these people are still a part of that system, and that makes them our\
        enemy.</br></br>You have to understand, most of these people are not\
        ready to be unplugged.</br>And many of them are so inured, so\
        hopelessly dependent on the system </br>that they will fight to protect\
        it.\" </p>";
    }

    else {
        headerElement.innerHTML = "Medite nisto:";
        paragraphElement.innerHTML = "<p align=\"center\">\
        \"Morpheus: A Matrix &eacute; um sistema, Neo. Esse sistema &eacute;\
        nosso inimigo.</br> Mas quando voc&ecirc; est&aacute; dentro,\
        voc&ecirc; olha ao redor. O que voc&ecirc;\
        v&ecirc;&#63;</br></br>Empres&aacute;rios, Professores, Advogados,\
        Carpinteiros. As pr&oacute;prias mentes das pessoas que estamos\
        tentando salvar.</br></br>Mas at&eacute; conseguirmos, essas pessoas\
        continuam sendo parte deste sistema, e isso faz delas nosso\
        inimigo.</br></br>Voc&ecirc; precisa entender, a maioria destas pessoas\
        n&atilde;o est&aacute; preparada para ser desconectada.</br>E muitas\
        delas est&atilde;o t&atilde;o acostumadas, t&atilde;o desesperadamente\
        dependentes do sistema</br>que elas ir&atilde;o lutar para\
        proteg&ecirc;-lo.\" </p>";
    }

}
