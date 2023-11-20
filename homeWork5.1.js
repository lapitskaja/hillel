while (true) {
    let userInput = prompt("Enter any number");
  
    if (userInput === null) {
      alert("You have canceled data entry. The program is completed.");
      break;
    }
  
    let userNumber = userInput.toLowerCase();
  
    if (isNaN(userNumber) || userNumber.trim()=== "") {
      alert("Only numbers, please");
    } else if (userNumber >= 123) {
      alert("Wow, you've ended this endless cycle!");
      break;
    } else {
      alert("Should continue");
    }
  }
