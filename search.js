var st = prompt("SearchKeyWord")
var pagenum = prompt("YourLanguage(ex: ko or en)")
var link = "https://scholar.google.com/scholar?hl=" + pagenum + "&as_sdt=0%2C5&q=" + st + "&btnG="
window.location.href = link;
window.location.replace(link);
window.open(link);
