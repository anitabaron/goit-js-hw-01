function getElementWidth(content, padding, border) {
  number.parseFloat;
}

//50 + (2*8) + (2*4)
//60 + (2*12) + (2*8,5)

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
