const myinput = document.getElementById("myinput")

function writeToHistory(text) {
    const history = document.getElementById("historyLog");
    history.value += text + "\n";
}

// 1. รวมยอดบัญชี + เงินสด
function convertCurrency1() {
    const accBalance = parseFloat(document.getElementById("currencyInput1").value) || 0;
    const cashBalance = parseFloat(document.getElementById("currencyInput2").value) || 0;
    const total = accBalance + cashBalance;

    writeToHistory(`💰 รวมยอดเงิน: ${total.toFixed(2)} บาท`);
}

// 2. ฝากหรือถอน
let balance = 0;

function convertCurrency2() {
    const action = document.getElementById("myDropdown1").value;
    const amount = parseFloat(document.getElementById("currencyInput3").value) || 0;

    if (amount <= 0) {
        writeToHistory("❌ กรุณาใส่จำนวนเงินให้ถูกต้อง");
        return;
    }

    if (action === "USB") {
        balance += amount;
        writeToHistory(`📥 ฝาก ${amount} บาท | ยอดคงเหลือ: ${balance.toFixed(2)} บาท`);
    } else if (action === "THB") {
        if (amount > balance) {
            writeToHistory("❌ ถอนเงินไม่สำเร็จ: ยอดเงินไม่พอ");
            return;
        }
        balance -= amount;
        writeToHistory(`📤 ถอน ${amount} บาท | ยอดคงเหลือ: ${balance.toFixed(2)} บาท`);
    }
}