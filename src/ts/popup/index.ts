import '../../sass/style.sass';
const calcInput = document.getElementById("calc-input");

interface IKeyboardEvent extends KeyboardEvent {
    target: HTMLInputElement,
}

interface ICalcResponse {
    number: number
}

calcInput.addEventListener("keypress", (e: IKeyboardEvent) => {
    if (e.key === "Enter") 
        chrome.runtime.sendMessage({ text: e.target.value.trim() }, (response: ICalcResponse) => {
            document.getElementById("output").innerText = response!.number.toString();
        });
})



