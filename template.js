$(document).ready (
    function ()
    {

//add event handlers

        $("#calcButton").click(calculateTrip);
        $("#alertButton").click(showPopup)
        //all other functions (program logic)
        function calculateTrip()
        {

            //get data from imput boxes
            var triplengthMiles = $("#triplengthMiles").val();
            triplengthMiles = parseFloat(triplengthMiles);
            var milesPerGallon =$("#mpg").val();
            milesPerGallon= parseFloat(milesPerGallon);
            var costPerGallon =$("#dpg").val();
            costPerGallon= parseFloat(costPerGallon);
            var averageSpeed =$("#averageSpeed").val();
            averageSpeed=parseFloat(averageSpeed);

            //parse numbers

            //do math
            var totalTime = triplengthMiles/averageSpeed;
            var totalGallons = triplengthMiles/ milesPerGallon;
            var totalCost =  totalGallons * costPerGallon;
            //put results in spans
            $("#hoursOutput").text(totalTime.toFixed(1));
            $("#costOutput").text(totalCost.toFixed(2));
        }
        function  showPopup()
        {
            alert("Hello!");
        }
    }
)