const clockContainer = document.querySelector(".js-clock"); //시계가 들어가는 div를 지정함 ,css에서 div에 클래스를 준 것이라 생각
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();