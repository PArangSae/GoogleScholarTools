console.log(" :) Safe Search in Google Scholar :) ")
alert(" safesearch on! ")
var st = prompt(" SearchKeyWord ")
var pagenum = prompt(" YourLanguageNameInEnglish(ex:Korean or English) ")
if pagenum == 'Korean' { 
var dallang = ko
}
if pagenum == 'English' { 
var dallang = en
}
if pagenum == 'Chinese' { 
var dallang = zh
}
if pagenum == 'Japanese' { 
var dallang = ja
}
if pagenum == 'Arabic' { 
var dallang = ar
}
var link = "https://scholar.google.com/scholar?hl=" + dallang + "&as_sdt=0%2C5&q=" + st + "&btnG="
alert(" If you press 'Okay', you will move into the search page. ")
window.open(link);
alert(" Done. Have a nice day :) ")
