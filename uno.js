/*super chino, se pide el ingreso de mercaderia de un supermercado, hasta que el usuario quiera ,se pide:
 tipo (limpieza, comestible, otros)solo estos tres tipos
 nombre del producto
 importe del producto(no mayor a 1000 pesos)
 procedencia (importado, nacional, elaborado)
 peso(no mayor a 30 kilos)
 informar solo si hay:
 a)el nombre del mas pesado de los comestibles.
 b)el nombre del mas caro de todos los productos
 c)el nombre del mas barato de los elaborados
 d)d)el tipo de mercaderia que mas aparece
 e)el porcentaje de productos elaborados por sobre el total
 f)el promedio de pesos por cada topo ingresado.*/ 
 function mostrar()
 {
 
     let salir;
     let tipo;
     let nombreProducto;
     let importe;
     let procedencia;
     let peso;
     let banderaComestible;
     let masPesado;
     let nombreMasPesado;
     let contadorLimpieza;
     let contadorComestible;
     let contadorOtros;
     let masAparece;
     let contadorProductos;
     let contadorElaborados;
     let porcentajeElaborado;
     let promedioLimpieza;
     let promedioConsumibles;
     let promedioOtros;
     let acumuladorComestible;
     let acumuladorLimpieza;
     let acumuladorOtros;
     let banderaProducto;
     let nombreMasCaro;
     let masCaro;
     let banderaElaborado;
     let nombreMasBarato;
     let masBarato;
 
     banderaComestible=0;
     contadorLimpieza=0;
     contadorComestible=0;
     contadorOtros=0;
     contadorProductos=0;
     contadorElaborados=0;
     acumuladorComestible=0;
     acumuladorLimpieza=0;
     acumuladorOtros=0;
     banderaProducto=0;
     banderaElaborado=0;
 
     do
     {
         tipo=prompt("Ingrese tipo:");
         while(isNaN(tipo)==false||tipo!="limpieza"&&tipo!="comestible"&&tipo!="otros")
         {
             tipo=prompt("Error,ingrese tipo:");
         }
 
         nombreProducto=prompt("Ingrese nombreProducto:");
         while(isNaN(nombreProducto)==false)
         {
             nombreProducto=prompt("Error,ingrese nombreProducto:");
         }
 
         importe=prompt("Ingrese importe:");
         importe=parseFloat(importe);
         while(isNaN(importe)==true||importe<0||importe>1000)
         {
             importe=prompt("Error,ingrese importe:");
         }
 
         procedencia=prompt("Ingrese procedencia:");
         while(isNaN(procedencia)==false||procedencia!="importado"&&procedencia!="nacional"&&procedencia!="elaborado")
         {
             procedencia=prompt("Error,ingrese procedencia:");
         }
 
         peso=prompt("Ingrese peso:");
         peso=parseFloat(peso);
         while(isNaN(peso)==true||peso<0||peso>30)
         {
             peso=prompt("Error,ingrese peso:");
         }
 
         switch(tipo)
         {
             case "comestible":
                 if(banderaComestible==0)
                 {
                     masPesado=peso;
                     nombreMasPesado=nombreProducto;
                     banderaComestible++;
                 }
                 else
                 {
                     if(peso>masPesado)
                     {
                         masPesado=peso;
                         nombreMasPesado=nombreProducto;
                     }
                 }
                 acumuladorComestible=acumuladorComestible+peso;
                 contadorComestible++;
             break;
             case "limpieza":
                 acumuladorLimpieza=acumuladorLimpieza+peso;
                 contadorLimpieza++;
             break;
             case "otros":
                 acumuladorOtros=acumuladorOtros+peso;
                 contadorOtros++;
             break;
         }
 
         if(banderaProducto==0)
         {
             masCaro=importe;
             nombreMasCaro=nombreProducto;
             banderaProducto++;
         }
         else
         {
             if(importe>masCaro)
             {
                 masCaro=importe;
                 nombreMasCaro=nombreProducto;
             }
         }
 
         switch(procedencia)
         {
             case "elaborado":
                 if(banderaElaborado==0)
                 {
                     masBarato=importe;
                     nombreMasBarato=nombreProducto;
                     banderaElaborado++;
                 }
                 else
                 {
                     if(importe<masBarato)
                     {
                         masBarato=importe;
                         nombreMasBarato=nombreProducto;
                     }
                 }
                 contadorElaborados++;
             break;
         }
 
         contadorProductos++;

         salir=prompt("Desea salir?");
 
     }while(salir!="si");
 
         if(contadorLimpieza>contadorComestible&&contadorLimpieza>contadorOtros)
         {
             masAparece="limpieza";
 
         }
         else
         {
             if(contadorComestible>contadorOtros)
             {
                 masAparece="comestible";
             }
             else
             {
                 masAparece="otros";
             }
         }
     
     promedioConsumibles=acumuladorComestible/contadorComestible;
     promedioLimpieza=acumuladorLimpieza/contadorLimpieza;
     promedioOtros=acumuladorOtros/contadorOtros;
 
     porcentajeElaborado=contadorElaborados/contadorProductos*100;
 
     alert("de los comestibles, el nombre del producto mas pesado es "+nombreMasPesado);
     alert("El nombre del mas caro de todos los productos es "+nombreMasCaro);
     alert(" El nombre del producto elaborado mas barato es "+nombreMasBarato);
     alert("El tipo de producto que mas aparce es "+masAparece);
     alert("El porcentaje de productos elaborados es "+porcentajeElaborado.toFixed(2)+" por sobre el total");
     alert(" El promedio de comestibles es "+promedioConsumibles+" el promedio de limpieza es "+promedioLimpieza+" y el promedio de otros es "+promedioOtros);
 
 
     
    
 
 
 }
 
 