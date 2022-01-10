//Ex1:
function adjacentElementsProduct(items) {
    var product = null;
    let maxIndex = -1;
    for (var i = 0; i < items.length - 1; i++) {
       let result = items[i] * items[i + 1];
            if (product == null){
                product = result;
                maxIndex=i;
            }
            else if (result > product){
                product = result;
                maxIndex=i;
            }
    }
    console.log(items[maxIndex],items[maxIndex+1]);
    return product;
}
console.log(adjacentElementsProduct([2, 3, -5, -2, 4]));

//Ex2: 
const alternatingSums = array => {
    let team1 = 0, team2 = 0;
    for (let i = 0; i < array.length; i++){
        if( i % 2==0){
            team1 = team1 + array[i];
        }
        else{
            team2 = team2 + array[i];
        }
    }
    return [team1, team2]
}
console.log(alternatingSums([60, 40, 55, 75, 64]));

//Ex 3;
async function getShortenURL() {
    const url = document.getElementById('enterUrl').value;
    const typeUrl = document.getElementById('typeLink').value;
    const resultOK = document.querySelector('.result-ok');
    const resultFalse = document.querySelector('.result-false');
    resultOK.style.display = 'none';
    resultFalse.textContent = "";
    if(url == "") {
        resultFalse.textContent = 'Hãy điền Url bạn muốn rút gọn';
    }
    else {
        const reponse = await fetch(` https://api.shrtco.de/v2/shorten?url=${url}`);
        const resultURL = await reponse.json();
        if(resultURL.ok == true) {
            resultOK.style.display = 'block';
            const resultLink = document.querySelector('.result-ok a')
            if(typeUrl == "1") {
                resultLink.href = `http://${resultURL.result.short_link}`;
                resultLink.textContent = resultURL.result.short_link;
            }
            else if (typeUrl == "2") {
                resultLink.href = `http://${resultURL.result.short_link2}`;
                resultLink.textContent = resultURL.result.short_link2;
            }
            else {
                resultLink.href = `http://${resultURL.result.short_link3}`;
                resultLink.textContent = resultURL.result.short_link3;
            }
        }
        else {
            resultFalse.textContent = 'Không thể rút gọn link';
        }
    }
}

document.getElementById('getLink').addEventListener('click', getShortenURL)