function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
function isCharKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode <= 32) || (charCode >= 65 && charCode <= 90) ||
            (charCode >= 97 && charCode <= 122)) {
        return true;
    }
    return false;
}

/********************* Validar Campos *******************************/
valRef = function (campo) {
    var cmp = null;
    var resp = false;
    if (campo === "ref") {
        cmp = $('referencia');
        //cmp2 = $('folio');
        cmp.value = cmp.value.replace(/^\s*|\s*$/g, "");
        //cmp2.value = cmp2.value.replace(/^\s*|\s*$/g, "");
        if (cmp.value.length < 15) {
            cmp.style.border = '2px ridge #FF0000';
            cmp.highlight('#f00').focus();
            msgError('referencia');
            cmp.value = "";
            return false;
        }
        /*if (cmp2.value.length < 5 || cmp2.value.length > 5) {
            cmp2.style.border = '2px ridge #FF0000';
            cmp2.highlight('#f00').focus();
            msgError('folio');
            return false;

        }
        if (cmp2.value === "00000") {
            cmp2.style.border = '2px ridge #FF0000';
            cmp2.highlight('#f00').focus();
            msgError('folio0');
            return false;
        }

        var cadena = cmp2.value.substring(0, 2);
        */
        //alert(cadena);
        cmp.style.border = '2px ridge #006400';
        //cmp2.style.border = '2px ridge #006400';
        return true;
    } else if (campo === "folio" || campo === "folio2") {
        cmp = $(campo);
        cmp.value = cmp.value.replace(/^\s*|\s*$/g, "");
        if (cmp.value.length < 5 || cmp.value.length > 5) {
            cmp.style.border = '2px ridge #FF0000';
            cmp.highlight('#f00').focus();
            msgError('folio');
            cmp.value = "";            
            return false;
        }
        if (cmp.value === "00000") {
            cmp.style.border = '2px ridge #FF0000';
            cmp.style.backgroundColor = "white";
            cmp.highlight('#f00').focus();
            msgError('folio0');
            cmp.value = "";
            
            return false;
        }
        //var cadena = cmp.value.substring(0, 2);
        cmp.style.border = '2px ridge #006400';
        return true;
    }
};

valRefC = function () {
    var cmp = null;
    cmp = $('referenciaC');
    cmp.value = cmp.value.replace(/^\s*|\s*$/g, "");
    if (cmp.value.length < 30) {
        cmp.style.border = '2px ridge #FF0000';
        cmp.highlight('#f00').focus();
        msgError('referencia');
        return false;
    }
    cmp.style.border = '2px ridge #006400';
    return true;
};

valFolio = function () {
    var cmp = null;
    cmp = $('folio');
    cmp.value = cmp.value.replace(/^\s*|\s*$/g, "");
    if (cmp.value.length < 9) {
        cmp.style.border = '2px ridge #FF0000';
        cmp.highlight('#f00').focus();
        msgError('folio');
        return false;
    }
    cmp.style.border = '2px ridge #006400';
    return true;
};

valFolioBote = function (ele) {
    var cmp = null;
    cmp = $(ele);
    cmp.value = cmp.value.replace(/^\s*|\s*$/g, "");
    if (cmp.value.length < 10) {
        cmp.style.border = '2px ridge #FF0000';
        cmp.highlight('#f00').focus();
        msgError('folioBote');
        return false;
    }
    cmp.style.border = '2px ridge #006400';
    return true;
};

valSticker = function (campo) {
    var cmp = null;
    var resp = false;

    if (campo === "codigoStick") {
        cmp = $('codigoStick');
        cmp.value = cmp.value.replace(/^\s*|\s*$/g, "");
        if (cmp.value.length < 15) {
            cmp.style.border = '2px ridge #FF0000';
            cmp.highlight('#f00').focus();
            msgError('codigoStick');
            cmp.value = "";
            return false;
        }
        cmp.style.border = '2px ridge #006400';
        resp = true;
    } else if (campo === "folioStick" || campo === "folio2Stick") {
        cmp = $(campo);
        cmp.value = cmp.value.replace(/^\s*|\s*$/g, "");
        if (cmp.value.length < 5 || cmp.value.length > 5) {
            cmp.style.border = '2px ridge #FF0000';
            cmp.highlight('#f00').focus();
            msgError(campo);
            cmp.value = "";
            return false;
        }
        if (cmp.value === "00000") {
            cmp.style.border = '2px ridge #FF0000';
            cmp.style.backgroundColor = "white";
            cmp.highlight('#f00').focus();
            msgError(campo);
            cmp.value = "";
            return false;
        }
        //var cadena = cmp2.value.substring(0, 2);
        //alert(cadena);
        cmp.style.border = '2px ridge #006400';
        resp = true;
    }
    return resp;
};

