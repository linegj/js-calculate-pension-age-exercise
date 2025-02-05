

//     | Fødselsdato                        | Folkepensionsalder |
// |------------------------------------|--------------------|
// | Før 30. juni 1955                  | Du har opnået din folkepensionsalder |
// | 1. juli 1955 – 31. december 1962   | 67 år              |
// | 1. januar 1963 – 31. december 1966 | 68 år              |
// | 1. januar 1967 – 31. december 1970 | 69 år              |
// | 1. januar 1971 – 31. december 1974 | 70 år              |
// | 1. januar 1975 – 31. december 1978 | 71 år              |
// | 1. januar 1979 – 31. december 1982 | 72 år              |
// | 1. januar 1983 – 30. juni 1987     | 72,5 år            |
// | 1. juli 1987 – 31. december 1991   | 73 år              |
// | 1. januar 1992 – 30. juni 1996     | 73,5 år            |
// | 1. juli 1996 eller senere          | 74 år              |


"use strict";

function calculatePension() {
    // input og resultat-HTML-elementer
    const birthdateInput = document.getElementById('birthdate').value;
    const resultParagraphElement = document.getElementById('result');
    resultParagraphElement.textContent = "";  // Ryd tidligere resultat

    //  Date-objekt fra fødselsdato. New date laver string om til dato
    const birthdate = new Date(birthdateInput);

    // Tjek om fødselsdatoen er gyldig
    if (isNaN(birthdate)) {
        resultParagraphElement.textContent = "Indtast en gyldig fødselsdato.";
        return;
    }

    let retirementAge = "";

    // Folkepensionsalder
   // New date laver string om til dato
    if (birthdate < new Date('1955-06-30')) {
        retirementAge = "Du har opnået din folkepensionsalder";
    } else if (birthdate <= new Date('1962-12-31')) {
        retirementAge = 67;
    } else if (birthdate <= new Date('1966-12-31')) {
        retirementAge = 68;
    } else if (birthdate <= new Date('1970-12-31')) {
        retirementAge = 69;
    } else if (birthdate <= new Date('1974-12-31')) {
        retirementAge = 70;
    } else if (birthdate <= new Date('1978-12-31')) {
        retirementAge = 71;
    } else if (birthdate <= new Date('1982-12-31')) {
        retirementAge = 72;
    } else if (birthdate <= new Date('1987-06-30')) {
        retirementAge = 72.5;
    } else if (birthdate <= new Date('1991-12-31')) {
        retirementAge = 73;
    } else if (birthdate <= new Date('1996-06-30')) {
        retirementAge = 73.5;
    } else {
        retirementAge = 74;
    }

    // Resultat
    if (retirementAge === "Du har opnået din folkepensionsalder") {
        resultParagraphElement.textContent = retirementAge;
    } else {
        resultParagraphElement.textContent = `Du kan gå på pension når du er ${retirementAge} år.`;
    }
}
