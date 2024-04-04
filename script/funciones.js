function divActivo(mostrar, nombre) {
    if (mostrar) {
        if (document.getElementById(nombre) != null)
            document.getElementById(nombre).style.display = 'block';
    } else {
        if (document.getElementById(nombre) != null)
            document.getElementById(nombre).style.display = 'none';
    }
}

function loaderText() {
    /*document.getElementById("imagen").innerHTML = "<img src=\"images/loading.gif\" align=\"'center'\" />";*/
    document.getElementById('text').innerHTML = "Leyendo la Informaci&oacute;n <br> Por Favor Espere..."
    setTimeout("document.getElementById('text').innerHTML = 'Procesando la Informaci&oacute;n <br> Por Favor Espere...'", 30000);
    setTimeout("document.getElementById('text').innerHTML = 'Generando  Informaci&oacute;n <br> Por Favor Espere...'", 40000);
}

function loader(mostrar) {
    if (mostrar) {
        if (document.getElementById("proceso") != null) {
            document.getElementById("proceso").style.height = document.body.clientHeight + 15 + 'px';
            document.getElementById("proceso").style.display = 'block';
            document.getElementById("procesoInt").style.display = 'block';
            var daty = (parseInt(document.getElementById("marco").offsetHeight) / 2) - (parseInt(document.getElementById("procesoInt").offsetHeight) / 2);
            document.getElementById("procesoInt").style.top = daty + 'px';
            var datx = (parseInt(document.body.clientWidth) / 2) - ((parseInt(document.getElementById("procesoInt").offsetWidth) / 2) - 15);
            document.getElementById("procesoInt").style.left = datx + 'px';
            document.getElementById("proceso").style.display = 'block';
            loaderText();
        }
    } else {
        if (document.getElementById("proceso") != null)
            document.getElementById("proceso").style.display = 'none';
            document.getElementById("procesoInt").style.display = 'none';
    }
}

function info(mostrar) {
    if (mostrar) {
        if (document.getElementById("informacion") != null) {
            $("informacion").style.height = $("marco").offsetHeight + 'px';
            $("informacion").style.display = 'block';
            //$("procesoInt").style.display = 'block';
            //var daty= (parseInt($("marco").offsetHeight)/2) - (parseInt($("procesoInt").offsetHeight)/2);
            //$("procesoInt").style.top = daty+'px';
            //var datx = (parseInt($("marco").offsetWidth)/2) - ((parseInt($("procesoInt").offsetWidth)/2)-175);
            //$("procesoInt").style.left = datx+'px';
            document.getElementById("informacion").style.display = 'block';
            loaderText();
        }
    } else {
        if (document.getElementById("informacion") != null)
            document.getElementById("informacion").style.display = 'none';
        //document.getElementById("procesoInt").style.display = 'none';
    }
}

function impR() {
    $("btn").style.display = "none";
    window.print();
}

function getServ() {
    var marcado = 10;
    var i = 0;
    marcado = $("servicios").value;
    return marcado;
}

function limpiarCampos(ser) {
    $("ofnaB").value = "";
    $("servicios").value = "";
    if (ser == 1) {//Datos Reporte Mensual
        $("anio").value = "";
        $("mes").value = "";
    } else {////////Datos Reporte Diario
        $("fecha").value = "";
        $("theDate").value = "";
    }
}

function valCodigoTj() {
    var cod = ($("referencia").value).toString();
    var constante = "09437";
    var impD = 0;
    var resp = false;
    var repImp = null;
    var constanteRef = null;
    var anioRef = null;
    var unidades = null;
    var cen = null;
    var f = new Date();
    var anio = f.getFullYear();

    constanteRef = cod.substring(0, 5);
    anioRef = cod.substring(5, 9);
    unidades = cod.substring(9, 13);
    cen = cod.substring(13, 15);
    impD = unidades.toInt();

    if (constanteRef != constante) {
        $("referencia").value = "";
        alert("Error en la Validacion de la Referencia\n      Verifica los Datos Ingresados(1)");
        resp = false;
    } else if (anioRef != anio) {
        $("referencia").value = "";
        alert("Error en la Validacion de la Referencia\n      Verifica los Datos Ingresados(2)");
        resp = false;
    } else if (unidades == "0025") {
        //} else if (unidades == "0050" || unidades == "0030") {
        repImp = impD.toString() + "." + cen;

        $("CmpImporteC").value = repImp;
        $("labelDonacion").innerHTML = repImp;
        $("labelFolioC").innerHTML = $("folio").value;
        $("CmpFolTj").value = $("folio").value;
        resp = true;
    } else {
        $("referencia").value = "";
        alert("Error en la Validacion de la Referencia\n Verifica los Datos Ingresados(3)\n \n Solo se Aceptaran Tarjetas de $25.00");
        resp = false;
    }

    if (cen != "00") {
        $("referencia").value = "";
        //$("labelDonacion1").value = "";
        alert("Error en la Validacion de la Referencia\n Verifica los Datos Ingresados(4)");
        resp = false;
    }

    return resp;
}

