function getElementWidth(content, padding, border) {}

parseFloat;

getElementWidth("50px", "8px", "4px"); //74
getElementWidth("60px", "12px", "8.5px"); //101
getElementWidth("200px", "0px", "0px"); //200

//Zmodyfikuj kod funkcji tak, aby zwracała liczbę —
// całkowitą szerokość elementu.Podczas obliczania całkowitej
// szerokości pamiętaj, że wartość box - sizing jest równa border - box.

// content — pierwszy parametr, szerokość treści;
// padding — drugi parametr, wartość poziomego wypełnienia dla każdej strony;
// border — trzeci parametr, wartość grubości obramowania dla każdej strony.
