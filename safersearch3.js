alert(" safesearch on! ")
var st = prompt(" SearchKeyWord ")
var pagenum = prompt(" YourLanguage(ex:ko or en) ")
var link = "https://scholar.google.com/scholar?hl=" + pagenum + "&as_sdt=0%2C5&q=" + st + "&btnG="
alert(" If you press 'Okay', you will move into the search page. ")
window.open(link);
alert(" Done. Have a nice day :) ")
