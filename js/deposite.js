const depositBtn = document.getElementById('btn-deposit');
const withdrawBtn = document.getElementById('btn-withdraw');
const depositField = document.getElementById('deposite-field');
const withdrawField = document.getElementById('withdraw-field');
const depositTotal = document.getElementById('deposit-total');
const withdrawTotal = document.getElementById('withdraw-total');
const balanceTotal = document.getElementById('balance-total');

// add eventListener to deposit button
depositBtn.addEventListener('click', function() {
    // get the deposit amount from the deposit input field
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // get the deposit current total amount
    const previousDepositTotal = parseFloat(depositTotal.innerText);

    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotal.innerText = currentDepositTotal;

    // add balance total to balance from deposite
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;


    // clear the deposite field
    depositField.value = '';
})


// withdraw eventlistener handeler

withdrawBtn.addEventListener('click', function() {
    // get the withdraw amount from the withdraw input field
    const withdrawFieldValue = parseFloat(withdrawField.value);
    const previousWithdraw = parseFloat(withdrawTotal.innerText);
    // validation not a number
    // clear the withdraw field
    withdrawField.value = '';

    if (isNaN(withdrawFieldValue)) {
        alert('Please privide a valid number')
        return;
    }

    // privious balance total
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    // clear the withdraw field
    withdrawField.value = '';

    // validation
    if (withdrawFieldValue > previousBalanceTotal) {
        alert('Dont have sufficiant balance');
        return;
    }

    // add current and privious withdraw
    const currentWithdrowTotal = previousWithdraw + withdrawFieldValue;
    withdrawTotal.innerText = currentWithdrowTotal;

    // newbalance total calculate
    const newWithdrawBalanceTotal = previousBalanceTotal - withdrawFieldValue;

    balanceTotal.innerText = newWithdrawBalanceTotal;


})