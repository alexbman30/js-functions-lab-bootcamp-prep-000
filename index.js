// write your code below!
function happyHolidays(){
  console.log('Happy Holidays!')
}
happyHolidays('Happy Holidays')

function happyHolidaysTo(name){
  return `Happy Holidays,${name}!`
}
happyHolidaysTo('Alex')

function happyHolidaysTo(holiday,name){
  return `Happy ${holiday},${name}!`
}
happyHolidaysTo("St.Pattys day","Charlie")

function holidayCountdown(days,holiday){
  return `Its ${days} days until ${holiday}!`
}
holidayCount("21","St.Pattys day")

