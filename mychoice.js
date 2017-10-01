function wageCal() {
    let hours = document.getElementById("hours").value;
    let wage = document.getElementById("wage").value;
    let payment = 0;

    if (document.getElementById("hours").value < 40) {
       return payment = (document.getElementById("hours").value * wage);
    }
    if (document.getElementById("hours").value > 40){
        let overtime = (document.getElementById("hours").value - 40);
       return payment = (40 * wage) + (overtime * wage);
    payment = hours * wage;
    }
    document.getElementById("payment").innerHTML("You made this much this week $" + payment);
    
}