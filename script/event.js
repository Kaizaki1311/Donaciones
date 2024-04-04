window.addEvent('domready', function() {
    if ($('btn_cancel') != null) {
        $('btn_cancel').addEvents({
            'click' : function(e) {
                flimpia();
                
            },
            'mouseover': function(){$('btn_cancel').fade(1);},
            'mouseleave': function(){$('btn_cancel').fade(0.4);}
        });
    }
    if ($('btn_regre') != null) {
        $('btn_regre').addEvents({
            'click' : function(e) {
                fRegresar();
            },
            'mouseover': function(){$('btn_regre').fade(1);},
            'mouseleave': function(){$('btn_regre').fade(0.4);}
        });
    }
    
    if ($('btn_rError') != null) {
        $('btn_rError').addEvents({
            'click' : function(e) {
               fRegresarError();
            },
            'mouseover': function(){$('btn_regreError').fade(1);},
            'mouseleave': function(){$('btn_regreError').fade(0.4);}
        });
    }
    
    if ($('caso1') != null) {
        $('caso1').addEvents({
            'click' : function(e) {},
            'mouseover': function(){infoCaso('caso1', true);},
            'mouseleave': function(){infoCaso('caso1', false);}
        });
    }
    
    if ($('caso2') != null) {
        $('caso2').addEvents({
            'click' : function(e) {},
            'mouseover': function(){infoCaso('caso2', true);},
            'mouseleave': function(){infoCaso('caso2', false);}
        });
    }
    if ($('caso3') != null) {
        $('caso3').addEvents({
            'click' : function(e) {},
            'mouseover': function(){infoCaso('caso3', true);},
            'mouseleave': function(){infoCaso('caso3', false);}
        });
    }
    if ($('caso4') != null) {
        $('caso4').addEvents({
            'click' : function(e) {},
            'mouseover': function(){infoCaso('caso4', true);},
            'mouseleave': function(){infoCaso('caso4', false);}
        });
    }
    if ($('caso5') != null) {
        $('caso5').addEvents({
            'click' : function(e) {},
            'mouseover': function(){infoCaso('caso5', true);},
            'mouseleave': function(){infoCaso('caso5', false);}
        });
    }
    if ($('caso6') != null) {
        $('caso6').addEvents({
            'click' : function(e) {},
            'mouseover': function(){infoCaso('caso6', true);},
            'mouseleave': function(){infoCaso('caso6', false);}
        });
    }

    
});


/**********************************************************/
focusI = function() {
    if ($('resultado') != null) $('resultado').tween('height', '0');
    if ($('enviar') != null)    $('enviar').tween('height', '1');
    if ($('limpia') != null)    $('limpia').tween('height', '1');
    if (document.forms.length != 0 && document.forms[0].id != "none") {
        var TForm = document.forms[0];
        if (TForm.elements.length != 0)
            if (TForm.elements[0].id == "fs") TForm.elements[1].focus();
            else TForm.elements[0].focus();
    }
};

flimpia = function() {
    document.adminLog.reset();
};


fInicio = function(){
    $('btn_login').fade(10);
    setTimeout("$('inicio').fade(0)",500);
    setTimeout("$('inicio').tween('height', '0');",1000);
    setTimeout("$('cuerpo').style.display = 'block';", 1500);
    setTimeout("$('cuerpo').fade(1)",1200);
    
};

fRegresar = function(){
    javascript:history.go(-1);
};

fRegresarError = function(){
    $('resp').tween('height', '0'); 
    $('respBtn').tween('height', '0');
    $('login').tween('height', '309');
};