function valCodigo() {
    var cod = ($("codigoStick").value).toString();
    var constante = "09437";
    var impD = 0;
    var resp = false;
    var repImp = null;
    var constanteRef = null;
    var anioRef = null;
    var unidades = null;
    var cen = null;
    var f = new Date();
    var anio = f.getFullYear();
    constanteRef = cod.substring(0, 5);
    anioRef = cod.substring(5, 9);
    unidades = cod.substring(9, 13);
    cen = cod.substring(13, 15);
    impD = unidades.toInt();
    if (constanteRef != constante) {
        $("codigoStick").value = "";
        alert("Error en la Validacion de Codigo\n Verifica los Datos Ingresados(1)");
        resp = false;
    } else if (anioRef != anio) {
        $("codigoStick").value = "";
        alert("Error en la Validacion de Codigo\n Verifica los Datos Ingresados(2)");
        resp = false;
    } else if (unidades == "0025") {
        //} else if (unidades == "0050" || unidades == "0030") {
        repImp = impD.toString() + "." + cen;
        $("CmpImporteC").value = repImp;
        $("labelDonacion").innerHTML = repImp;
        $("labelFolioC").innerHTML = $("folio").value;
        resp = true;
    } else {
        $("codigoStick").value = "";
        alert("Error en la Validacion de Codigo\n Verifica los Datos Ingresados(3)\n \n Solo se Aceptaran Stickers de $25.00");
        resp = false;
    }
    if (cen != "00") {
        $("codigoStick").value = "";
        //$("labelDonacion1").value = "";
        alert("Error en la Validacion de Codigo\n Verifica los Datos Ingresados(4)");
        resp = false;
    }
    return resp;
}

function valCodigoSticker21() {
    var cod = ($("codigoStick21").value).toString();
    var constante = "09437";
    var impD = 0;
    var resp = false;
    var repImp = null;
    var constanteRef = null;
    var anioRef = null;
    var unidades = null;
    var cen = null;
    var f = new Date();
//////////////////////////////////    var anio = f.getFullYear(); //Descomentar esta linea para validacion de año
    var anio = "2018";
    constanteRef = cod.substring(0, 5);
    anioRef = cod.substring(5, 9);
    unidades = cod.substring(9, 13);
    cen = cod.substring(13, 15);
    impD = unidades.toInt();
    if (constanteRef != constante) {
        $("codigoStick21").value = "";
        alert("Error en la Validacion de Codigo\n Verifica los Datos Ingresados(1)");
        resp = false;
    }
/////////////////////////////////////////Descomentar esta parte para habilitar la validacion del año    
/*else if (anioRef != anio) {
        $("codigoStick21").value = "";
        alert("Error en la Validacion de Codigo\n Verifica los Datos Ingresados(2)");
        resp = false;
    }*/ else if (unidades == "0025") {
        //} else if (unidades == "0050" || unidades == "0030") {
        repImp = impD.toString() + "." + cen;
        $("CmpImporteC").value = repImp;
        $("labelDonacion").innerHTML = repImp;
        $("labelFolioC").innerHTML = $("folio").value;
        resp = true;
    } else {
        $("codigoStick21").value = "";
        alert("Error en la Validacion de Codigo\n Verifica los Datos Ingresados(3)\n \n Solo se Aceptaran Stickers de $25.00");
        resp = false;
    }
    if (cen != "00") {
        $("codigoStick21").value = "";
        //$("labelDonacion1").value = "";
        alert("Error en la Validacion de Codigo\n Verifica los Datos Ingresados(4)");
        resp = false;
    }
    return resp;
}

function valImporte(cmp) {
    var resp = false;
    if (cmp === "importe") {
        var cod = document.getElementById("importe");
        var codC = document.getElementById("importeC");
    } else if (cmp === "impBote") {
        var cod = document.getElementById("impBote");
        var codC = document.getElementById("impBoteC");
    }
    if (cod.value != codC.value) {
        alert("Los Importes Ingresados son Diferentes");
        cod.value = "";
        codC.value = "";
        cod.style.backgroundColor = "white";
        //cod.style.border='2px ridge #006400';
        codC.style.backgroundColor = "white";
        //codC.style.border='2px ridge #006400';
    } else if (cod.value < 5.00) {
        alert("El Importes MINIMO a Ingresar es de $5.00 \n       Ingrese un monto Mayor o Igual");
        cod.value = "";
        codC.value = "";
        cod.style.backgroundColor = "white";
        //cod.style.border='2px ridge #006400';
        codC.style.backgroundColor = "white";
        //codC.style.border='2px ridge #006400';
    } else {
        //$("labelDonacion1").value = cod.value;
        //$("labelDonacion").innerHTML = cod.value;
        resp = true;
    }
    return resp;
}

