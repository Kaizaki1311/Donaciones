<%-- 
    Document   : mensajes
    Created on : 7/11/2012, 09:07:37 AM
    Author     : Telecomm
--%>
<%@page import="telecomm.utilerias"%>
<%@page import="beans.mensaje"%>

<%
            mensaje msg = new mensaje();
            String tit = ""; 
            String mensaje = ""; 
            Integer men = 0; 
            try {
                    msg = (mensaje)session.getAttribute("mensaje");
                } catch (Exception e) {
                    System.out.println("catch msg:" + e.getMessage());
                }
            if(msg != null){
                 tit = msg.getTitulo(); 
                 mensaje = msg.getMensaje(); 
                 men = msg.getNum(); 
            }else {
                //System.out.println("msg Null");
            }
            //Integer men = -10;
            //String folio = (String) session.getAttribute("folio");
           /* if (folio == null){  folio = "";
                               } /*else{ folio = "<br/>Folio: " + folio;}*/
            //int men = (Integer) session.getAttribute("Nmen");
            if (tit == null || tit.equals("")) {
            mensaje = "Problemas con el Navegador, Hay que habilitar los action script";
            } 
%>

<%@include file="encab.jspf"%>
<div align="center">
    <h4>MENSAJES DEL SERVIDOR</h4>
    <h3><%out.write("<a class='ok1'>****" + men + "| " + tit + " |****</a>");%></h3>
</div>
<div align="center">
    <%out.write(mensaje);%>
</div>
<br><br>
<div align="center">
    <%if (men == 1) {%>
    <input type="button" value="Regresar" onClick="backLimpiar(1)">
    <%} else {%>
    <input type="button" value="Regresar" onClick="backLimpiar(0)">
    <%}%>
</div>
<%@include file="pie.jspf"%>
<%if (men == 1) {
                /*session.invalidate();*/
            }%>