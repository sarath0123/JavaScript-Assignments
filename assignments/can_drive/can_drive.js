function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here

    if (hasDrivingLiscence==false)
    {
        return "You cannot drive"
    }
    else
    {
        if (isTired==false && isSober==true)
        {
            return "You can drive"
        }
        else if (isTired==true || isSober==false)
        {
            return "You shouldn't drive"
        }
    }
    
}

module.exports = CanDrive;
