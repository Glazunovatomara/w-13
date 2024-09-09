
const button = document.getElementById('btn');

const showMessage = () => {
    const str = document.querySelector('.section__date_text');
    const date = document.getElementById('calendar').value;
    
    const dateTime = Date.parse(date)

    const currentDate = Date.now();

    const calculateDays = dateTime - currentDate;
    let daysPassed = Math.floor( calculateDays / (1000 * 60 * 60 * 24) );

    let day = 'день';
    const daysPassedStr = daysPassed.toString();

    if (daysPassedStr.charAt(daysPassedStr.length - 1) === '1' && daysPassedStr !== '11' && daysPassedStr !=='111' && daysPassedStr !=='211' && daysPassedStr !=='311') {
        day = 'день'
    } else if (daysPassedStr.charAt(daysPassedStr.length - 1) === '2' && daysPassedStr !== '12' && daysPassedStr !=='112' && daysPassedStr !=='212' && daysPassedStr !=='312') {
        day = 'дня'
    } else if(daysPassedStr.charAt(daysPassedStr.length - 1) ==='3' && daysPassedStr !== '13' && daysPassedStr !=='113' && daysPassedStr !=='213' && daysPassedStr !=='313') {
        day = 'дня'
    } else if(daysPassedStr.charAt(daysPassedStr.length - 1) ==='4'  && daysPassedStr !== '14' && daysPassedStr !=='114' && daysPassedStr !=='214' && daysPassedStr !=='314') {
        day = 'дня'
    } else {
        day = 'дней' 
    }
    if(daysPassed > 0){
        str.textContent = `Мероприятие будет через ${daysPassed} ${day}`
    } else if(daysPassed === 0) {
        str.textContent = `Мероприятие сегодня!`
    } else if(daysPassed < 0){
        daysPassed = Math.abs(daysPassed);
        str.textContent = `Мероприятие состоялось ${daysPassed} ${day} назад`
    } else {
        str.textContent = `Чтобы посчитать колличество дней до события, вам нужно выбрать интересующую вас дату`
    }
}

button.addEventListener('click', showMessage);