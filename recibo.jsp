<%-- 
    Document   : recibo
    Created on : 7/11/2012, 09:52:24 AM
    Author     : Telecomm
--%>
<%@page import="java.util.Calendar"%>
<%@page import="java.text.DecimalFormat"%>
<!--%@ page import ="telecomm.*" %-->
<%@page import="telecomm.utilerias"%>
<%@page import="beans.Recibo"%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%
    utilerias util = new utilerias();
    DecimalFormat f = new DecimalFormat("$ #.00");
    Recibo rcb = new Recibo();
    Calendar calendario = Calendar.getInstance();
    int anio = 0;
    anio = calendario.get(Calendar.YEAR);

    int mtd = (Integer) session.getAttribute("mtd");
    rcb = (Recibo) session.getAttribute("rcb");
    String referencia = rcb.getReferencia();
    String folioTele = rcb.getFolioCliente();
    String importe = rcb.getMontoT();
    String horaCobro = rcb.getHora();
    String folioTCM = rcb.getFolio();
    String oficina = rcb.getOficina();
    String monograma = rcb.getMonograma();
    String numemp = rcb.getNumEmp();
    String fechaP = rcb.getFecha();
    String nomoficina = rcb.getNombreOfna();
    //String aPaterC = (String) session.getAttribute("aPaterC");
    String aPaterC = rcb.getaPaterno();
    //String aMaterC = (String) session.getAttribute("aMaterC");
    String aMaterC = rcb.getaMaterno();
    //String nomC = (String) session.getAttribute("nomC");
    String nomC = rcb.getNombre();
    String leyenda = rcb.getLeyenda();
    String producto = rcb.getCuenta();
    String login = (String) session.getAttribute("login");
    
    String donacion = "";

    //System.out.println(oficina + "|" + referencia + "|" + folioTCM + "|" + "Datos Recibo |ref: " + referencia + "|imp: " + importe + "|horaCobro: " + horaCobro + "|folioTCM: " + folioTCM + "|oficina: " + oficina + "|monograma: " + monograma + "|numemp: " + numemp + "|nomOficina: " + nomoficina);
