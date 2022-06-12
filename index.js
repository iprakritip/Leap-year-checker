
document.getElementById("submitBtn").addEventListener("click", function(e){
  var yearZie = document.getElementById("year").value;

  if(yearZie%4==0 && yearZie%100!==0 || yearZie%400==0){
  //  console.log("issa leap year");
    document.getElementById("message").innerHTML = yearZie + " is a leap year.";
    document.getElementById("message").classList.add("leap");
    document.getElementById("message").classList.remove("notLeap");
  } else{
  //console.log("not a leap year");
  document.getElementById("message").innerHTML =yearZie + " is not a leap year.";
  document.getElementById("message").classList.add("notLeap");
  document.getElementById("message").classList.remove("leap");
  };
});
