function CreateObject(arr) {
    // Write your code here
    var keys = [];
    var values = [];
    var d={};
    for(let i=0; i<arr.length; i++)
    {
        if(i%2==0)
        {
            keys.push(arr[i]);
        }
        else
        {
            values.push(arr[i]);
        }
    }
    keys.forEach((key, i) => d[key] = values[i]);
    return d
}

module.exports = CreateObject;