function valFolioTj() {
    var resp = false;
    var fol1 = document.getElementById("folio");
    var fol2 = document.getElementById("folio2");
    if (fol1.value != fol2.value) {
        alert("Los FOLIOS Ingresados son Diferentes");
        fol1.value = "";
        fol2.value = "";
        fol1.style.backgroundColor = "white";
        //cod.style.border='2px ridge #006400';
        fol2.style.backgroundColor = "white";
        //codC.style.border='2px ridge #006400';
    } else {
        //$("labelDonacion1").value = cod.value;
        //$("labelDonacion").innerHTML = cod.value;
        resp = true;
    }
    return resp;
}

function valFolioStic() {
    var resp = false;
    var fol1 = document.getElementById("folioStick");
    var fol2 = document.getElementById("folio2Stick");
    if (fol1.value !== fol2.value) {
        alert("Los FOLIOS Ingresados son Diferentes");
        fol1.value = "";
        fol2.value = "";
        fol1.style.backgroundColor = "white";
        //cod.style.border='2px ridge #006400';
        fol2.style.backgroundColor = "white";
        //codC.style.border='2px ridge #006400';
    } else {
        //$("labelDonacion1").value = cod.value;
        //$("labelDonacion").innerHTML = cod.value;
        resp = true;
    }
    return resp;
}

function valFolioStic21() {
    var resp = false;
    var fol1 = document.getElementById("folioStick21");
    var fol2 = document.getElementById("folio2Stick21");
    if (fol1.value !== fol2.value) {
        alert("Los FOLIOS Ingresados son Diferentes");
        fol1.value = "";
        fol2.value = "";
        fol1.style.backgroundColor = "white";
        //cod.style.border='2px ridge #006400';
        fol2.style.backgroundColor = "white";
        //codC.style.border='2px ridge #006400';
    } else {
        //$("labelDonacion1").value = cod.value;
        //$("labelDonacion").innerHTML = cod.value;
        resp = true;
    }
    return resp;
}

function valPago(div) {
    if ($("mtd") !== null) {
        $("mtd").value = "";
    }
    limpiar("form1");
    if (div === "ref") {
        if ($("referencia") !== null) {
            $("referencia").value = "";
        }
        if ($("folio") !== null) {
            $("folio").value = "";
            $("folio").setStyle('background-color', 'white');
        }
        if ($("folio2") !== null) {
            $("folio2").value = "";
            $("folio2").setStyle('background-color', 'white');
        }
        $("selector").value = 1;
        divActivo(false, "divImp");
        divActivo(false, "divBot");
        divActivo(false, "divStic");
        divActivo(false, "divStic21");
        divActivo(true, "divRef");
        $("referencia").focus();
    } else if (div === "imp") {
        if ($("importe") !== null) {
            $("importe").value = "";
        }
        if ($("importeC") !== null) {
            $("importeC").value = "";
        }
        $("selector").value = 2;
        divActivo(false, "divRef");
        divActivo(false, "divBot");
        divActivo(false, "divStic");
        divActivo(false, "divStic21");
        $("importe").style.backgroundColor = "#FFFFFF";
        $("importeC").style.backgroundColor = "#FFFFFF";
        divActivo(true, "divImp");
        $("importe").focus();
    } else if (div === "bot") {
        if ($("numBote") !== null) {
            $("numBote").value = "";
        }
        if ($("impBote") !== null) {
            $("impBote").value = "";
        }
        if ($("impBoteC") !== null) {
            $("impBoteC").value = "";
        }
        $("selector").value = 3;
        divActivo(false, "divRef");
        divActivo(false, "divImp");
        divActivo(false, "divStic");
        //$("importe").style.backgroundColor = "#FFFFFF";
        //$("importeC").style.backgroundColor = "#FFFFFF";
        divActivo(false, "divStic21");
        divActivo(true, "divBot");
        $("numBote").focus();
    } else if (div === "stic") {
        $("selector").value = 4;
        divActivo(false, "divImp");
        divActivo(false, "divBot");
        divActivo(false, "divRef");
        divActivo(false, "divStic21");
        divActivo(true, "divStic");
        $("codigoStick").focus();
    }  else if (div === "stic21") {
        $("selector").value = 5;
        divActivo(false, "divImp");
        divActivo(false, "divBot");
        divActivo(false, "divRef");
        divActivo(false, "divStic");
        divActivo(true, "divStic21");
        $("codigoStick21").focus();
    } else {
        alert("Debe Seleccionar una Opcion");
    }
}

