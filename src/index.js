const inputTxt = document.getElementById('inpTxt');
const sendMsgBtn = document.getElementById('sendMsgBtn');
const getMemoryBtn = document.getElementById('getMemoryBtn');
const spanCount = document.getElementById('spanCount');

const setSpanText = (data) => {
    spanCount.textContent = data
}

// window.bridgeAPI.onCount()

window.bridgeAPI.onCount((data) => {
    spanCount.textContent = data
})

sendMsgBtn.addEventListener('click', () => {
    console.log(inpTxt.value);
    window.bridgeAPI.sendMsg(inpTxt.value);
})


getMemoryBtn.addEventListener('click', async ()=> {
    let result = await window.bridgeAPI.sendPromise("Hello CPU");

    console.log(result);
})