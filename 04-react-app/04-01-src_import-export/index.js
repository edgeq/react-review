import foods from './foods'
import {choice, remove} from './helpers'

// Randomly draw a fruit from the array
let fruit = choice(foods);
// Log the message “I’d like one RANDOMFRUIT, please.”
// Log the message “Here you go: RANDOMFRUIT”
console.log(`I would like one ${fruit} please \n Here is your ${fruit}`)
// Log the message “Delicious! May I have another?”
console.log('Delicioso. May I have another?')
// Remove the fruit from the array of fruits
let remaining = remove(foods, fruit);
// Log the message “I’m sorry, we’re all out. We have FRUITSLEFT left.”
console.log(`I’m sorry, we’re all out. We have ${remaining.length} other fruit left`)