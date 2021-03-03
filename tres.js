/*pedir el ingreso de 10 mascotas
validar
tipo(gato,perro,pajaro, otros)solo esos cuatro tipos
raza, si es perro(pastor, toy, callejero)y si es gato (siames, turco,peterbald,generico)
y si es de tipo otros o pajaro, pedir solo un texto.
edad entre 1 y 20 para gatos y perros, para otros entre 1 y 100, pára pajaro entre 1 de 50
nombre(no se permite solo numero)
mostrar por cada tipo el nombre del mas viejo, solo si hay de ese tipo
mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza.*/
function mostrar()
{
	let i;
	let tipo;
	let raza;
	let edad;
	let nombre;
	let banderaGato;
	let banderaPerro;
	let banderaPajaro;
	let banderaOtros;
	let masViejoGato;
	let masViejoPerro;
	let masViejoPajaro;
	let masViejoOtros;
	let nombreMasViejoGato;
	let nombreMasViejoPerro;
	let nombreMasViejoPajaro;
	let nombreMasViejoOtros;
	let contadorGatosRazaSiames;
	let contadorGatosRazaTurco;
	let contadorGatosRazaPeterbald;
	let contadorGatosRazaGenerico;
	let acumuladorGatosRazaSiames;
	let acumuladorGatosRazaTurco;
	let acumuladorGatosRazaPeterbald;
	let acumuladorGatosRazaGenerico;
	let promedioEdadRaza;
	let razaMayorAnimales;

	i=0;
	banderaGato=0;
	banderaPerro=0;
	banderaPajaro=0;
	banderaOtros=0;
	acumuladorGatosRazaSiames=0;
	acumuladorGatosRazaTurco=0;
	acumuladorGatosRazaPeterbald=0;
	acumuladorGatosRazaGenerico=0;
	contadorGatosRazaSiames=0;
	contadorGatosRazaTurco=0;
	contadorGatosRazaPeterbald=0;
	contadorGatosRazaGenerico=0;


	while(i<4)
	{
		tipo=prompt("Ingrese tipo de mascota(gato,perro,pajaro, otros):");
		while(isNaN(tipo)==false||tipo!="gato"&&tipo!="perro"&&tipo!="pajaro"&&tipo!="otros")
		{
			tipo=prompt("Error,ingrese tipo de mascota(gato,perro,pajaro, otros):");
		}

		switch(tipo)
		{
			case "gato":

				raza=prompt("Ingrese raza de mascota(siames, turco,peterbald,generico):");
		        while(isNaN(raza)==false||raza!="siames"&&raza!="turco"&&raza!="peterbald"&&raza!="generico")
		        {
			       raza=prompt("Error,ingrese raza de mascota(siames, turco,peterbald,generico):");
		        }

				edad=prompt("Ingrese edad de mascota:");
				edad=parseInt(edad);
		        while(isNaN(edad)==true||edad<1||edad>20)
		        {
			       edad=prompt("Error,ingrese edad de mascota:");
		        }
		    break;
			case "perro":

				raza=prompt("Ingrese raza de mascota(pastor, toy, callejero):");
		        while(isNaN(raza)==false||raza!="pastor"&&raza!="toy"&&raza!="callejero")
		        {
			       raza=prompt("Error,ingrese raza de mascota(pastor, toy, callejero):");
		        }

				edad=prompt("Ingrese edad de mascota:");
				edad=parseInt(edad);
				while(isNaN(edad)==true||edad<1||edad>20)
		        {
			       edad=prompt("Error,ingrese edad de mascota:");
		        }
		    break;
			case "pajaro":

				raza=prompt("Ingrese raza de mascota:");
		        while(isNaN(raza)==false)
		        {
			       raza=prompt("Error,ingrese raza de mascota:");
		        }

				edad=prompt("Ingrese edad de mascota:");
				edad=parseInt(edad);
				while(isNaN(edad)==true||edad<1||edad>50)
		        {
			       edad=prompt("Error,ingrese edad de mascota:");
		        }
			break;
			case "otros":

				raza=prompt("Ingrese raza de mascota:");
		        while(isNaN(raza)==false)
		        {
			       raza=prompt("Error,ingrese raza de mascota:");
		        }

				edad=prompt("Ingrese edad de mascota:");
				edad=parseInt(edad);
				while(isNaN(edad)==true||edad<1||edad>100)
		        {
			       edad=prompt("Error,ingrese edad de mascota:");
		        }
		    break;
		}

		nombre=prompt("Ingrese nombre de mascota:");
		while(isNaN(nombre)==false)
		{
			nombre=prompt("Error,ingrese nombre de mascota:");
		}


		switch(tipo)
		{
			case "perro":
				if(banderaPerro==0)
				{
					masViejoPerro=edad;
					nombreMasViejoPerro=nombre;
					banderaPerro++;
				}
				else
				{
					if(edad>masViejoPerro)
					{
						masViejoPerro=edad;
					    nombreMasViejoPerro=nombre;
					}
				}
			break;
			case "gato":
				if(banderaGato==0)
				{
					masViejoGato=edad;
					nombreMasViejoGato=nombre;
					banderaGato++;
				}
				else
				{
					if(edad>masViejoGato)
					{
						masViejoGato=edad;
					    nombreMasViejoGato=nombre;
					}
				}

				switch(raza)
				{
					case "siames":
						acumuladorGatosRazaSiames=acumuladorGatosRazaSiames+edad;
						contadorGatosRazaSiames++;
					break;
					case "turco":
						acumuladorGatosRazaTurco=acumuladorGatosRazaTurco+edad;
						contadorGatosRazaTurco++;
					break;
					case "peterbald":
						acumuladorGatosRazaPeterbald=acumuladorGatosRazaPeterbald+edad;
						contadorGatosRazaPeterbald++;
					break;
					case "generico":
						acumuladorGatosRazaGenerico=acumuladorGatosRazaGenerico+edad;
						contadorGatosRazaGenerico++;
					break;
				}
			break;
			case "pajaro":
				if(banderaPajaro==0)
				{
					masViejoPajaro=edad;
					nombreMasViejoPajaro=nombre;
					banderaPajaro++;
				}
				else
				{
					if(edad>masViejoPajaro)
					{
						masViejoPajaro=edad;
					    nombreMasViejoPajaro=nombre;
					}
				}
			break;
			case "otros":
				if(banderaOtros==0)
				{
					masViejoOtros=edad;
					nombreMasViejoOtros=nombre;
					banderaOtros++;
				}
				else
				{
					if(edad>masViejoOtros)
					{
						masViejoOtros=edad;
					    nombreMasViejoOtros=nombre;
					}
				}
			break;
		}
		i++;
	}

	if(contadorGatosRazaSiames>contadorGatosRazaTurco&&contadorGatosRazaSiames>contadorGatosRazaPeterbald&&contadorGatosRazaSiames>contadorGatosRazaGenerico)
	{
		razaMayorAnimales="siames";
		promedioEdadRaza=acumuladorGatosRazaSiames/contadorGatosRazaSiames;	
	}
	else
	{
		if(contadorGatosRazaTurco>contadorGatosRazaPeterbald&&contadorGatosRazaTurco>contadorGatosRazaGenerico)
		{
			razaMayorAnimales="turco";
		    promedioEdadRaza=acumuladorGatosRazaTurco/contadorGatosRazaTurco;
		}
		else
		{
			if(contadorGatosRazaPeterbald>contadorGatosRazaGenerico)
			{
				razaMayorAnimales="peterbald";
		        promedioEdadRaza=acumuladorGatosRazaPeterbald/contadorGatosRazaPeterbald;
			}
			else
			{
				razaMayorAnimales="generico";
		        promedioEdadRaza=acumuladorGatosRazaGenerico/contadorGatosRazaGenerico;
			}	
		}
	}
	if(masViejoPerro!=undefined)
	{
		alert("El nombre del perro mas viejo es "+nombreMasViejoPerro);
	}

	if(masViejoGato!=undefined)
	{
		alert("El nombre del gato mas viejo es "+nombreMasViejoGato);
	}

	if(masViejoPajaro!=undefined)
	{
		alert("El nombre del pajaro mas viejo es "+nombreMasViejoPajaro);
	}

	if(masViejoOtros!=undefined)
	{
		alert("El nombre de tipo de mascota otros mas viejo es "+nombreMasViejoOtros);
	}

	alert("La raza de gatos con mas animales es "+razaMayorAnimales+"y su promedio de edad es de "+promedioEdadRaza);

}//fin de la funcion
