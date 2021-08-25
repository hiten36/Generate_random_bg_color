const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    document.querySelector('.code').innerHTML = `<h2>#${randomColor}</h2>`;
}
  
document.querySelector('.box1').addEventListener("click", setBg);
setBg()