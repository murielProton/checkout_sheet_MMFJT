function date_yyyy_mm_dd() {
    var fullDate = new Date();
    var date = fullDate.getFullYear() + "_" + (fullDate.getMonth() + 1) + "_" + fullDate.getDate();
    return date;
}
function convertToPDF() {
    var date = date_yyyy_mm_dd();
    var doc = new jsPDF('landscape');
    doc.text(2, 10, document.getElementById("dateDuJour").value);
    doc.text(35, 10, "Ouverture :");
    doc.text(70, 10, document.getElementById("ouverturePrenom").value);
    doc.text(115, 10, document.getElementById("ouvertureNom").value);
    doc.text(160, 10, "Fermeture :");
    doc.text(195, 10, document.getElementById("fermeturePrenom").value);
    doc.text(235, 10, document.getElementById("fermetureNom").value);
    doc.save('feuille_de_caisse_' + date + '.pdf');
}
function euroBillTimesQuantity(input) {
    var euroBill = input.getAttribute("euroBill");
    var displayId = input.getAttribute("targetDisplay");
    document.getElementById(displayId).innerHTML = (euroBill * input.value).toFixed(2);
    openingSumm();
}

function openingSumm() {
    console.log("somme");
    console.log(document.getElementById("Opening50xquantite").value);
    var montant = document.getElementsByClassName("montant");
    var openingSum = 0;
    for (var i = 0; i < montant.length; i++) {
        var contenu = montant.item(i).innerHTML;
        console.log("item " + i);
        console.log(contenu);
        var contenuAsFloat = parseFloat(contenu);
        if (!isNaN(contenuAsFloat)) {
            console.log(contenuAsFloat);
            openingSum = openingSum + contenuAsFloat;
        }
        console.log(openingSum);
    }
    document.getElementById("openingSumm").innerHTML =(openingSum).toFixed(2);
}