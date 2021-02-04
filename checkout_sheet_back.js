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
	if(input != null){
		
    	var euroBill = input.getAttribute("euroBill");
    	var displayId = input.getAttribute("targetDisplay");
	console.log(euroBill);
	console.log(displayId);
	console.log(document.getElementById(displayId));
    	document.getElementById(displayId).innerHTML = (euroBill * input.value).toFixed(2);
	}
    openingSumm();
    closureSumm();
    afterDepositSumm();
	memberShipSumBill();
	memberShipSumComputer();
}
function summOnSection(classNameMontant, idSommeMontant) {
    var listMontant = document.getElementsByClassName(classNameMontant);
    var sumAsFloat = 0;
    for (let i = 0; i < listMontant.length; i++) {
        var celluleMontant = listMontant.item(i);
		var contenu = celluleMontant.innerHTML;
		if(celluleMontant instanceof HTMLInputElement && celluleMontant.type == 'text'){
			contenu = celluleMontant.value;
		}
        
        var contenuAsFloat = parseFloat(contenu);
        if (!isNaN(contenuAsFloat)) {
            sumAsFloat = sumAsFloat + contenuAsFloat;
        }
    }
    var celuleSomme = document.getElementById(idSommeMontant);

    celuleSomme.innerHTML = (sumAsFloat).toFixed(2);
}
function openingSumm () {
    summOnSection("montantOuverture", "openingSumm");
}
function closureSumm() {
    summOnSection("montantFermeture", "closureSumm");
}
function afterDepositSumm() {
    summOnSection("montantApresDepot", "afterDepositSumm");
}
function memberShipSumBill(){
	summOnSection("montantTotalAdherentDuTicket", "membershipSumm");
}
function memberShipSumComputer(){
	summOnSection("montantTotalAdherentOrdinateur", "membershipSumm");
}
function findValue(){
    var valuecheque = document.getElementById("ClosureCheque").value;
	console.log("find value Cheque",valuecheque);
	var valuecb = document.getElementById("ClosureCarteCredit").value;
	console.log("find value CB",valuecb);
}