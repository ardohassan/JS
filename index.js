const senderCardNumber = prompt("Enter your ATM card number:");

const senderCardPIN = prompt("Enter your ATM card PIN:");

const senderCardExpiration = prompt("Enter your ATM card expiration date (MM/YYYY):");

if (senderCardNumber === "7037919886" && senderCardPIN === "0000" && senderCardExpiration === "05/2024") {
  const recipientCardNumber = prompt("Enter recipient's ATM card number:");

  const transferAmount = parseFloat(prompt("Enter the amount to transfer:"));
  const confirmation = confirm(`Confirm transferring ₦${transferAmount} from your account to the recipient's account?`);

  if (confirmation) {
    const senderBalance = 1000; 
    if (transferAmount <= senderBalance) {
      const updatedSenderBalance = senderBalance - transferAmount;

      

      alert(`Transfer of ₦${transferAmount} to the recipient's account is successful. Your updated balance is ₦${updatedSenderBalance}.`);
    } else {
      alert("Insufficient funds in your account.");
    }
  } else {
    alert("Transfer cancelled.");
  }
} else {
  alert("Invalid card details. Transfer cannot be processed.");
}