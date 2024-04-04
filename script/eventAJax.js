//Funcion que Valida los Campos para llamar al Reporte por Mes
function callAjax(){    
    if(valOfna()){
        if (valServ()){
            if(valAnioM()){
                if(valMesM()){ 
                    loader(true);
                    ajax(getServ());
                }
            }            
        }
    }
}

//Funcion que valida los campos para llamar al Reporte por Dia
function callAjaxDia(){     
    if(valOfna()){
        if (valServ()) {
            if(valFecD1()){    
                if(valFecD2()){
                    loader(true);
                    ajaxDia(getServ());
                }
            }
        }
    }
}

function cadenaAjax(formQS) { 
    var ofnaB = "";
    var anioB = "";
    var mesB = "";
    var cadena = "";
    
    ofnaB = $('ofnaB').value;
    anioB = $("anio").value;
    mesB = $("mes").value;
    
    if(formQS == 'giros'){
        cadena = "ofnaB="  + ofnaB + "&anioB=" + anioB + "&mesB=" + mesB + "&mtd=1";
    }
    if(formQS == 'servicios'){   
        diaB = $("theDate").value;
        cadena = "ofnaB=" + ofnaB + "&anioB=" + anioB + "&mesB=" + mesB + "&mtd=2";
    }
    if(formQS == 'remesas'){
        cadena = "ofnaB=" + ofnaB + "&mtd=3";
    }
    
    return cadena;
}

function cadenaAjaxD(formQS) { 
    var ofna = "";
    var ofnaB = "";
    var diaB = "";
    var cadena = "";
      
    ofnaB = $('ofnaB').value;
    diaB = $("theDate").value;
    
    if(formQS == 'giros'){
        cadena = "ofnaB=" + ofnaB +  "&diaB=" + diaB + "&mtd=11";
    }
    if(formQS == 'servicios'){
        cadena = "ofnaB=" + ofnaB +  "&diaB=" + diaB + "&mtd=21";
    }
    if(formQS == 'remesas'){
        cadena = "ofnaB=" + ofnaB + "&mtd=31";
    }
    return cadena;
}

function ajax(mtd){
    if(window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest();
    }else{
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            var respSrv = xmlhttp.getResponseHeader("errorR");
            if(respSrv == 1){
                divActivo(false,"divDatos");
                divActivo(false,"resultDia");
                divActivo(false,"btns_MenuServ");
                document.getElementById("result").innerHTML = xmlhttp.responseText;
                loader(false);
            }else{
                document.getElementById("result").innerHTML = xmlhttp.responseText;
                loader(false);
            }
        }
    }
    xmlhttp.open("POST","telecomm/Procesos",true);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.send(cadenaAjax(mtd));
}


function ajaxDia(mtd){
    if(window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest();
    }else{
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            var respSrv = xmlhttp.getResponseHeader("errorR");
            if(respSrv == 1){
                divActivo(false,"divDatos");
                divActivo(false,"result");
                divActivo(false,"btns_MenuServ");
                document.getElementById("resultDia").innerHTML = xmlhttp.responseText;
                loader(false);
            }else{
                document.getElementById("resultDia").innerHTML = xmlhttp.responseText;
                loader(false);
            }
        }
    }
    xmlhttp.open("POST","telecomm/Procesos",true);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.send(cadenaAjaxD(mtd));
}