const button= document.getElementById('genarate-color-btn');
const genarateRandomNumber= (maxNumber)=> {
    return Math.floor(
        Math.random() * (maxNumber+1) 
    )}
button.addEventListener ('click', () => {
    const randomNumber = genarateRandomNumber(255)
    const randomNumber2 =genarateRandomNumber(255)
    const randomNumber3 =genarateRandomNumber(255)


    document.body.style.backgroundColor = `rgb(${randomNumber}, ${randomNumber2}, ${randomNumber3})`;

    // Konsola RGB renk kodunu yazdıralım
    console.log('Generated RGB Color:', `rgb(${randomNumber}, ${randomNumber2}, ${randomNumber3})`);
});