valSticker21 = function (campo) {
    var cmp = null;
    var resp = false;

    if (campo === "codigoStick21") {
        cmp = $('codigoStick21');
        cmp.value = cmp.value.replace(/^\s*|\s*$/g, "");
        if (cmp.value.length < 15) {
            cmp.style.border = '2px ridge #FF0000';
            cmp.highlight('#f00').focus();
            msgError('codigoStick21');
            cmp.value = "";
            return false;
        }
        cmp.style.border = '2px ridge #006400';
        resp = true;
    } else if (campo === "folioStick21" || campo === "folio2Stick21") {
        cmp = $(campo);
        cmp.value = cmp.value.replace(/^\s*|\s*$/g, "");
        if (cmp.value.length < 6 || cmp.value.length > 6) {
            cmp.style.border = '2px ridge #FF0000';
            cmp.highlight('#f00').focus();
            msgError(campo);
            cmp.value = "";
            return false;
        }
        if (cmp.value <= 0) {
            cmp.style.border = '2px ridge #FF0000';
            cmp.style.backgroundColor = "white";
            cmp.highlight('#f00').focus();
            msgError(campo);
            cmp.value = "";
            return false;
        }
        //var cadena = cmp2.value.substring(0, 2);
        //alert(cadena);
        cmp.style.border = '2px ridge #006400';
        resp = true;
    }
    return resp;
};

valSeleccionSticker = function () {
    if ($('selec_Sticker').value === null || $('selec_Sticker').value.length === 0) {
        alert("Debe Seleccionar un tipo de Sticker");
        return false;
    } else {
        return true;
    }
};

saltoEnt = function (field, event) {
    var cmp = null;
    cmp = $('referencia');
    var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    if ((keyCode >= 48 && keyCode <= 57) || keyCode == 13 || keyCode == 8) {
        if (keyCode == 13) {
            field.value = field.value.replace(/^\s*|\s*$/g, "");
            if (field.value.length == 15) {
                cmp.style.border = '2px ridge #006400';
                cmp.focus();
                //callAjax("consulta");
                //correccionAnio();
                return false;
            } else {
                cmp.style.border = '2px ridge #FF0000';
                cmp.highlight('#f00').focus();
                msgError('referencia');
                cmp.focus();
                return false;
            }
        } else {
            cmp.focus();
            //callAjax("consulta")
            return true;
        }
    } else
        cmp.focus();
    return false
};

saltoEnt2 = function (field, event) {
    var cmp = null;
    cmp = $('referenciaC');
    var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    if ((keyCode >= 48 && keyCode <= 57) || keyCode == 13 || keyCode == 8) {
        if (keyCode == 13) {
            field.value = field.value.replace(/^\s*|\s*$/g, "");
            if (field.value.length == 19) {
                cmp.style.border = '2px ridge #006400';
                cmp.focus();
                //callAjax("consulta");
                return false;
            } else {
                cmp.style.border = '2px ridge #FF0000';
                cmp.highlight('#f00').focus();
                msgError('referencia');
                cmp.focus();
                return false;
            }
        } else {
            cmp.focus();
            //callAjax("consulta")
            return true;
        }
    } else
        //alert("falso 3");
        cmp.focus();
    return false;
};


valdigVer = function () {
    var cmp = null;
    cmp = $('digVer');
    cmp.value = cmp.value.replace(/^\s*|\s*$/g, "");
    if (cmp.value.length < 1) {
        cmp.style.border = '2px ridge #FF0000';
        cmp.highlight('#f00').focus();
        msg('digVer');
        return false;
    }
    cmp.style.border = '2px ridge #006400';
    return true;
};


