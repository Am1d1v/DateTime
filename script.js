




const now = new Date();
console.log(now);

/*

setInterval(() => {
    const now = new Date();
    console.log(now);
}, 2000);

*/

console.log(new Date('02-02-2023'));
console.log(new Date('02/02/2023'));
console.log(new Date('2023/02/02'));
console.log(new Date('10 Jan 2023'));


console.log(new Date(2024, 10, 20));
console.log(new Date(2024, 11, 50));
console.log(new Date(2024, 11, 20 + 30));

console.log(new Date(0));
console.log(new Date(2*24*60*60*1000)); // 3rd January
console.log(Date.now());


console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());

//=====================

const date1 = new Date();
const date2 = new Date('2023/08/30');
//console.log(Number(date1));
//console.log(Number(date2));
//console.log(date2 - date1);

function getDaysBetweenDays(dateFirst, dateSecond){
    return ((dateSecond - dateFirst) / (1000 * 60 * 60 * 24))
}

console.log(getDaysBetweenDays(date1, date2));
console.log(Math.round(getDaysBetweenDays(date1, date2)));