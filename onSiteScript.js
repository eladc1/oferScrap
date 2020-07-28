var allCleanVendors = [];
var allVedorsFromDOM = Array.from(document.querySelectorAll('.prefered'))

allVedorsFromDOM.forEach( item => {
    allCleanVendors.push({
        name: item.children[0].textContent.trim(),
        type: item.children[1].textContent.replace('מתאים לפעילויות:', '').trim(),
        tel: item.children[3].textContent.replace(/\D/g, "")
    });
});

JSON.stringify(allCleanVendors);

// Or, to get all links from: https://www.idati.co.il/%D7%A1%D7%A4%D7%A7%D7%99%D7%9D/%D7%94%D7%A4%D7%99%D7%A0%D7%94-%D7%94%D7%98%D7%A2%D7%99%D7%9E%D7%94-%D7%A9%D7%9C%D7%9A-%D7%91%D7%A6%D7%A4%D7%95%D7%9F/SearchResults?category=&subcategory=&location=
var arr = Array.from(document.querySelectorAll('.fullCardLink'))
JSON.stringify(arr.map( item =>  item.href))