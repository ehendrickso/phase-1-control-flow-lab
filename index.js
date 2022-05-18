const value = 2001

function scuberGreetingForFeet(value) {
  if (value <= 400) {
    return 'This one is on me!'
  }
  else if (value > 400 && value < 2000) {
    return 'That will be twenty bucks.'
  }
  else if (value > 2000 && value < 2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else if (value > 2500) {
    return 'No can do.'
  }
}
  
const city = "Pittsburgh"

function ternaryCheckCity(city){
  let destination = (city == "NYC") ? 'Ok, sounds good.' : 'No go.';
  return destination
}

const tip = 'not as generous'

function switchOnCharmFromTip(tip){
 switch (tip) {
   case 'generous':
     return 'Thank you so much.'
     break;
  case 'not as generous':
    return 'Thank you.'
    break;
  case 'thanks for everything':
    return 'Bye.'
   default: 'Peace out Bro.'
     break;
 }
}
