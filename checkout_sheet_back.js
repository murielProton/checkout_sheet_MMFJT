function date_yyyy_mm_dd(){
    var fullDate = new Date();
    var date = fullDate.getFullYear()+"_"+(fullDate.getMonth()+1)+"_"+fullDate.getDate();
    return date;
}
function convertToPDF() {
    var date = date_yyyy_mm_dd();
    var doc = new jsPDF('landscape');
    doc.text(5, 10, "ouverture :");
    doc.text(35, 10, document.getElementById("prenom").value);
    doc.text(70, 10, document.getElementById("nom").value);
    doc.save('feuille_de_caisse_'+ date + '.pdf');
}