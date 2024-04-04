<%-- 
    Document   : reimpresion
    Created on : 
    Author     : 
--%>
<%@include file="encab.jspf"%>
<fieldset>
    <legend><strong>Reimpresi&oacute;n de Recibo</strong></legend>
    <form id="form4" name="form4" method="post" action="telecomm/ImpRecibo" onsubmit="">
        <div align="center">
            <table border="0px">
                    <tr>
                        <td><label>Num. Folio: </label></td>
                        <td align="left" >
                            <input type="text" id="folioTCM" name="folioTCM" size="12" maxlength="10" onfocus="msg('folioTCM');" onblur="outMsg();" onkeypress="return isNumberKey(event);" onkeydown="return valCopiarPegar(event);"/>
                        </td>
                    </tr>
                    <tr>
                        <td height="10px" ></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="2" height="25px">
                            <div id="msg"></div>
                        </td>
                    </tr>
                </table>
        </div>
        <div id="pieBot">
            <table border ="0px;" style="width: 60%; text-align: center; margin: 0 auto;">
                <tr><td><input type="button" id="limpia" class="btnOpc" value="Limpiar" onclick="limpiar('form4');"/></td>
                    <td><input type="button" id="regresar" class="btnOpc" value="Regresar" onclick="javascript:history.go(-1);"/></td>
                    <td><input type="button" id="reimpr" class="btnOpc" value="Reimprimir" onclick="callSubmit('form4');"/>
                        <input type="hidden" id="band" value="0" size="1" maxlength="1"/>
                    </td>
                </tr>
            </table>
        </div>
    </form>
</fieldset>
<%@include file="pie.jspf"%>
<script>window.onload = function() {limpiar("form4");loader(false);}</script>