function soloNum(evt) {
    var code = (evt.which) ? evt.which : evt.keyCode;
    if (code > 31 && (code < 48 || code > 57)) {
        return false;
    }
    return true;
}
function isCharKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode<=32) || (charCode>=65 && charCode<=90) || (charCode>=97 && charCode<=122)) {
        return true;
    }
    return false;
}
function soloNC(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode<=32) || (charCode>=48 && charCode<=57) || (charCode>=65 && charCode<=90) || (charCode>=97 && charCode<=122)) {
        return true;
    }
    return false;
}
function isNull(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && charCode < 255) {
        return false;
    }
    return true;
}