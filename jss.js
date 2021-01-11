var date = new Date();
console.log(date)

//  starting
function fx() {
    let day = new Date();
    // $('.mon').removeClass("remove");
    // $('.the').removeClass("remove");
    // $('.wed').removeClass("remove");
    // $('.thu').removeClass("remove");
    // $('.fri').removeClass("remove");
    $('.mon').fadeIn();
    $('.the').fadeIn();
    $('.wed').fadeIn();
    $('.thu').fadeIn();
    $('.fri').fadeIn();



}
var day = date.getDay();
var hrs = date.getHours();
console.log(hrs)
if (day == 0 || day == 6) {
    $('.weekday').removeClass("remove");
    $('.weekday').removeClass("remove");
} else {
    if (day == 1) {
        $('.mon').removeClass("remove");
        if (hrs == 9) {
            $('.ps-link').removeClass("btn-secondary");
            $('.ps-link').addClass("btn-primary");
        } else if (hrs == 11) {
            $('.daa-link').removeClass("btn-secondary");
            $('.daa-link').addClass("btn-primary");
            window.open("https://meet.google.com/lookup/h6i5dgjoi7?authuser=2&hs=179");
        } else if (hrs == 12) {
            $('.cse-link').removeClass("btn-secondary");
            $('.cse-link').addClass("btn-primary");
        } else {

        }
    }
    if (day == 2) {
        $('.the').removeClass("remove");
        if (hrs == 8) {
            $('.poc-link').removeClass("btn-secondary");
            $('.poc-link').addClass("btn-primary");
        } else if (hrs == 11) {
            $('.os-link').removeClass("btn-secondary");
            $('.os-link').addClass("btn-primary");
        } else {}
    }
    if (day == 3) {
        $('.wed').removeClass("remove");
        if (hrs == 8) {
            $('.ps-link').removeClass("btn-secondary");
            $('.ps-link').addClass("btn-primary");
        } else if (hrs == 10) {
            $('.daa-link').removeClass("btn-secondary");
            $('.daa-link').addClass("btn-primary");
        } else if (hrs == 11) {
            $('.cse-link').removeClass("btn-secondary");
            $('.cse-link').addClass("btn-primary");
        } else {}
    }
    if (day == 4) {
        $('.thu').removeClass("remove");
        if (hrs == 8) {
            $('.poc-link').removeClass("btn-secondary");
            $('.poc-link').addClass("btn-primary");
        } else if (hrs == 11) {
            $('.os-link').removeClass("btn-secondary");
            $('.os-link').addClass("btn-primary");
        } else {}
    }
    if (day == 5) {
        $('.wed').removeClass("remove");
        if (hrs == 12) {
            $('.ps-link').removeClass("btn-secondary");
            $('.ps-link').addClass("btn-primary");
        } else if (hrs == 9) {
            $('.daa-link').removeClass("btn-secondary");
            $('.daa-link').addClass("btn-primary");
        } else if (hrs == 10) {
            $('.cse-link').removeClass("btn-secondary");
            $('.cse-link').addClass("btn-primary");
        } else {}
    }

}