console.log("Welcome to Mini Bank App");
 alert(" Hello! This is a world of financial expertise")
function bankApp(balance) {
  const option = Number(
    prompt(
      "Please choose any operation.\n 1. Check Balance\n 2. Withdraw\n 3. Deposit\n 4. Exit"
    )
  );

  switch (option) {
    case 1:
      console.log(`Your balance is $${balance.toFixed(2)}`);
      break;

    case 2:
      const withdrawAmt = Number(prompt("Enter amount to withdraw:"));
      if (isNaN(withdrawAmt) || withdrawAmt <= 0) {
        console.log("Invalid amount");
      } else if (withdrawAmt > balance) {
        console.log("Insufficient funds");
      } else {
        balance -= withdrawAmt;
        console.log(`Withdrawal successful. New balance: $${balance.toFixed(2)}`);
      }
      break;

    case 3:
      const depositAmt = Number(prompt("Enter amount to deposit:"));
      if (isNaN(depositAmt) || depositAmt <= 0) {
        console.log("Invalid amount");
      } else {
        balance += depositAmt;
        console.log(`Deposit successful. New balance: $${balance.toFixed(2)}`);
      }
      break;

    case 4:
      console.log("Thank you for using Mini Bank. Goodbye!");
      break;

    default:
      alert(" Dear Valued User, Please put in a valid option. Try again");
  }

  // return balance;
}

// 
bankApp(1000000000);