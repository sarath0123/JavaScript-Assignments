function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here

    if (hasDrivingLiscence=="true" && isTired=="false" && isSober=="true")
    {
        return "You can drive"
    }
    else if (hasDrivingLiscence=="false")
    {
        return "You cannot drive"
    }
    else if (isTired=="true")
    {
        return "You cannot drive"
    }
    else if (isSober=="false")
    {
        return "You cannot drive"
    }  

}

module.exports = CanDrive;
