 //selecting elements from html//
const convertButton = document.getElementById("convert-button");
const clearButton = document.getElementById("clear-button");
const binaryOutput = document.getElementById("binary-output");

//functions for the conversion //
const toBinary = () =>{
    let decimalNumber = parseFloat(document.getElementById("decimal-input").value);

    if(isNaN(decimalNumber)){
        binaryOutput.textContent = "Invalid input! Please enter a valid decimal number.";
          binaryOutput.style.backgroundColor = "white";
          binaryOutput.style.color = "red";
          setTimeout(()=>{
            binaryOutput.textContent="";
          }, 3000);
    }else if(decimalNumber < 0){
        binaryOutput.textContent = "Invalid input! Please enter a non-negative decimal number.";
        binaryOutput.style.backgroundColor = "white";
        binaryOutput.style.color = "red";
        setTimeout(()=>{
            binaryOutput.textContent="";
          }, 3000);
    }else{
        binaryOutput.textContent = decimalNumber.toString(2);
        binaryOutput.style.backgroundColor = "white";
        binaryOutput.style.color = "Green";
        setTimeout(()=>{
            binaryOutput.textContent="";
        }, 7000);  //to change the color back to white after 3 seconds//
    }
};
//function to clear out the input fields and output//

const clearInputs = () => {
    document.getElementById("decimal-input").value = "";
    binaryOutput.textContent = "";
};
//adding event listener//
convertButton.addEventListener("click", toBinary);

//adding event listener to the input field for easier use//
document.getElementById("decimal-input").addEventListener("keydown",(event)=>{
      if(event.key === 'Enter'){
        toBinary();
      }else if(event.key ==='Escape'){
        clearInputs();
      }
});
//adding event listener to the clear button//
clearButton.addEventListener("click", clearInputs);