%>
<html>
    <head><title>Recibo de TELETON</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="shortcut icon" href="favicon.ico">
        <link rel="icon" type="image/gif" href="img/favicon1.gif">
        <link rel="stylesheet" type="text/css" href="estilo/recibo.css"/>
        <script type="text/javascript" src="script/Eventos.js"></script> 
    </head>
    <body bgcolor="white" text="black">
        <div id="marcoR">
            <div style="height: 20px"></div>
            <% if (mtd == 1) {%>
            <div align="center" class="Estilo2">RECIBO DE COBRANZA POR CUENTA DE TERCEROS</div>
            <%} else if (mtd == 2) {%>
            <div align="center" class="Estilo2">REIMPRESION DE RECIBO DE COBRANZA POR CUENTA DE TERCEROS</div>
            <%}%>
            <div align="center" class="Estilo2">TELETON <%out.println(anio);%> </div>
            <table width="700px" border="0px" cellspacing="0" cellpadding="0" class="Estilo2">
                <tr>
                    <td width="340" align="center"><p></p></td>
                    <td width="360"><b>Folio Telecomm: <%out.println(folioTCM);%></b></td>
                </tr>
                <tr align="left">
                    <td>Sucursal: <%out.println(oficina.trim() + " - " + nomoficina.trim());%></td>
                    <td></td>
                </tr>
                <tr align="left">
                    <td>Monograma: <%out.println(monograma);%></td>
                    <td width="370"></td>
                </tr>
                <tr align="left">
                    <%if (mtd == 1) {%>
                    <td>Fecha/Hrs. del Cobro: <%out.println(fechaP + "  /  " + horaCobro + "<br>");%></td>
                    <%} else {%>
                    <td>Fecha/Hrs. del Cobro: <%out.println(fechaP + "  /  " + horaCobro + "<br>");%></td>
                    <%}%>
                    <td width="370"></td>
                </tr>
                <tr align="left">
                    <td colspan="2">Servicio: <%out.println("Cobranza TELETON");%> <%/*out.println(municipio.trim());*/%></td>
                    <!--td width="370"></td-->
                </tr>
                <%if (producto.equals("1")) {donacion = "Tarj"; %>
                <tr align="left">
                    <td width="370" height="30"><b>Donaci&oacute;n con Tarjeta</b></td>
                    <td></td>
                </tr>
                <tr align="left">
                    <td width="370" height="30"><b>Codigo de Barras: <%out.println(referencia);%></b></td>
                    <td></td>
                </tr>
                <tr align="left">
                    <td width="370" height="30"><b>Folio TELETON: <%out.println(folioTele);%></b></td>
                    <td></td>
                </tr>
                <%} else if (producto.equals("2")) {donacion = "Efec";%>
                <tr align="left">
                    <td width="370" height="30"><b>Donaci&oacute;n en Efectivo</b></td>
                    <td></td>
                </tr>
                <!--tr align="left">
                    <td width="370" height="30"><p></p></td>
                    <td></td>
                </tr-->
                <!--tr align="left">
                    <td width="370" height="30"><p></p></td>
                    <td></td>
                </tr-->
                <%} else if (producto.equals("3"))  {donacion = "Bote";%>
                <tr align="left">
                    <td width="370" height="30"><b>Donaci&oacute;n con Boteo</b></td>
                    <td></td>
                </tr>
                <tr align="left">
                    <td width="370" height="30"><b>Numero de Bote: <%out.println(folioTele);%></b></td>
                    <td></td>
                </tr>
                <!--tr align="left">
                    <td width="370" height="30"><p></p></td>
                    <td></td>
                </tr-->
                <%} else if (producto.equals("4")) {donacion = "Sticker";%>
                <tr align="left">
                    <td width="370" height="30"><b>Donaci&oacute;n con Sticker</b></td>
                    <td></td>
                </tr>
                <tr align="left">
                    <td width="370" height="30"><b>Codigo de Barras: <%out.println(referencia);%></b></td>
                    <td></td>
                </tr>
                <tr align="left">
                    <td width="370" height="30"><b>Folio TELETON: <%out.println(folioTele);%></b></td>
                    <td></td>
                </tr>
                <%}else if (producto.equals("5")) {donacion = "Sticker21";%>
                <tr align="left">
                    <td width="370" height="30"><b>Donaci&oacute;n con Sticker</b></td>
                    <td></td>
                </tr>
                <tr align="left">
                    <td width="370" height="30"><b>Codigo de Barras: <%out.println(referencia);%></b></td>
                    <td></td>
                </tr>
                <tr align="left">
                    <td width="370" height="30"><b>Folio TELETON: <%out.println(folioTele);%></b></td>
                    <td></td>
                </tr>
                <%}%>
                <!--tr>
                    <td></td>
                    <td width="370"></td>
                </tr-->
            </table>
            <table width="700px" border="0px" cellspacing="0" cellpadding="0" class="Estilo2">
                <!--tr align="left" >
                    <td> Apellido Paterno: <%/*out.println(aPaterC);*/%></td>
                </tr>
                <tr align="left" >
                    <td> Apellido Materno: <%/*out.println(aMaterC);*/%></td>
                </tr-->
                <tr align="left">
                    <td><!--Grupo: --><%/*out.println(nomC);*/%></td>
                </tr>
                <tr align="left">
                    <td><br></td>
                </tr>
                <tr align="left">
                    <td><b> Importe Total: <%out.println("$" + importe);
                        out.println(util.conversor(importe));%></b></td>
                </tr>
                <tr align="left">
                    <td></td>
                </tr>
                <tr>
                    <td><br></td>
                </tr>
                <!--tr align="left">
                    <td><%/*if(impuesto.equals("NO")){ out.println("");} else {out.println("Impuesto: " + impuesto);}*/%></td>
                </tr-->
                <tr>
                    <td><br></td>
                </tr>
                <tr align="left">
                    <td><% out.println("S&oacute;lo t&uacute; puedes solicitar tu recibo deducible de impuestos, antes del 30 de enero de 2022.");%></td>
                </tr>
                <tr align="left">
                    <td><% out.println("Env&iacute;a un correo a recibos@teleton.org.mx junto con tus datos fiscales y tu comprobante de donaci&oacute;n o llama sin costo al 800 TELETON (800.835.38.66) donde con gusto te atenderemos.");%></td>
                </tr>
                <tr align="left">
                    <td><% out.println("Agradecemos tu generosidad.");%></td>
                </tr>
                <tr align="left">
                    <td><%out.println("");%></td>
                </tr>
                <tr align="left">
                    <td><br><%out.println("");%></td>
                </tr>
            </table>
            <table width="700px" border="0px" cellspacing="0" cellpadding="0" class="Estilo2">
                <tr>
                    <td>
                        <p align="center">Operador</p>
                        <div align="center">_________________________________</div>
                        <div align="center">Empleado <%out.println("");%></div>
                        <div align="center">Num: <%out.println(numemp);%></div>
                    </td>
                    <td>
                        <p align="center">Cliente</p>
                        <div align="center">_________________________________</div>
                        <div align="center">Manifiesto que los datos asentados</div>
                        <div align="center">en el presente comprobante, son correctos</div>
                    </td>
                </tr>
            </table>
            <br/>
            <div class="pie">
                <%out.println("");%>
                <%out.println("");%>
            </div>
            <center>
                <button type="button" id="btnImpG" name="btnImpG" onclick="imprimir(this);">
                    <div class="alT1"><img src="images/imprime.png" alt="I"/></div><div class="alT4">Imprimir</div>
                </button> 
            </center>
        </div>
    </body>
</html>
<%utilerias.log.info(oficina + "|" + login + "|" + numemp + "|" + donacion + "|" + referencia + "|" + folioTele + "|" + importe + "|" + folioTCM + "|Recibo Impreso************OK");%>