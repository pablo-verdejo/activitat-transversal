
var contador = document.getElementById("contador");

var Hoy=new Date()
//Enero=0  Diciembre=11  
var Nav=new Date(Hoy.getFullYear(), 9, 30)

var mseg_dia=1000*60*60*24

var dias


if (Hoy.getMonth()==9 && Hoy.getDate()>30) 

    Nav.setFullYear(Nav.getFullYear()+1) 

dias = Math.ceil((Nav.getTime()-Hoy.getTime())/(mseg_dia))

contador.innerHTML = "Quedan "+dias+" días hasta la cursa"