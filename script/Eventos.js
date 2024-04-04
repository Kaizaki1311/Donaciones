function divActivo(mostrar, nombre) {
    if (mostrar) {
        if (document.getElementById(nombre) != null)
            document.getElementById(nombre).style.display = 'block';
    } else {
        if (document.getElementById(nombre) != null)
            document.getElementById(nombre).style.display = 'none';
    }
}

function limpiar(form) {
    if ($(form) != null && form == "form1") {
        divActivo(false, "result");
        if ($("selector").value == 1) {
            $("referencia").setStyle('background-color', 'white');
            $("referencia").setStyle('border', '2px ridge #D4D4D4');
            $("folio").setStyle('background-color', 'white');
            $("folio").setStyle('border', '2px ridge #D4D4D4');
            //cmp.style.border = '2px ridge #006400';
            $("folio2").setStyle('background-color', 'white');
            $("folio2").setStyle('border', '2px ridge #D4D4D4');
        }
        if ($("selector").value == 2) {
            $("importe").setStyle('background-color', 'white');
            $("importe").setStyle('border', '2px ridge #D4D4D4');
            $("importeC").setStyle('background-color', 'white');
            $("importeC").setStyle('border', '2px ridge #D4D4D4');
        }
        if ($("selector").value == 3) {
            $("numBote").setStyle('background-color', 'white');
            $("numBote").setStyle('border', '2px ridge #D4D4D4');
            $("impBote").setStyle('background-color', 'white');
            $("impBote").setStyle('border', '2px ridge #D4D4D4');
            //cmp.style.border = '2px ridge #006400';
            $("impBoteC").setStyle('background-color', 'white');
            $("impBoteC").setStyle('border', '2px ridge #D4D4D4');
        }
        if ($("selector").value == 4) {
            $("codigoStick").setStyle('background-color', 'white');
            $("codigoStick").setStyle('border', '2px ridge #D4D4D4');
            $("folioStick").setStyle('background-color', 'white');
            $("folioStick").setStyle('border', '2px ridge #D4D4D4');
            $("folio2Stick").setStyle('background-color', 'white');
            $("folio2Stick").setStyle('border', '2px ridge #D4D4D4');
            $("sticker1_Select").setStyle('background-color', 'white');
            $("sticker2_Select").setStyle('background-color', 'white');
            $("sticker3_Select").setStyle('background-color', 'white');
            $("selec_Sticker").value = "";
        }
        if ($("selector").value == 5) {
            $("codigoStick21").setStyle('background-color', 'white');
            $("codigoStick21").setStyle('border', '2px ridge #D4D4D4');
            $("folioStick21").setStyle('background-color', 'white');
            $("folioStick21").setStyle('border', '2px ridge #D4D4D4');
            $("folio2Stick21").setStyle('background-color', 'white');
            $("folio2Stick21").setStyle('border', '2px ridge #D4D4D4');            
        }
        $(form).reset();
    } else {
        divActivo(false, "result");
        $("folioTCM").setStyle('border', '2px ridge #D4D4D4');
        $(form).reset();
    }
}

function cerrarDiv() {
    var sel = $("selector").value;
    if (sel == 4) {
        divActivo(false, "divStic");
    } else if (sel == 3) {
        divActivo(false, "divBot");
    } else if (sel == 2) {
        divActivo(false, "divImp");
    } else if (sel == 1) {
        divActivo(false, "divRef");
    }
    $("msg").value = "";
    $("selector").value = "";
}

function backLimpiar(mtd) {
    if (mtd == 1) {
        javascript:history.go(-2);
        loader(false);
        divActivo(false, "respuestaConf");
    } else {
        javascript:history.go(-1);
        loader(false);
        divActivo(false, "respuestaConf");
    }
}

/*Funcion para Imprimir el recibo*/
function imprimir(bot) {
    bot.style.visibility = 'hidden';
    window.print();
    bot.style.visibility = '';
}

