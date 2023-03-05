const numbersButtons = document.querySelectorAll('.number'); 
const operatorsButton = document.querySelectorAll('.operator'); 

const previousNumber = document.querySelector('.previousNumber p');
const currentNumber = document.querySelector('.currentNumber');
const mathSign = document.querySelector('.mathSign');

const equals = document.querySelector('.equals'); 
const clear = document.querySelector('.clear'); 

const history = document.querySelector('.history');
const historyBtn = document.querySelector('.history-btn'); 



function displayNumbers() {  
   
   if(this.textContent === '.' && currentNumber.textContent === '') {
        currentNumber.textContent = '0.' 
        return
    }  
    if(currentNumber.textContent.includes('.') && this.textContent === '.') return
    if(this.textContent === '.' && currentNumber.textContent ==='-') { 
        currentNumber.textContent += '0.'  
        return
    }  

    if(this.textContent === '.' && currentNumber.textContent !=='') { 
        currentNumber.textContent += '.'  
        return
    }   
  
    currentNumber.textContent += this.textContent

}
function operate() {  
    if(currentNumber.textContent === '' && this.textContent === '-') {
        currentNumber.textContent += '-'
        return
    }
    if(currentNumber.textContent === '' && previousNumber.textContent === '') return 

    if(mathSign.textContent !== '' && currentNumber.textContent === '') return

    
    if(mathSign.textContent !== '' && currentNumber.textContent !== '') { 
       
        showResult()
    }
    mathSign.textContent = this.textContent 

    previousNumber.textContent = currentNumber.textContent; 
    currentNumber.textContent = ''



} 
function showResult() {
    let a = Number(previousNumber.textContent)
    let b = Number(currentNumber.textContent) 

    let operate = mathSign.textContent 

    switch(operate) {
        case '+':
            result = a + b 
        break;  
        case '-':
            result = a - b
        break;  
        case 'x':
            result = a * b 
        break;  
        case ':':
            result = a / b
        break;  
        case '2^':
            result = a ** b 
        break; 

    } 
    if(currentNumber.textContent === '' || previousNumber.textContent === '') return
    historyBtn.classList.add('active'); 
    addToHistory()
    

    previousNumber.textContent = ''
    currentNumber.textContent = result 
    mathSign.textContent = ''



} 
function clearDisplay() {
    previousNumber.textContent = ''
    currentNumber.textContent = ''
    mathSign.textContent = ''
} 
function addToHistory() {
    const li = document.createElement('li'); 
    li.textContent = `${currentNumber.textContent} ${mathSign.textContent} ${previousNumber.textContent} = ${result}`;

   history.appendChild(li)
}
function clearHistory() {
    history.textContent = '';
}

numbersButtons.forEach((button) => button.addEventListener('click',displayNumbers))
 operatorsButton.forEach((button) => button.addEventListener('click',operate))    
 equals.addEventListener('click',showResult) 
 clear.addEventListener('click',clearDisplay) 
 historyBtn.addEventListener('click',clearHistory)




