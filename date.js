//jshint esversion: 6

exports.getDate = function() {

    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    
    return today.toLocaleDateString("en-US", options); //to convert date in English format
        
};

exports.getDay = function() {

    const today = new Date();

    const options = {
        weekday: "long"
    };
    
    return today.toLocaleDateString("en-US", options); //to convert date in English format
        
};