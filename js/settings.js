$(document).ready(function() {
    
    //Show add-parameters settings when its clicked and hide other settings 
    $("#add-parameters").click(function() {
        $("#add-parameters-card").show();
        $("#add-fos-card").hide();
        $("#add-info-card").hide();
        $('#target-card').hide();
    });

    $("#add-fos").click(function() {
        $("#add-parameters-card").hide();
        $("#add-fos-card").show();
        $("#add-info-card").hide();
        $('#target-card').hide();
    });
    
    $("#info-card").click(function() {
        $("#add-parameters-card").hide();
        $("#add-fos-card").hide();
        $("#add-info-card").show();
        $('#target-card').hide();
    });

    $("#set-target").click(function() {
        $("#add-parameters-card").hide();
        $("#add-fos-card").hide();
        $("#add-info-card").hide();
        $('#target-card').show();
    });
});
