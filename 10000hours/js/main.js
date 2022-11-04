// section
const loadingSection = document.querySelector(".cont-result-loading");
const resultSection = document.querySelector(".cont-result");
const modalSection = document.querySelector("#modal");

// button
const startButton = document.querySelector(".btn-exc");
const openButton = document.querySelector(".btn-go");
const closeButton = document.querySelector(".btn-close");
const shareButton = document.querySelector(".btn-share");

function calculate(){
    const fieldValue = document.querySelector("#inp-field");
    const timeValue = document.querySelector("#inp-time");
    // console.log(fieldValue.value, timeValue.value);
    // console.log(typeof(timeValue.value));

    if (fieldValue.value === "" || timeValue.value === ""){
        alert("비정상 접근입니다.")
        return
    } else if (timeValue.value >= 24) {
        alert("24시간이 모자라~🎵")
        return
    } else if (timeValue.value >= 12) {
        alert("우리의 육체는 🤖이 아닙니다. 삐리뽀뽀")
        return
    }

    
    //cont-result-loading이 먼저 보이고 result가 보여야 합니다.
    loadingSection.style.display = "block";

    setTimeout(function(){
        const fieldResult = document.querySelector(".field-result");
        const timeResult = document.querySelector(".time-result");

        loadingSection.style.display = "none";
        resultSection.style.display = "block";

        fieldResult.innerText = fieldValue.value;
        timeResult.innerText = 10000 / timeValue.value;
    }, 1500)
}

function openModal(){
    modalSection.style.display = "block";
}

function closeModal(){
    modalSection.style.display = "none";
}

function copyUrl(){
    // 3가지 방법
    // 1번째: 구버전(이제는 잘 사용하지 않습니다.)
    // 2번째: 신버전(Safari 13.1 버전부터 https 환경에서만 작동하는 코드)
    // 3번째: clipboard.js 라이브러리 사용하는 방법

    // 1
    // let url = window.location.href;
    // console.log(url);

    // let temp = document.createElement('input')
    // temp.value = url;
    // document.body.appendChild(temp);
    // temp.select();
    // document.execCommand("copy");
    // document.body.removeChild(temp);
    // alert("URL이 복사되었습니다.")

    // 2
    let url = window.location.href;
    navigator.clipboard.writeText(url)
    .then(() => {
        alert("URL이 복사되었습니다.")
    })
    .catch(err => {
        alert("URL이 복사되지 않았습니다. 호환되는 브라우저가 아닙니다.")
        console.log(err);
    })
}

startButton.addEventListener('click', calculate)
openButton.addEventListener('click', openModal)
closeButton.addEventListener('click', closeModal)
shareButton.addEventListener('click', copyUrl)

window.onclick = function (event) {
    if(event.target === modalSection){
        closeModal();
    }
}