valPagCli = function () {
    var cmp = null;
    cmp = $('importe');
    cmp.value = cmp.value.replace(/^\s*|\s*$/g, "");
    if (cmp.value.length == 0) {
        cmp.style.border = '2px ridge #FF0000';
        cmp.highlight('#f00').focus();
        msgError('importeC');
        return false;
    }
    if (cmp.value == 0) {
        cmp.style.border = '2px ridge #FF0000';
        cmp.highlight('#f00').focus();
        msgError('importeCcero');
        return false;
    }
    if (cmp.value <= 0 || cmp.value > 99999999.00) {
        cmp.style.border = '2px ridge #FF0000';
        cmp.highlight('#f00').focus();
        msgError('importeCM');
        return false;
    }

    var valor = cmp.value;
    var punto = valor.indexOf('.');
    if (punto == -1) {
        cmp.style.border = '2px ridge #FF0000';
        cmp.highlight('#f00').focus();
        msgError('importeC');
        return false;
    }
    var tam = valor.length;
    var corte = valor.substring(punto + 1, tam)
    if (corte.length != 2) {
        cmp.style.border = '2px ridge #FF0000';
        cmp.highlight('#f00').focus();
        msgError('importeC');
        return false;
    }
    if (corte == "0." || corte == ".0" || corte == "..") {
        cmp.style.border = '2px ridge #FF0000';
        cmp.highlight('#f00').focus();
        msgError('importeC');
        return false;
    }
    cmp.style.border = '2px ridge #006400';
    return true;
};


valPagCliCon = function () {
    var cmp = null;
    cmp = $('importeC');
    cmp.value = cmp.value.replace(/^\s*|\s*$/g, "");
    if (cmp.value.length == 0) {
        cmp.style.border = '2px ridge #FF0000';
        cmp.highlight('#f00').focus();
        msgError('importeC');
        return false;
    }
    if (cmp.value == 0) {
        cmp.style.border = '2px ridge #FF0000';
        cmp.highlight('#f00').focus();
        msgError('importeCcero');
        return false;
    }
    if (cmp.value <= 0 || cmp.value > 99999999.00) {
        cmp.style.border = '2px ridge #FF0000';
        cmp.highlight('#f00').focus();
        msgError('importeCM');
        return false;
    }
    var valor = cmp.value;
    var punto = valor.indexOf('.');
    if (punto == -1) {
        cmp.style.border = '2px ridge #FF0000';
        cmp.highlight('#f00').focus();
        msgError('importeC');
        return false;
    }
    var tam = valor.length;
    var corte = valor.substring(punto + 1, tam)
    if (corte.length != 2) {
        cmp.style.border = '2px ridge #FF0000';
        cmp.highlight('#f00').focus();
        msgError('importeC');
        return false;
    }
    if (corte == "0." || corte == ".0" || corte == "..") {
        cmp.style.border = '2px ridge #FF0000';
        cmp.highlight('#f00').focus();
        msgError('importeC');
        return false;
    }
    cmp.style.border = '2px ridge #006400';
    return true;
};

valNom = function (campo) {
    var cmp = null;
    cmp = $(campo);
    cmp.value = cmp.value.replace(/^\s*|\s*$/g, "");
    if (cmp.value.length == 0) {
        cmp.style.border = '2px ridge #FF0000';
        cmp.highlight('#f00').focus();
        if (cmp.id == "aPaterC") {
            msg('aPaterC');
        }
        if (cmp.id == "aMaterC") {
            msg('aMaterC');
        }
        if (cmp.id == "nomC") {
            msg('nomC');
        }
        return false;
    }
    cmp.style.border = '2px ridge #006400';
    return true;
    decimal();
};

valFol = function () {
    var cmp = null;
    cmp = $('folioTCM');
    cmp.value = cmp.value.replace(/^\s*|\s*$/g, "");
    if (cmp.value.length == 0) {
        cmp.style.border = '2px ridge #FF0000';
        cmp.highlight('#f00').focus();
        //alert("Debe Ingresar un Folio ");
        msgError('folioTCM');
        return false;
    }
    cmp.style.border = '2px ridge #006400';
    return true;
};


valfecha = function () {
    var cmp = null;
    cmp = $('fecha');
    cmp.value = cmp.value.replace(/^\s*|\s*$/g, "");
    if (cmp.value.length == 0) {
        cmp.style.border = '2px ridge #FF0000';
        cmp.highlight('#f00').focus();
        msgError('fecha');
        return false;
    }
    if (cmp.value == 0) {
        cmp.style.border = '2px ridge #FF0000';
        cmp.highlight('#f00').focus();
        msgError('fecha');
        return false;
    }
    cmp.style.border = '2px ridge #006400';
    return true;
};

valGrupo = function () {
    var cmp = null;
    cmp = $('selG');
    cmp.value = cmp.value.replace(/^\s*|\s*$/g, "");
    if (cmp.value == 0) {
        cmp.style.border = '2px ridge #FF0000';
        cmp.highlight('#f00').focus();
        //alert("Debe Ingresar un Folio Telecomm");
        msgError('selG');
        return false;
    }
    cmp.style.border = '2px ridge #006400';
    return true;
};


