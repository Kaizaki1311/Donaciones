/**********validacion de campos*******************************************************/
isNumberKey = function(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
isCharKey = function(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode<=32) || (charCode>=65 && charCode<=90) || (charCode>=97 && charCode<=122)) {
        return true;
    }
    return false;
}
isCharNum = function(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode<=32) || (charCode>=48 && charCode<=57) || (charCode>=65 && charCode<=90) || (charCode>=97 && charCode<=122)) {
        return true;
    }
    return false;
}
isNull = function(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && charCode < 255) {
        return false;
    }
    return true;
}
decim = function(evt,campo) {
    var code = (evt.which) ? evt.which : evt.keyCode;
    var er = /^\d+\.\d\d$/;

    if ((code>=48 && code<=57) || code==46 || code==8) {
        if (code==46) {
            if (campo.value.indexOf('.') > -1)
                return false;
            if (campo.value.length==0) {
                campo.value="0.";
                return false;
            }
        }
        if (code==8)
            return true;
        else {
            if ((campo.value.match(er)) && (campo.value!=''))
                return false;
            return true;
        }
    } else
        return false;
}
tarjeta = function(tj) {
    var tjr = tj.replace(/-/gi,"");
    //alert(tjr);
    var tjf = "";
    for (i = 0 ; i<tjr.length ; i++) {
        if (i == 4 || i == 8 || i == 12)
            tjf = tjf + "-" + tjr.substring(i,i+1);
        else
            tjf = tjf + tjr.substring(i,i+1);
    }
    return tjf;
}