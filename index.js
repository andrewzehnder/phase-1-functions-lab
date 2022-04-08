const hqLocation = 42;

function distanceFromHqInBlocks(deliveryLocation) {
    if (deliveryLocation > hqLocation) {
        return (deliveryLocation - hqLocation);
    } else {
        return (hqLocation - deliveryLocation);
    }
}

function distanceFromHqInFeet(deliveryLocation) {
    if (deliveryLocation > hqLocation) {
        return ((deliveryLocation - hqLocation) * 264);
    } else {
        return ((hqLocation - deliveryLocation) * 264);
    }
}

function distanceTravelledInFeet(startingFeet, endingFeet) {
    if (endingFeet > startingFeet) {
        return ((endingFeet - startingFeet) * 264);
    } else {
        return ((startingFeet - endingFeet) * 264);
    }
}

function calculatesFarePrice(startingFeet, endingFeet) {
    let feetCharged;
    let calculatesFeet = distanceTravelledInFeet(startingFeet, endingFeet);
    if (calculatesFeet < 400) {
        return 0;
    }
    else if (calculatesFeet > 400 && calculatesFeet < 2000) {
        feetCharged = (calculatesFeet - 400);
        return (feetCharged * .02);
    }
    else if (calculatesFeet > 2000 && calculatesFeet < 2500) {
        return  25;
    }
    else {
        return "cannot travel that far";
    }
}







