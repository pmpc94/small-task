function createArray() {
    var generatedNumber = -1;

    for (var a = [], i = 0; i < 10; i++) {
        if (i === 1) {
            //make sure two equal numbers are generated
            while (generatedNumber !== a[0]) {
                //after knowing the first element of this sequence, we don't need to look for a number between 0...n. 
                generatedNumber = Math.floor((Math.random() * a[0]) + (a[0] / 2));
                if (generatedNumber === a[0]) {
                    a[i] = generatedNumber;
                }
            }
        }
        //make sure three equal numbers are generated
        else if (i === 3) {
            while (i >= 3 && i <= 4) {
                generatedNumber = Math.floor((Math.random() * a[2]) + (a[2] / 2));
                //after knowing the first element of this sequence, we don't need to look for a number between 0...n. 
                if (generatedNumber === a[2] && generatedNumber !== a[0]) {
                    a[i] = generatedNumber;
                    i++;
                }
            }
            a[i] = Math.floor((Math.random() * 50) + 1);
        }
        else {
            a[i] = Math.floor((Math.random() * 50) + 1);
        }
    }
    console.log(a);
}