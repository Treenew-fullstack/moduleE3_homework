function printNumbers(start, end) {
    setInterval(function() {
        if (start > end) return;
        console.log(start);
        start++;
    }, 1000);
}

printNumbers(5, 15);