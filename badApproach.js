function generateRepeatedNumbers() {
    var generatedNumber = -1;

    for (var a = [], i = 0; i < 10; i++) {
        if (i === 1) {
            while (a[i] !== a[0]) {
                generatedNumber = Math.floor((Math.random() * 50) + 1);
                if (generatedNumber === a[0]) {
                    a[i] = generatedNumber;
                }
            }
        }
        else if (i === 3) {
            while ((a[i] !== a[2]) && i <= 5)
                generatedNumber = Math.floor((Math.random() * 50) + 1); {
                if (generatedNumber === a[2]) {
                    a[i] = generatedNumber;
                }
                i++;
            }
        }
        else {
            a[i] = Math.floor((Math.random() * 50) + 1);
        }
    }
    console.log(a);
}