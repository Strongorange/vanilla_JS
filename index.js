const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

/*
function handleClick() {
    const currentClass = title.className;
    if (currentClass !== CLICKED_CLASS) {
        title.className = CLICKED_CLASS;
    } else {
        title.className = "";
    }
}
이 친구는 btn 클래스를 지워버림 이전 클래스를 존중하지 않아 */

function handleClick() {
    //const currentClass = title.className; currentClass에 btn cliked가 들어가서 동작하지 않음
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if (!hasClass) {
        title.classList.add(CLICKED_CLASS);
    } else {
        title.classList.remove(CLICKED_CLASS);
    }
}

function init() {
    title.addEventListener("click", handleClick);
}

init();
