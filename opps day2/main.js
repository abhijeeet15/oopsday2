class ATM {  // Define a class named ATM to create ATM 
    constructor(accountHolder, balance) { //Constructor method: initializes a new ATM object with account holder name and balance .
      this.accountHolder = accountHolder; // Store the name of the account holder in Global object .
      this.balance = balance; //Store the initial balance in Global object .
    }
  
    checkBalance() { // // Method to display the current balance and account holder name
      document.writeln("<b>Account Holder:</b> " + this.accountHolder + "<br>"); //  display the current account holder name .
      document.writeln("<b>Current Balance:</b> ₹" + this.balance + "<br><hr>"); //  display the current account holder balance .
    }
  
    deposit(amount) { // Method to deposit money into the account
      this.balance += amount; // Add the deposit amount to the current balance
      document.writeln("₹" + amount + " deposited successfully.<br>");// Show a message that deposit was successful
      this.checkBalance();// Display updated balance after deposit
    }
  
    withdraw(amount) { // Method to withdraw money from the account
      if (amount > this.balance) { // Check if the withdrawal amount is greater than the available balance
        document.writeln("Insufficient balance! Cannot withdraw ₹" + amount + "<br><hr>"); // If the balance is not enough, then show an error message
      } else { //If the balance is enough
        this.balance -= amount; // To Subtracts the amount from the balance.
        document.writeln("₹" + amount + " withdrawn successfully.<br>"); // Show message confirming successful withdrawal
        this.checkBalance();// Display updated balance after withdrawal
      }
    }
  }
  
  let myATM = new ATM("Janvi Mehta", 10000); // Create a new ATM object with name and starting balance

  
  myATM.checkBalance();// Show initial balance and account holder info
  myATM.deposit(2000);// Deposit ₹2000 and display updated balance
  myATM.withdraw(5000);// Withdraw ₹5000 and display updated balance
  myATM.withdraw(10000);// Attempt to withdraw ₹10000 (more than available), should show error
  