
const button = document.getElementById('btn');

const showMessage = () => {
    const result = document.querySelector('.section__date_text');
    const date = document.getElementById('calendar').value;
    console.log(`date ${date}`)
    const dateTime = Date.parse(date)
    console.log(`dateTime %{dateTime}`)

    const currentDate = Date.now();

    const calculateDays = dateTime - currentDate;
    let daysPassed = Math.floor( calculateDays / (1000 * 60 * 60 * 24) );
console.log( `currentDate ${currentDate}`)
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