function msg(campo) {
    //divActivo(true,'msg');
    if (campo == 'referencia') {
        $("msg").innerHTML = "Ingrese un codigo de 15 D&iacute;gitos";
    }
    if (campo == 'folio') {
        $(campo).setStyle('background-color', 'white');
        $("msg").innerHTML = "Ingresa el numero de folio de 5 D&iacute;gitos";
    }
    if (campo == 'folio2') {
        $(campo).setStyle('background-color', 'white');
        $("msg").innerHTML = "ReIngresa el numero de folio de 5 D&iacute;gitos";
    }
    if (campo == 'importe') {
        $("msg").innerHTML = "Ingrese un Importe con 2 D&iacute;gitos Decimales";
    }
    if (campo == 'importeC') {
        $("msg").innerHTML = "Ingrese la confirmacion del Importe con 2 D&iacute;gitos Decimales";
    }
    if (campo == 'numBote') {
        $("msg").innerHTML = "Ingrese el numero de Bote de 10 Digitos";
    }
    if (campo == 'impBote') {
        $("msg").innerHTML = "Ingrese el Importe del Bote con 2 D&iacute;gitos Decimales";
    }
    if (campo == 'impBoteC') {
        $("msg").innerHTML = "Ingrese la confirmacion del Importe del Bote con 2 D&iacute;gitos Decimales";
    }

    if (campo == 'codigoStick') {
        $("msg").innerHTML = "Ingrese un codigo de Sticker de 15 D&iacute;gitos";
    }
    if (campo == 'codigoStick21') {
        $("msg").innerHTML = "Ingrese un codigo de Sticker de 15 D&iacute;gitos";
    }

    if (campo == 'folioStick') {
        $(campo).setStyle('background-color', 'white');
        $("msg").innerHTML = "Ingresa el numero de folio de Sticker de 5 D&iacute;gitos";
    }
    if (campo == 'folioStick21') {
        $(campo).setStyle('background-color', 'white');
        $("msg").innerHTML = "Ingresa el numero de folio de Sticker de 6 D&iacute;gitos";
    }
    if (campo == 'folio2Stick') {
        $(campo).setStyle('background-color', 'white');
        $("msg").innerHTML = "ReIngresa el numero de folio de Sticker de 5 D&iacute;gitos";
    }
    if (campo == 'folio2Stick21') {
        $(campo).setStyle('background-color', 'white');
        $("msg").innerHTML = "ReIngresa el numero de folio de Sticker de 6 D&iacute;gitos";
    }
    if (campo == 'sticker') {
        $("msg").innerHTML = "Selecciones un Sticker dando CLICK sobre la imagen";
    }
}

