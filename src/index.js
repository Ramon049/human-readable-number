module.exports = function toReadable (number) {
    const hundred = ['hundred'];
    const dec = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const elevenNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];
    const oneNine = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const zero = ['zero'];

    if(number == 0){
        return zero[0];
    }
    if(number < 10){
        return oneNine[number - 1];
    }
    if(number >= 10 && number < 20){
        return elevenNineteen[number - 10];
    }
    if(number >=20 && number < 100){
        if(number.toString()[1] == 0){
            return dec[number.toString()[0] - 2];
        }
        if(number.toString()[1] != 0){
            return dec[number.toString()[0] - 2] + ' ' + oneNine[number.toString()[1] - 1];
        }
    }
    if(number == 100){
        return oneNine[0] + ' ' + hundred[0];
    }
    if(number > 100){
        if(number.toString()[1] == 0 && number.toString()[2] == 0){
            return oneNine[number.toString()[0] - 1] + ' ' + hundred;
        }
        if(number.toString()[1] == 0){
            return oneNine[number.toString()[0] - 1] + ' ' + hundred + ' ' + oneNine[number.toString()[2] - 1];
        }
        
        if(number.toString()[1] == 1){
            return oneNine[number.toString()[0] - 1] + ' ' + hundred + ' ' + elevenNineteen[number.toString()[2]];
        }
        if(number.toString()[1] > 1 && number.toString()[2] == 0){
            return oneNine[number.toString()[0] - 1] + ' ' + hundred + ' ' + dec[number.toString()[1] - 2];
        }
        if(number.toString()[1] > 1){
            return oneNine[number.toString()[0] - 1] + ' ' + hundred + ' ' + dec[number.toString()[1] - 2] + ' ' + oneNine[number.toString()[2] - 1];
        }
    }
}
