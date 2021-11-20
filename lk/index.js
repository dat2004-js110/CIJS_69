let numberLucky = Math.floor(Math.random() * 10);
console.log(numberLucky);
let countPlay = 3;

let numberInput = document.getElementById("numberLucky");
let buttonPlay = document.getElementById("play");
buttonPlay.addEventListener('click', clickPlay);

function clickPlay(){
    if(countPlay == 0){
        alert(`Bạn đã hết lượt dự đoán!`);
        numberInput.value = "";
    }
    else if (numberInput.value < 1 || numberInput.value > 10){
        alert(`Con số dự đoán phải nằm trong khoảng từ 1 đến 10!\nMời bạn nhập lại!\nBạn còn ${countPlay} lượt đoán!`);
        numberInput.value = "";
    }
    else{
        countPlay--;
        let result = "";
        if(numberInput.value == numberLucky) {
            result += "Chúc mừng bạn đã chọn đúng số!";
        }
        else{
            result += `Rất tiếc! Bạn đã chọn sai số đã dự đoán!\nBạn còn ${countPlay} lượt đoán!\nChúc bạn may mắn!`;
        }
        numberInput.value = "";
        alert(result);
    }
}