function msgError(campo) {
    if (campo == 'referencia') {
        //document.getElementById("msg").innerHTML = "Debe Ingresar una Referencia de 30 D&iacute;gitos";
        alert("Debe Ingresar un Codigo de 15 Digitos");
    }
    if (campo == 'folio') {
        //document.getElementById("msg").innerHTML = "Debe Ingresar una Referencia de 30 D&iacute;gitos";
        alert("Debe Ingresar un numero de folio de 5 Digitos");
    }
    if (campo == 'folio2') {
        //document.getElementById("msg").innerHTML = "Debe Ingresar una Referencia de 30 D&iacute;gitos";
        alert("Debe Ingresar un numero de folio de Correcto");
    }
    if (campo == 'folio0') {
        //document.getElementById("msg").innerHTML = "Debe Ingresar una Referencia de 30 D&iacute;gitos";
        alert("Debe Ingresar un numero de folio Diferente de 0");
    }
    if (campo == 'folioBote') {
        //document.getElementById("msg").innerHTML = "Debe Ingresar una Referencia de 30 D&iacute;gitos";
        alert("Debe Ingresar un numero de folio de 10 Digitos");
    }
    if (campo == 'folioTCM') {
        //document.getElementById("msg").innerHTML = "Debe Ingresar un Folio Telecomm";
        alert("Debe Ingresar un Folio");
    }
    if (campo == 'importeCcero') {
        //document.getElementById("msg").innerHTML = "Debe Ingresar un Importe Diferente de Cero Ejemplo: 100.00";
        alert("Debe Ingresar un Importe Diferente de Cero Ejemplo: 100.00");
    }
    if (campo == 'importeC') {
        //document.getElementById("msg").innerHTML = "Debe Ingresar un Importe con 2 D&iacute;gitos  Decimales Ejemplo: 100.00";
        alert("Debe Ingresar un Importe con 2 D&iacute;gitos  Decimales Ejemplo: 100.00");
    }
    if (campo == 'importeCM') {
        //document.getElementById("msg").innerHTML = "Debe Ingresar un Importe con 2 D&iacute;gitos  Decimales Mayor a 1.00 y Menos a 99,999,999.00";
        alert("Debe Ingresar un Importe con 2 D&iacute;gitos  Decimales Mayor a 1.00 y Menos a 99,999,999.00");
    }
    if (campo == 'fecha') {
        //document.getElementById("msg").innerHTML = "Debe Ingresar un Importe con 2 D&iacute;gitos  Decimales Mayor a 1.00 y Menos a 99,999,999.00";
        alert("Debe Seleccionar fecha");
    }
    if (campo == 'codigoStick') {
        //document.getElementById("msg").innerHTML = "Debe Ingresar una Referencia de 30 D&iacute;gitos";
        alert("Debe Ingresar un Codigo de 15 Digitos");
    }
    if (campo == 'folioStick') {
        //document.getElementById("msg").innerHTML = "Debe Ingresar una Referencia de 30 D&iacute;gitos";
        alert("Debe Ingresar un numero de folio de 5 Digitos");
    }
    if (campo == 'folio2Stick') {
        //document.getElementById("msg").innerHTML = "Debe Ingresar una Referencia de 30 D&iacute;gitos";
        alert("Debe Ingresar un numero de folio de 5 Digitos");
    }
    if (campo == 'folioStick21' || campo == 'folio2Stick21') {
        //document.getElementById("msg").innerHTML = "Debe Ingresar una Referencia de 30 D&iacute;gitos";
        alert("Debe Ingresar un numero de folio de 6 Digitos mayor a 1");
    }
}

function outMsg(text) {
    if (text == "referencia") {
        if (document.getElementById("referencia").value.length != 0) {
            if (valRef()) {
                document.getElementById("referencia").style.backgroundColor = "black";
            }
        }
    } else if (text == "folio" || text == "folio2") {
        //document.getElementById("msg").innerHTML = "";
        //divActivo(false,'msg');
        var cmp2 = null;
        //cmp2 = $('folio');
        cmp2 = $(text);
        if (cmp2.value.length == 0) {
            cmp2.setStyle('background-color', 'white');
        } else if (cmp2.value.length < 5) {
            var ce = 5 - cmp2.value.length;
            for (var i = 0; i < ce; i++) {
                cmp2.value = "0" + cmp2.value;
            }
            cmp2.setStyle('background-color', 'black');
        } else {
            cmp2.setStyle('background-color', 'black');
        }
    } else if (text == "folioStick" || text == "folio2Stick") {
        //document.getElementById("msg").innerHTML = "";
        //divActivo(false,'msg');
        var cmp2 = null;
        //cmp2 = $('folio');
        cmp2 = $(text);
        if (cmp2.value.length == 0) {
            cmp2.setStyle('background-color', 'white');
        } else if (cmp2.value.length < 5) {
            var ce = 5 - cmp2.value.length;
            for (var i = 0; i < ce; i++) {
                cmp2.value = "0" + cmp2.value;
            }
            cmp2.setStyle('background-color', 'black');
        } else {
            cmp2.setStyle('background-color', 'black');
        }
    } else {
        document.getElementById("msg").innerHTML = "";
        //divActivo(false,'msg');
    }
}

