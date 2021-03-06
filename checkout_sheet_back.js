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
    	document.getElementById(displayId).innerHTML = (euroBill * input.value).toFixed(2);
	}
    openingSumm();
    closureSumm();
    afterDepositSumm();
	cashierMarkSumm();
	memberShipSumBill();
	memberShipSumComputer();
	diffBetweenCompAndBill();
	diffTotGAndReceipt();
}
// function (l'endroit où apparaît la somme, les montants à additionné)
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
function cashierMarkSumm() {
    summOnSection("montantTicket", "cashierMarkSumm");
	putCashierMarkSummIntoIdReceiptTotal();
	
}
function memberShipSumBill(){
	summOnSection("montantTotalAdherentDuTicket", "membershipSummBill");
}
function memberShipSumComputer(){
	summOnSection("montantTotalAdherentOrdinateur", "membershipSummComputer");
}
function diffBetweenCompAndBill(){
	var totMemberShipSumBill = document.getElementById("membershipSummBill").innerHTML;
	var totMemberShipSumComputer = document.getElementById("membershipSummComputer").innerHTML;
	var whereToDisplay = document.getElementById("diffBetweenCompAndBill");
	var diffBetweenCompAndBill = totMemberShipSumComputer - totMemberShipSumBill;
	whereToDisplay.innerHTML = diffBetweenCompAndBill;
}
function putCashierMarkSummIntoIdReceiptTotal(){
document.getElementById("receiptTotal").value = document.getElementById("cashierMarkSumm").innerHTML;
}
function diffClosingMinusOpening(){
	var openingTotalA = document.getElementById("openingSumm").innerHTML;
	var closingTotalB = document.getElementById("closureSumm").innerHTML;
	var whereToDisplay = document.getElementById("recetteBmoinsA");
	var diffBetweenBandA = closingTotalB - openingTotalA;
	whereToDisplay.innerHTML = diffBetweenBandA;
	return diffBetweenBandA.toFixed(2);
}
function diffTotGAndReceipt (){
	var totalG = diffClosingMinusOpening();
	var receiptString = document.getElementById("receiptTotal").value;
	var receiptFloat =  parseFloat(receiptString);
	var totalH = totalG - receiptFloat;
	var whereToDisplay = document.getElementById("totH");
	whereToDisplay.innerHTML = totalH.toFixed(2) ;
}