function decimal(opc) {
    var cmp = null;
    var i = 0;
    if (opc === 'imp') {
        cmp = document.getElementById('importe');
    } else if (opc === 'impBote') {
        cmp = document.getElementById('impBote');
    } else if (opc === 'impBoteC') {
        cmp = document.getElementById('impBoteC');
    } else {
        cmp = document.getElementById('importeC');
    }
    var punto = cmp.value.indexOf('.');
    var tam = cmp.value.length;
    if (tam == 0) {
        alert("Debe Ingresar un Importe ");
        cmp.style.border = '2px ridge #FF0000';
        cmp.style.backgroundColor = "#FFFFFF";
        cmp.highlight('#f00').focus();
        return false;
    } else {
        var digito = null;
        var contador = 0;
        while (i < tam) {
            digito = (cmp.value.toString()).substring(i, i + 1);
            if (digito == ".") {
                contador++;
            }
            i++;
        }
        if (contador > 1) {
            cmp.style.border = '2px ridge #FF0000';
            cmp.style.backgroundColor = "#FFFFFF";
            cmp.highlight('#f00').focus();
            alert("No Debe Ingresar MAS de un Punto Decimal");
            return false;
        }
    }
    if (cmp.value.indexOf('.') == -1) {
        cmp.style.border = '2px ridge #FF0000';
        cmp.style.backgroundColor = "#FFFFFF";
        cmp.highlight('#f00').focus();
        alert("Debe Ingresar un punto decimal");
        return false;
    }
    if (punto == 0) {
        cmp.style.border = '2px ridge #FF0000';
        cmp.style.backgroundColor = "#FFFFFF";
        cmp.highlight('#f00').focus();
        alert("Debe Ingresar Importe Valido");
        return false;
    }
    if ((punto + 3) != tam) {
        cmp.style.border = '2px ridge #FF0000';
        cmp.style.backgroundColor = "#FFFFFF";
        cmp.highlight('#f00').focus();
        alert("Debe Ingresar 2 digitos decimales");
        return false;
    }
    cmp.style.border = '2px ridge #006400';
    return true;
};

decim = function (evt, campo) {
    var code = (evt.which) ? evt.which : evt.keyCode;
    var er = /^\d+\.\d\d$/;
    if ((code >= 48 && code <= 57) || code == 46 || code == 8) {
        if (code == 46) {
            if (campo.value.indexOf('.') > -1)
                return false;
            if (campo.value.length == 0) {
                campo.value = "0.";
                //alert("Debe Ingresar Almenos 2 Digitos Decimales");
                msgError('importeCcero');
                return false;
            }
        }
        if (code == 8)
            return true;
        else {
            if ((campo.value.match(er)) && (campo.value != ''))
                //alert("Debe Ingresar Almenos 2 Digitos Decimales");
                return false;
            return true;
        }
    } else
        return false;
};

function comReferencias() {
    var ref1 = $("referencia").value;
    var ref2 = $("referenciaC").value;

    if (ref1 != ref2) {
        alert("Las Referencias son Diferentes, Favor de Reingresar los Datos");
        $("referencia").value = "";
        document.getElementById("referencia").style.backgroundColor = "#FFFFFF";
        $("referenciaC").value = "";
        document.getElementById("referenciaC").style.backgroundColor = "#FFFFFF";
        return false;
    } else {
        return true;
    }
};

function comImportes() {
    var imp1 = $("importe").value;
    var imp2 = $("importeC").value;

    if (imp1 != imp2) {
        alert("Los Importes son Diferentes, Favor de Reingresar los Datos");
        $("importe").value = "";
        document.getElementById("importe").style.backgroundColor = "#FFFFFF";
        $("importeC").value = "";
        document.getElementById("importeC").style.backgroundColor = "#FFFFFF";
        return false;
    } else {
        return true;
    }

};

valDecimales = function (event) {
    var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    if (keyCode == 46) {
        return true;
    }
    if (keyCode > 31 && (keyCode < 48 || keyCode > 57)) {
        return false;
    }
    return true;
};

/*Funcion que Evita el USO del ctrl + c y ctrl + v*/
valCopiarPegar = function(event) {
    var resp = false;
    var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();
    if (event.ctrlKey && (pressedKey == "c" ||
            pressedKey == "v" || pressedKey == "-" )) {
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