function selectSticker(sticker) {
    if (sticker == "sticker1") {
        //document.getElementById("sticker1").checked = true;
        document.getElementById("sticker1_Select").style.backgroundColor = "#AAAAAA";
        document.getElementById("sticker2_Select").style.backgroundColor = "#FFFFFF";
        document.getElementById("sticker3_Select").style.backgroundColor = "#FFFFFF";
    } else if (sticker == "sticker2") {
        //document.getElementById("sticker2").checked = true;
        document.getElementById("sticker1_Select").style.backgroundColor = "#FFFFFF";
        document.getElementById("sticker2_Select").style.backgroundColor = "#AAAAAA";
        document.getElementById("sticker3_Select").style.backgroundColor = "#FFFFFF";
    } else if (sticker == "sticker3") {
        //document.getElementById("sticker3").checked = true;
        document.getElementById("sticker1_Select").style.backgroundColor = "#FFFFFF";
        document.getElementById("sticker2_Select").style.backgroundColor = "#FFFFFF";
        document.getElementById("sticker3_Select").style.backgroundColor = "#AAAAAA";
    }
    document.getElementById("selec_Sticker").value = sticker;
}

function mayusculas(campo) {
    var valor = $(campo).value;
    var valorMay = valor.toUpperCase();
    $(campo).value = valorMay;
}

/***************** Validacion y llamados ************************/
function callAjax(form) {
    if (form == "consulta") {
        if (valRef()) {
            if (valRefC()) {
                loader(true);
                ajax(form);
            }
        }
    }
    if (form == "confirmar") {
        loader(true);
        ajax(form);
    }
}

function callSubmit(form) {
    if (form === "form5") {
        var sel = $("selector").value;
        if (sel == 1) { //Tarjeta
            $("mtd").value = 1;
        } else if (sel == 2) { //Efectivo
            $("mtd").value = 2;
        } else if (sel == 3) { //Boteo
            $("mtd").value = 3;
        } else if (sel == 4) { //Sticker
            $("mtd").value = 4;
        } else if (sel == 5) { //Sticker
            $("mtd").value = 5;
        } else {
            alert("Opcion de Selector NO contemplada");
            $("mtd").value = 0;
        }
        $("regresarConf").disabled = true;
        $("pagar").disabled = true;
        submit(form);
    }
    if (form == "form4") {
        if (valFol()) {
            //loader(true);
            alert("Se envia impresion de recibo");
        }
    }
}

function cadenaAjax(formQS) {
    var referencia = $('referencia').value;
    var folio = $('folio').value;
    var cadena = "";
    if (formQS == 'consulta') {
        cadena = "referencia=" + referencia + "&mtd=1" + "&folio = " + folio;
    }
    if (formQS == 'confirmar') {
        var nomCont = $('nomCont').value;
        var tipPago = $('tipPago').value;
        var fechaRes = $('fechaRes').value;
        var impResp = $('impResp').value;

        cadena = "referencia=" + referencia + "&folio = " + folio + "&nomCont=" + nomCont + "&tipPago=" + tipPago + "&fechaRes=" + fechaRes + "&impResp=" + impResp + "&mtd=2";
    }
    return cadena;
}

function ajax(mtd) {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // var respSrv = xmlhttp.getResponseHeader("respuesta");
            //document.getElementById("tituloC").innerHTML = xmlhttp.getResponseHeader("tituloC");
            document.getElementById("result").innerHTML = xmlhttp.responseText;
            loader(false);
            divActivo(true, "result");
            $("consultar").disabled = true;
        }
    }
    xmlhttp.open("POST", "telecomm/Procesos", true);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    //alert(mtd);
    if (mtd == "consulta") {
        xmlhttp.send(cadenaAjax("consulta"));
    } else if (mtd == "confirmar") {
        xmlhttp.send(cadenaAjax("confirmar"));
    }
}

