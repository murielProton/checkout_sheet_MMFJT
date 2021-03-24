# checkout_sheet_MMFJT
I volunteer at play-based pub in Lyon. Currently we wright our checkout sheets by hand. I want to make  a digital one, to speed things up.

To make this repo work :
1. Copy this repo on your computer
2. Open checkout_sheet_form.html with browser ( Firefox, Edge ... )


Technologies :
Languages
This tool was made for a french organasation, there for I chose UFT-32 in order to compile é, € and so on.

Display and Cache :
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" /> this been added so it would ease the developpement session of it all. As my cash keep interfearing with the display in Firefox.

The Files and there roles
Front
In order not to have too many lines in one file, I've devided my work in several files depending on the subject of the check out. I've displayed all of theese forms in one file to be opened in your browser. 
checkout_sheet_form.html  -> this file regroupes all of the other file to display them as a group, and to be filled by the volunteer on line.

Here is a list alphabeticaly ordered of all the files and their roles.
checkout_sheet_comments.html -> form for the volunteer to comment on his or her shift. 
checkout_sheet_form_after_cash_deposit.html  -> form for the volunteer to input the cash still in the register after the déposit for the bank.
checkout_sheet_form_bill_copy.html  -> form for the volunteer to copy the receipt of the cash register in.
checkout_sheet_form_closing.html  -> form for the volunteer to set the number of bills and coins present in the cash register at the end of the shift.
checkout_sheet_form_computer.html  -> form for the volunteer to compare what was registered by the computer and what was registered by the cash register. ( memberships )
checkout_sheet_form_opening.html  -> form for the volunteer to set the number of bills and coins present in the cash register at the beginig of the shift.
checkout_sheet_form_income.html  -> form for the volunteer to se what was the turnover of his ou her shift.
rules_for_cash_deposit.html -> simple writen explanation on what should be put in the banck after the shift. It also sets what cash volunteers need at the begining of shift.

Layout :
To have a propper layout, to know immediately where to find the layout, I've dedicated one and only file to that.
checkout_sheet_style.html  -> file where the developper can fix or change the layout of the form.

Back :
The back end is handeled in JavaScript. This choice was made in order to facilitate the depolyement part of the prodject.
checkout_sheet_back.js -> file where the developper can change or fix the way things are calculated. As this project is one big calculator.

Spécifications :
feuille_de_caisse_cb-1.ods
This is what it should look like after exporting it in PDF. And this is what I used to create my on line form. It is what we curently use at the end of our shifts.

