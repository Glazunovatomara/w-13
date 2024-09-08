
const button = document.getElementById('btn');

const showMessage = () => {
    const result = document.querySelector('.section__date_text');
    const date = document.getElementById('calendar').value;
    
    const dateTime = Date.parse(date)

    const currentDate = Date.now();

    const calculateDays = dateTime - currentDate;
    let daysPassed = Math.floor( calculateDays / (1000 * 60 * 60 * 24) );
console.log( `currentDate ${currentDate}`)

//if (daysPassed[-1] === 1 && daysPassed !== 11 && daysPassed !== 111 && daysPassed !== 211 && daysPassed !== 311) {
   // day = 'день'
//} else if (daysPassed[-1] === 2,3,4,) {
//    day = 'дня'
//} else {
  //  day = 'дней' 5 6 7 8 9 10 11 -20
//}

    if(daysPassed > 0){
        result.textContent = `Мероприятие будет через ${daysPassed}`
    } else if(daysPassed = 0) {
        result.textContent = `Мероприятие сегодня!`
    } else if(daysPassed < 0){
        daysPassed = Math.abs(daysPassed);
        result.textContent = `Мероприятие состоялось ${daysPassed} назад`
    } else {
        result.textContent = `Чтобы посчитать колличество дней до события, вам нужно выбрать интересующую вас дату`
    }
}

button.addEventListener('click', showMessage);