document.addEventListener('DOMContentLoaded', function() {


document.getElementById("submitButn").addEventListener("click", function() {
    hideDob();
    calculateAge();
});
function hideDob(){
    //Hide the input form
    document.getElementById("dobForm").style.display="none";
    document.getElementById("age").style.display="block";
    document.getElementById("timeLeft").style.display="block";
};

function calculateAge(){
    var counterElement = document.getElementById("counter");
    var remainderElement = document.getElementById("remainder");
    var avgLife = 80;
    updateAgeDisplay();

    setInterval(updateAgeDisplay, 25);
 
    function updateAgeDisplay(){
        var currentDate = new Date();
        var givenDate = new Date(document.getElementById("dob").value);

        var differenceDate = currentDate - givenDate;
        var millisecondsPerYear = 1000 * 60 * 60 * 24 * 365;
        var differenceInYears = differenceDate / millisecondsPerYear;
        document.getElementById("counter").style.display="block";
        counterElement.textContent = differenceInYears.toFixed(9);

        var timeRemaining = avgLife - differenceInYears;
        document.getElementById("remainder").style.display="block";
        remainderElement.textContent = timeRemaining.toFixed(9);
    };

};

});
