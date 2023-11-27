function countTrueValues() {
    const array = [true, true, false, false, true, true, false, false];
    const trueCount = array.filter(Boolean).length;

    
    const resultParagraph = document.getElementById("result");
    resultParagraph.textContent = `Number of true values: ${trueCount}`;
}