function submit(form) {
    //document.Datos_Folio.action = "C_Conexion/Conexion"; // aqui va el mapeo de donde estaran las funciones  "Funciones/Prueba";
    //document.Datos_Folio.submit();

    if (form == "form5") {
        loader(true);
        document.form5.action = "telecomm/Procesos";
        document.form5.submit();
    }
    if (form == "form4") {
        loader(true);
        document.form4.action = "telecomm/ImpRecibo";
        document.form4.submit();
        limpiar('form4');
    }
}

function compRef(textBox) {
    var refS = null;

    refS = $(textBox).value;
    if (refS == null || refS == "") {
    } else {
        var tam = refS.length;
        var agregado = 7 - tam;
        var i = 0;
        for (i = 1; i <= agregado; i++) {
            refS = "0" + refS;
        }
        $(textBox).value = refS;
    }
}

function datConfirm(mostrar) {
    var sel = $("selector").value;
    var donacion = "";
    if (mostrar) {
        if (sel !== 0) {
        if (sel == 1) { //Opcion de Tarjetas
            if (valRef("ref")) {
                if (valRef("folio") && valRef("folio2")) {
                    if (valCodigoTj()) {
                        if (valFolioTj()) {
                            divActivo(true, "tablaTjConf");
                            //divActivo(true, "labelFolioC");
                            donacion = "DONACION CON TARJETA";
                            $("labelTipoDonacion1").value = donacion;
                            $("labelTipoDonacion").innerHTML = donacion;
                            $("labelTjC").innerHTML = $("referencia").value;
                            $("CmpTj").value = $("referencia").value;
                            $("CmpFolTj").value = $("folio").value;

                            $("labelFolioC").value = $("folio").value;
                            loader(true);
                            var datx = (parseInt(document.body.clientWidth) / 2) - 310;
                            document.getElementById("respuestaConf").style.left = datx + 'px';
                            divActivo(mostrar, "respuestaConf");
                            divActivo(mostrar, "tablaTjConf");
                        }
                    }
                }
            }
        } else if (sel == 2) { //Opcion de efectivo
            if (decimal("imp")) {
                if (decimal("impC")) {
                    if (valImporte("importe")) {
                        //divActivo(false, "labelFolio");
                        //divActivo(false, "labelFolioC");
                        donacion = "DONACION EN EFECTIVO";
                        $("labelTipoDonacion1").value = donacion;
                        $("labelTipoDonacion").innerHTML = donacion;
                        //$("labelNumBoteC").value = $("numBote").value;
                        //$("labelNumBoteC").innerHTML = $("numBote").value;
                        $("CmpImporteC").value = $("importe").value;
                        $("labelDonacion").innerHTML = $("importe").value;
                        loader(true);
                        var datx = (parseInt(document.body.clientWidth) / 2) - 310;
                        document.getElementById("respuestaConf").style.left = datx + 'px';
                        divActivo(mostrar, "respuestaConf");
                    }
                }
            }
        } else if (sel == 3) { //Opcion de Boteo
            if (valFolioBote("numBote")) {
                if (decimal("impBote")) {
                    if (decimal("impBoteC")) {
                        if (valImporte("impBote")) {
                            //divActivo(false, "labelFolio");
                            //divActivo(false, "labelFolioC");
                            divActivo(false, "tablaTjConf");
                            divActivo(false, "tablaStickerConf");
                            divActivo(true, "tablaBotConf");
                            //divActivo(true, "labelNumBoteC");
                            donacion = "DONACION CON BOTEO";
                            $("labelTipoDonacion1").value = donacion;
                            $("labelTipoDonacion").innerHTML = donacion;
                            $("CmpNumBote").value = $("numBote").value;
                            $("labelNumBoteC").innerHTML = $("numBote").value;
                            $("CmpImporteC").value = $("impBote").value;
                            $("labelDonacion").innerHTML = $("impBote").value;
                            loader(true);
                            var datx = (parseInt(document.body.clientWidth) / 2) - 310;
                            document.getElementById("respuestaConf").style.left = datx + 'px';
                            divActivo(mostrar, "respuestaConf");
                        }
                    }
                }
            }
        } else if (sel == 4) { //Opcion de Sticker
            if (valSticker("codigoStick")) {
                if (valCodigo()) {
                    if (valSticker("folioStick") && valSticker("folio2Stick")) {
                        if (valFolioStic()) {
                            if (valSeleccionSticker()) {
                                //divActivo(true, "labelFolSticker");
                                //divActivo(true, "labelFolStickerC");
                                donacion = "DONACION CON STICKER";
                                $("labelTipoDonacion1").value = donacion;
                                $("labelTipoDonacion").innerHTML = donacion;
                                $("CmpCodigo").value = $("codigoStick").value;
                                $("labelCodigoC").innerHTML = $("codigoStick").value;
                                $("CmpFolStick").value = $("folioStick").value;
                                $("labelFolStickerC").innerHTML = $("folioStick").value;
                                var stick = null;
                                if ($('selec_Sticker').value === "sticker1") {
                                    stick = "imgDonConfStick1";
                                } else if ($('selec_Sticker').value === "sticker2") {
                                    stick = "imgDonConfStick2";
                                } else if ($('selec_Sticker').value === "sticker3") {
                                    stick = "imgDonConfStick3";
                                }
                                $("CmpSelStick").value = $("selec_Sticker").value;
                                //alert(stick);
                                divActivo(true, stick);
                                //$("labelDonacion1").value = $("importe").value;
                                //$("labelDonacion").innerHTML = $("importe").value;
                                loader(true);
                                var datx = (parseInt(document.body.clientWidth) / 2) - 310;
                                document.getElementById("respuestaConf").style.left = datx + 'px';
                                var datY = (parseInt(document.body.clientHeight) / 2) + 310;
                                document.getElementById("respuestaConf").style.top = datY + 'px';
                                divActivo(mostrar, "respuestaConf");
                                divActivo(mostrar, "tablaStickerConf");
                            }
                        }
                    }
                }
            }
        } else if (sel == 5) { //Opcion de Sticker 2021
            if (valSticker21("codigoStick21")) {
                if (valCodigoSticker21()) {
                    if (valSticker21("folioStick21") && valSticker21("folio2Stick21")) {
                        if (valFolioStic21()) {
                            donacion = "DONACION CON STICKER";
                            $("labelTipoDonacion1").value = donacion;
                            $("labelTipoDonacion").innerHTML = donacion;
                            $("CmpCodigo").value = $("codigoStick21").value;
                            $("labelCodigoC").innerHTML = $("codigoStick21").value;
                            $("CmpFolStick").value = $("folioStick21").value;
                            $("labelFolStickerC").innerHTML = $("folioStick21").value;
                            divActivo(true, stick);
                            loader(true);
                            var datx = (parseInt(document.body.clientWidth) / 2) - 310;
                            document.getElementById("respuestaConf").style.left = datx + 'px';
                            var datY = (parseInt(document.body.clientHeight) / 2) + 310;
                            document.getElementById("respuestaConf").style.top = datY + 'px';
                            divActivo(mostrar, "respuestaConf");
                            divActivo(mostrar, "tablaStickerConf");
                        }
                    }
                }
            }
        } else {
            alert("Sin Opcion de Seleccion");
        }}
    } else {
        if (sel == 1) {//Opcion de Tarjetas
            loader(false);
            divActivo(mostrar, "respuestaConf");
            $("labelTipoDonacion1").value = "";
            $("labelTipoDonacion").innerHTML = "";
            //$("labelNumero1").value = "";
            //$("labelNumBote").innerHTML = "";
            $("CmpFolTj").value = "";
            $("labelDonacion").innerHTML = "";
            //$("referencia").value = "";
            //$("folio").value = "";
            $("CmpImporteC").value = "";
            divActivo(false, "tablaTjConf");
            //$("selector").value = "";
            limpiar('form1');
        }
        if (sel == 2) {//Opcion de efectivo
            loader(false);
            divActivo(mostrar, "respuestaConf");
            $("labelTipoDonacion1").value = "";
            $("labelTipoDonacion").innerHTML = "";
            //$("labelNumero1").value = "";
            //$("labelNumBote").innerHTML = "";
            $("CmpImporteC").value = "";
            $("labelDonacion").innerHTML = "";
            //$("importe").value = "";
            //$("importeC").value = "";
            //$("labelDonacion1").value = "";
            limpiar('form1');
            //$("selector").value = "";
        }
        if (sel == 3) {//Opcion de Boteo
            loader(false);
            divActivo(mostrar, "respuestaConf");
            $("labelTipoDonacion1").value = "";
            $("labelTipoDonacion").innerHTML = "";
            //$("labelNumero1").value = "";
            //$("labelNumBote").innerHTML = "";
            $("CmpNumBote").value = "";
            $("labelDonacion").innerHTML = "";
            limpiar('form1');
            divActivo(false, "tablaBotConf");
            //$("numBote").value = "";
            //$("impBote").value = "";
            //$("impBoteC").value = "";
            //$("labelDonacion1").value = "";
            //$("selector").value = "";
        }
        if (sel == 4) {//Opcion de Sticker
            loader(false);
            divActivo(mostrar, "respuestaConf");
            $("labelTipoDonacion1").value = "";
            $("labelTipoDonacion").innerHTML = "";
            //$("labelNumero1").value = "";
            $("labelFolStickerC").innerHTML = "";
            $("CmpImporteC").value = "";
            $("labelDonacion").innerHTML = "";
            $("labelFolStickerC").value = "";
            limpiar('form1');
            if (document.getElementById("imgDonConfStick1") !== null) {
                divActivo(false, "imgDonConfStick1");
            }
            if (document.getElementById("imgDonConfStick2") !== null) {
                divActivo(false, "imgDonConfStick2");
            }
            if (document.getElementById("imgDonConfStick3") !== null) {
                divActivo(false, "imgDonConfStick3");
            }
            document.getElementById("sticker1_Select").style.backgroundColor = "#FFFFFF";
            document.getElementById("sticker2_Select").style.backgroundColor = "#FFFFFF";
            document.getElementById("sticker3_Select").style.backgroundColor = "#FFFFFF";
            divActivo(false, "tablaStickerConf");
        }
        if (sel == 5) {//Opcion de Sticker 2021
            loader(false);
            divActivo(mostrar, "respuestaConf");
            $("labelTipoDonacion1").value = "";
            $("labelTipoDonacion").innerHTML = "";
            //$("labelNumero1").value = "";
            $("labelFolStickerC").innerHTML = "";
            $("CmpImporteC").value = "";
            $("labelDonacion").innerHTML = "";
            $("labelFolStickerC").value = "";
            limpiar('form1');
            if (document.getElementById("imgDonConfStick1") !== null) {
                divActivo(false, "imgDonConfStick1");
            }
            if (document.getElementById("imgDonConfStick2") !== null) {
                divActivo(false, "imgDonConfStick2");
            }
            if (document.getElementById("imgDonConfStick3") !== null) {
                divActivo(false, "imgDonConfStick3");
            }
            document.getElementById("sticker1_Select").style.backgroundColor = "#FFFFFF";
            document.getElementById("sticker2_Select").style.backgroundColor = "#FFFFFF";
            document.getElementById("sticker3_Select").style.backgroundColor = "#FFFFFF";
            divActivo(false, "tablaStickerConf");
        }
    }

}

growF = function (div, t, h, w, f) {
    grow = new Fx.Grow(div, {
        duration: t
    }, {
        height: h,
        width: w,
        fontsize: f
    });
    grow.start();
};
shrinkF = function (div, t) {
    shrink = new Fx.Shrink(div, {
        duration: t
    });
    shrink.start();
};