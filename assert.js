var assert = {
  isTrue: function(assertionToCheck, label) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy " + label);
    }
    else {
      console.log("Test passed " + label);
    }
  }
};