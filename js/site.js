// Helper Functions
function calculateTotalCost(checkAmount, tipPercentage) {
  tipPercentage = tipPercentage;
  return (checkAmount * tipPercentage).toFixed(2);
}

function checkForm(checkAmount, tipPercentage) {
  if (checkAmount > 0 && tipPercentage != 0) { return true; }
  return false;
}

// Do the work
$(document).ready(function() {
  var checkAmountInput = $("#check-amount");
  var tipPercentageInput = $("#tip-percentage");
  var totalCheckAmount = $("#total-check-amount");
  var calculateButton = $("#calculate-button");

  var checkAmount = checkAmountInput.val(), tipPercentage = tipPercentageInput.val();

  checkAmountInput.on("input", function(event){
    checkAmount = $(this).val();

    console.log("Check Amount: " + checkAmount);
  });

  tipPercentageInput.on("change", function(){
    tipPercentage = $(this).val();

    console.log("Tip Percentage: " + tipPercentage);
  });

  calculateButton.on("click", function(){
    if(checkForm(checkAmount, tipPercentage)) {
      totalCheckAmount.val(calculateTotalCost(checkAmount, tipPercentage));
    }
    else {
      // handle the error
    }
  })



});
