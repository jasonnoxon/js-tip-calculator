// Helper Functions
function calculateTip(checkAmount, tipPercentage) {
  return (checkAmount * tipPercentage);
}

function checkForm(checkAmount, tipPercentage) {
  if (checkAmount > 0 && tipPercentage != 0) { return true; }
  return false;
}

// Do the work
$(document).ready(function() {
  var checkAmountInput = $("#check-amount");
  var tipPercentageInput = $("#tip-percentage");
  var tipAmount = $("#tip-amount");
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
      var calculatedTipAmount = calculateTip(+checkAmount, +tipPercentage).toFixed(2);

      tipAmount.val(calculatedTipAmount);
      totalCheckAmount.val((+checkAmount + +calculatedTipAmount).toFixed(2));
    }
    else {
      // handle the error
    }
  })



});
