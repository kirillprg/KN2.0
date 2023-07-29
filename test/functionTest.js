function getFormattedToday(increment) {
    const today = new Date(new Date().getTime() + 24 * increment * 60 * 60 * 1000);
   // console.log(today)
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    var day = String(today.getDate()).padStart(2, '0') ;
    return `${year}/${month}/${day}`;
}

const todayDate = getFormattedToday(0);


const monthFromNow = []
for (let index = 0; index < 31; index++) {
   
    const day = getFormattedToday(index)
    monthFromNow.push(day)
    //console.log(day)
}

console.log(monthFromNow)
console.log(todayDate)