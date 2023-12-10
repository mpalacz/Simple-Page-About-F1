function dniDoWyscigu(dataWyscigu, idWyscigu){
    var dzisiaj = new Date();
    var iloscDni = parseInt((dataWyscigu.getTime() - dzisiaj.getTime()) / 86400000);
    if(iloscDni < 0){
        document.getElementById(idWyscigu).innerHTML = "Wyścig już się odbył.";
    }
    else if(iloscDni === 0){
        document.getElementById(idWyscigu).innerHTML = "WYŚCIG JEST DZISIAJ!!!";
    }else{
        document.getElementById(idWyscigu).innerHTML = "Do wyścigu zostało: " + iloscDni + " dni";
    }
}

dniDoWyscigu(new Date(2021,2,28),"idBahrain");
dniDoWyscigu(new Date(2021,3,18),"idER");
dniDoWyscigu(new Date(2021,4,2),"idPortugalia");
dniDoWyscigu(new Date(2021,4,9),"idHiszpania");
dniDoWyscigu(new Date(2021,4,23),"idMonaco");
dniDoWyscigu(new Date(2021,5,6),"idAzerbejdzan");
dniDoWyscigu(new Date(2021,5,13),"idKanada");
dniDoWyscigu(new Date(2021,5,27),"idFrancja");
dniDoWyscigu(new Date(2021,6,4),"idAustria");
dniDoWyscigu(new Date(2021,6,18),"idWB");
dniDoWyscigu(new Date(2021,7,1),"idWegry");
dniDoWyscigu(new Date(2021,7,29),"idBelgia");
dniDoWyscigu(new Date(2021,8,5),"idHolandia");
dniDoWyscigu(new Date(2021,8,12),"idWlochy");
dniDoWyscigu(new Date(2021,8,26),"idRosja");
dniDoWyscigu(new Date(2021,9,3),"idSingapur");
dniDoWyscigu(new Date(2021,9,10),"idJaponia");
dniDoWyscigu(new Date(2021,9,24),"idUSA");
dniDoWyscigu(new Date(2021,9,31),"idMeksyk");
dniDoWyscigu(new Date(2021,10,7),"idBrazylia");
dniDoWyscigu(new Date(2021,10,21),"idAustralia");
dniDoWyscigu(new Date(2021,11,5),"idAR");
dniDoWyscigu(new Date(2021,11,12),"idAD");