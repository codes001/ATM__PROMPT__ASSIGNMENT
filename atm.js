const balance = 15000; // Initial balance

// Display options to the user
var choice = (prompt("Choose an option:\n1. Check Balance\n2. Deposit\n3. Withdraw"));

if (choice == '1') {
    alert(`Your balance is ${balance}`);
}
// If deposit
else if (choice == '2') {
    let depositAmount = prompt("Enter deposit amount:");
    // let depositInput = depositAmount.value
    if (isNAN(depositAmount)) {
                alert('Please, enter a valid number');
    } else {
        const newBalance = depositAmount + balance;
        alert(`Your new balance is ${newBalance}`);
    }
} 
// If withdrawal
else if (choice == '3') {
    const withdrawAmount = prompt("Enter withdrawal amount:");
    if (withdrawAmount) {
        if (withdrawAmount > balance) {
            
            alert('Insufficient funds');
        } else {
            alert("Withdrawal successfull, please take your cash");
        }
    } else {
        alert("Something went wrong.");
    }
} 
