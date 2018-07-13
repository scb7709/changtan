function show( flag) {
    var mycars=new Array("home","GointoLongBeach","Landscapeandcountryside","ExperienceFolklore","Partybuildingandassistance","Contactus")
    switch (flag){
        case home :


            for ( var i = 0; i <mycars.length; i++){
                if(mycars[i]!="home"){
                    document.getElementById(mycars[i]).style.display = "none";
                }

            }
            document.getElementById("home").style.display = "";
            break
        case GointoLongBeach :

            for ( var i = 0; i <mycars.length; i++){
                if(mycars[i]!="GointoLongBeach"){
                    document.getElementById(mycars[i]).style.display = "none";
                }

            }
            document.getElementById("GointoLongBeach").style.display = "";
            break
        case  Landscapeandcountryside:

            for ( var i = 0; i <mycars.length; i++){
                if(mycars[i]!="Landscapeandcountryside"){
                    document.getElementById(mycars[i]).style.display = "none";
                }


            }
            document.getElementById("Landscapeandcountryside").style.display = "";
            break
        case  ExperienceFolklore:

            for ( var i = 0; i <mycars.length; i++){
                if(mycars[i]!="ExperienceFolklore"){
                    document.getElementById(mycars[i]).style.display = "none";
                }

            }
            document.getElementById("ExperienceFolklore").style.display = "";
            break
        case  Partybuildingandassistance:

            for ( var i = 0; i <mycars.length; i++){
                if(mycars[i]!="Partybuildingandassistance"){
                    document.getElementById(mycars[i]).style.display = "none";
                }

            }
            document.getElementById("Partybuildingandassistance").style.display = "";
            break
        case  Contactus:


            for ( var i = 0; i <mycars.length; i++){
                if(mycars[i]!="Contactus"){
                    document.getElementById(mycars[i]).style.display = "none";
                }

            }
            document.getElementById("Contactus").style.display = "";
            break

    }

//alert(document.getElementById("div").style.display)
}

function hidden(flag) {
    switch (flag){
        case home :

            document.getElementById("home").style.display = "none";
            break
        case GointoLongBeach :
            document.getElementById("GointoLongBeach").style.display = "none";
            break
        case  Landscapeandcountryside:
            document.getElementById("Landscapeandcountryside").style.display = "none";
            break
        case  ExperienceFolklore:
            document.getElementById("ExperienceFolklore").style.display = "none";
            break
        case  Partybuildingandassistance:
            document.getElementById("Partybuildingandassistance").style.display = "none";
            break
        case  Contactus:

            document.getElementById("Contactus").style.display = "none";

            break

    }





//alert(document.getElementById("div").style.display)
}
