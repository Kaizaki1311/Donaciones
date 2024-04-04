<%-- 
    Document   : pagoOportu
    Created on : 29/03/2024, 04:12:00 PM
    Author     : root
--%>
<%@include file="encab.jspf"%>
<script>
    window.onload = function () {
        divActivo(false, "respuestaConf");
        //limpiar("form1");
        loader(false);
    }
</script>
<fieldset>
    <legend><strong>Informaci&oacute;n de la Operaci&oacute;n</strong></legend>
    <div id="divcentral">
        <form id="form1" name="form1">
            <div id="datRef" align="center">
                <table border="0px;" style="width: 100%; text-align: center;">
                    <tr>
                        <td colspan="5" style="font-size: 22px;">TIPO DE DONACION</td>
                        <td rowspan="2" style="/*width: 90px;*/"><img id="imgDonacion" src="images/logo.jpg"/></td>
                    </tr>
                    <tr style="border: 1px purple ridge; height: 25px;">
                        <td>
                            <%//if (opcPago[2].equals("1")) {%>
                            <input type="button" id="btnBoteo" class="btnPro" value="BOTEO" onclick="valPago('bot');"/>
                            <% //}%>
                        </td>
                        <td>
                            <%//if (opcPago[1].equals("1")) {%>
                            <input type="button" id="btnImporte" class="btnPro" value="EFECTIVO" onclick="valPago('imp');"/>
                            <% //}%>
                        </td>
                        <td>
                            <%//if (opcPago[0].equals("1")) {%>
                            <input type="button" id="btnCodigo" class="btnPro" value="TARJETA" onclick="valPago('ref');"/>
                            <% //}%>
                        </td>
                        <td>
                            <%//if (opcPago[3].equals("1")) {%>
                            <input type="button" id="btnCodigo" class="btnPro" value="STICKER" onclick="valPago('stic');"/>
                            <% //}%>
                        </td>
                        <td>
                            <%//if (opcPago[4].equals("1")) {%>
                            <input type="button" id="btnCodigo" class="btnPro" value="STICKER 2021" onclick="valPago('stic21');"/>
                            <% //}%>
                        </td>
                        <!--td style="width: 145px;"></td-->
                    </tr>
                    <tr style="vertical-align: top;">
                        <!--td style="height: 190px;" colspan="4"-->
                        <td colspan="6">
                            <div id="divBot">
                                <%@include file="xDiv_Boteo.jspf"%>
                            </div>
                            <div id="divRef">
                                <%@include file="xDiv_Tarjetas.jspf"%>
                            </div>
                            <div id="divImp">
                                <%@include file="xDiv_Efectivo.jspf"%>
                            </div>
                            <div id="divStic">
                                <%@include file="xDiv_Sticker.jspf"%>
                            </div>
                            <div id="divStic21">
                                <%@include file="xDiv_Sticker_21.jspf"%>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="6">
                            <!--input type="text" id="selector" name="selector" value="" size="1" maxlength="1"/>
                            <input type="text" id="mtd" name="mtd" value="" size="1" /-->
                        </td>
                    </tr>
                    <tr>
                        <td colspan="6">
                            <div id="msg"></div>
                        </td>
                    </tr>
                </table>
            </div>
        </form>
        <center>
            <div id="result"></div>
        </center>
        <input type="hidden" id="selector" name="selector" value="" size="1" maxlength="1"/>
        <div id="pieBot">
            <table border ="0px;" style="width: 90%; text-align: center; margin: 0 auto;">
                <tr>
                    <td>
                        <input type="button" id="limpiar" class="btnOpc" name="limpiar" value="LIMPIAR" onclick="limpiar('form1');" ondblclick="cerrarDiv();" />
                    </td>
                    <td>
                        <input type="button" id="regresar" class="btnOpc" name="regresar" value="REGRESAR" onclick="javascript:history.go(-1);" />
                    </td>
                    <td>
                        <input type="button" id="confirmar" class="btnOpc" value="CONFIRMAR" onclick="datConfirm(true);" />

                        <input type="hidden" id="band" value="0" size="1" maxlength="1"/>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</fieldset>
<%@include file="pie.jspf"%>