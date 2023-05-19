
let btn = document.querySelector(".sendBtn");




let amalChalar = () => {
    let answer = document.querySelector('.answer');
    let amal = document.querySelector('.select-cha');
    let oneInp = document.querySelector(".one-inp");
    let twoInp = document.querySelector(".two-inp");
    let one = Number(oneInp.value);
    let two = Number(twoInp.value);
    switch (amal.value) {
        case "plus" :
            answer.textContent=one+two
            break;
            case "minus" :
                answer.textContent=one-two
                break;
                case "edvition" :
                    answer.textContent=one/two
                    break;
                    case "increment" :
                        answer.textContent=one*two
                        break;
        
    }
}

btn.addEventListener("click", amalChalar)