function infoCaso(caso, opc) {
    if (opc == true) {
        if (caso == "caso1") {
            //document.getElementById("infoCaso").style. ;
            $("infoArgumento").innerHTML = "<br>No hay donativos peque&ntilde;os. Telet&oacute;n de peso en peso llega a su meta.";
        } else if (caso == "caso2") {
            //$("infoCaso").innerHTML = "CLIENTE: </br></br>Para que doy mi donativo, si el dinero se lo quedan las empresas o Televisa?";
            $("infoArgumento").innerHTML = "<br>No es as&iacute;, todo lo que se recauda entra directo a la cuenta de Fundaci&oacute;n Telet&oacute;n "
                    + "y podr&aacute;s solicitar tu recibo deducible con tu comprobante de pago "
                    + "para que est&eacute;s seguro de que la Fundaci&oacute;n recibe el dinero.";
        } else if (caso == "caso3") {
            //$("infoCaso").innerHTML = "CLIENTE: </br></br>y puedo hacer un donativo m&aacute;s alto?";
            $("infoArgumento").innerHTML = "<br>Recuerda a tus clientes que les avisen a sus amigos y familiares "
                    + "que en &eacute;sta Oficina Telegr&aacute;fica se est&aacute;n recibiendo donativos para Telet&oacute;n.";
        } else if (caso == "caso4") {
            //$("infoCaso").innerHTML = "CLIENTE: </br></br>Las empresas siempre llegan con su chequesote.";
            $("infoArgumento").innerHTML = "<br><br>El 70% lo dona la sociedad y el 30% lo donan las empresas.";
        } else if (caso == "caso5") {
            //$("infoCaso").innerHTML = "CLIENTE: </br></br>No gracias, yo dono el mismo d&iacute;a del Telet&oacute;n.";
            $("infoArgumento").innerHTML = "<br>No digas que mejor te esperas a donar el d&iacute;a del Telet&oacute;n "
                    + "porque a lo mejor ma&ntilde;ana ya no puedes donar."
                    + "<br><br>Lo que has de hacer, &#161;hazlo ahora!";
        } else if (caso == "caso6") {
            //$("infoCaso").innerHTML = "CLIENTE: </br></br>Yo no creo en la causa de Fundaci&oacute;n Telet&oacute;n, "
            //                            + "</br>no conozco a nadie que haya sido apoyado por ellos.";
            $("infoArgumento").innerHTML = "La fundaci&oacute;n tiene 21 Centros de Rehabilitaci&oacute;n "
                    + "en donde apoyan a m&aacute;s de 30 mil ni&ntilde;os al a&ntilde;o. "
                    + "<br><br>Uno nunca sabe cu&aacute;ndo pueda necesitar de ellos, "
                    + "asi que ahora es tiempo de ayudar a quien m&aacute;s lo necesita.";
        }
    } else {
        //$("infoCaso").innerHTML = "";
        $("infoArgumento").innerHTML = "<br><br>GRACIAS POR LEER NUESTRA INFORMACION";
    }
}

function pasarDonacion(opc) {
    if (opc == true) {
        divActivo(true, "informacion");
    } else {
        divActivo(false, "informacion");
    }
}

function correccionAnio() {
    var ref = $("referencia").value;
    if (ref.length == 15) {
        var res = "";
        var res1 = ref.substring(0, 8);
        var anio = ref.substring(8, 9);
        var res3 = ref.substring(9, 15);
        if (anio == 3) {
            anio = 4;
            res = res1 + anio + res3;
        } else {
            res = ref;
        }
        $("referencia").value = res;
    }
}

function PadLeft(value, length) {
    var resp = "";
    if (value.toString().length === 0) {
        resp = "";
    } else {
        resp = (value.toString().length < length) ? PadLeft("0" + value, length) : value;
    }
    return resp;
}

/*Funcion que Evita el USO del ctrl + c y ctrl + v*/
valCopiarPegar = function (event) {
    resp = false;
    var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();
    if (event.ctrlKey && (pressedKey == "c" || pressedKey == "v" || pressedKey == "-")) {
        // disable key press porcessing
        alert("No puedes Realizar esta Accion");
        //event.returnValue = false;
        resp = false;
    } else {
        //event.returnValue = true;
        resp = true;
    }
    return resp;
};