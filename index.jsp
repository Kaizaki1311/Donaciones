<%-- 
    Document   : index
    Created on : 29/03/2024, 05:35:06 PM
    Author     : 
--%>
<%@include file="encab.jspf"%>
<script language="JavaScript" type="text/javascript">	        
            window.onload = function() {info(true);}
</script>
<div id="botones_Ini">
    <center>   
        <table border="0px" style="width: 80%;">
        <tr>
            <td width="50px" ></td>
            <td align="left" valign="bottom" >
                <input type="button" id="btnDonaciones" name="btnDonaciones" onclick="location.href = 'pagoTeleton.jsp';" class="btnLinks" value="&raquo; OPCIONES DE DONACI&Oacute;N "/>
            </td>
            <td rowspan="3" align="center" >
                <img id="logo_qs" src="images/logo.jpg" alt="Donacion"/>
            </td>
        </tr>
        <tr style=" height: 20px" > 
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td width="50px" ></td>
            <td align="left" valign="top" >
                <input type="button" id="btnReImpresion" name="btnReImpresion" onclick="location.href = 'reimpresion.jsp';" class="btnLinks" value="&raquo; REIMPRESI&Oacute;N DE RECIBO"/>
            </td>
        </tr>
    </table>
    </center>
</div>
<%@include file="pie.jspf"%>