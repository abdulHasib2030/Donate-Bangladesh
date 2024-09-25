

function idDected(id) {
    const idResult = document.getElementById(id)
    return idResult
}

function donateTk(inputValue, totalAmount, tk, title) {
    if (isNaN(inputValue.value) || Number(inputValue.value) < 0 || inputValue.value === '') {
        alert("Invalid Donation Amount.")
        inputValue.value = ''
        return Number(tk)
    }
    else if (Number(totalAmount) < Number(inputValue.value)) {
        inputValue.value = ''
        alert(`Your balance is ${totalAmount}. You can't pay more than that.`)
        return Number(tk)
    }
    else {
        totalTk.innerText = Number(totalAmount) - Number(inputValue.value)
        const totaltk = Number(tk) + Number(inputValue.value)
        myModel.showModal()
        const options = {
            timeZone: 'Asia/Dhaka',
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        };
        const currentDateTime = new Date().toLocaleString('en-US', options);

        historyEl.innerHTML += `
          <div class="border-2 p-8 rounded-2xl mt-5">
                <h4 class="font-bold text-xl ">${inputValue.value} ${title}</h4>
                <p class="pt-4 text-[#111111B3]">Date : ${currentDateTime} GMT +0600 (Bangladesh Standard Time)
                </p>
            </div>
        `
        inputValue.value = ''
        return totaltk
    }

}
// function clickEventChange()

const donationBtn = idDected('donation-btn')
const historyBtn = idDected('history-btn')
const donationEl = idDected('donation-element')
const historyEl = idDected('history-element')
const totalTk = idDected('total-tk')
const noakhaliFloodTk = idDected('noakhali-flood-tk')
const noakhaliInput = idDected('noakhali-input')
const noakhaliBtn = idDected('noakhali-btn')
const feniInput = idDected('feni-input')
const feniFloodTk = idDected('feni-flood-tk')
const feniBtn = idDected('feni-btn')
const quotaProtestTk = idDected('quota-protest-tk')
const quotaProtestInput = idDected('quota-protest-input')
const quotaProtestBtn = idDected('quota-protest-btn')
const myModel = idDected('my_modal_3')



donationBtn.addEventListener('click', function () {
    console.log("hello")
    donationEl.classList.remove('hidden');
    historyEl.classList.add('hidden')
    donationBtn.style.backgroundColor = '#B4F461'
    donationBtn.style.border = 'none'
    historyBtn.style.backgroundColor = 'white'
    historyBtn.style.border = '2px solid gray'
})
historyBtn.addEventListener('click', function () {
    historyEl.classList.remove('hidden');
    donationEl.classList.add('hidden')
    historyBtn.style.backgroundColor = '#B4F461'
    historyBtn.style.border = 'none'
    donationBtn.style.backgroundColor = 'white'
    donationBtn.style.border = '2px solid gray'
})


noakhaliBtn.addEventListener('click', function () {
    let inputValue = noakhaliInput;
    const totalAmount = totalTk.innerText
    const noakhaliTk = noakhaliFloodTk.innerText
    const titleNoakhali = idDected('title-noakhali')


    const tk = donateTk(inputValue, totalAmount, noakhaliTk, titleNoakhali.innerText)
    noakhaliFloodTk.innerText = tk
    console.log(tk)
})

feniBtn.addEventListener('click', function () {
    let inputValue = feniInput;
    const totalAmount = totalTk.innerText // replace 
    const feniTk = feniFloodTk.innerText;
    const titleFeni = idDected('title-feni')


    const tk = donateTk(inputValue, totalAmount, feniTk, titleFeni.innerText)
    feniFloodTk.innerText = tk;
    console.log(tk)
})

quotaProtestBtn.addEventListener('click', function () {
    let inputValue = quotaProtestInput;
    const totalAmount = totalTk.innerText // replace 
    const quotaTk = quotaProtestTk.innerText;
    const titleQuota = idDected('title-quota')

    const tk = donateTk(inputValue, totalAmount, quotaTk, titleQuota.innerText)
    quotaProtestTk.innerText = tk;
    console.log(tk)
})


