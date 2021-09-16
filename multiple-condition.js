var gotJob = false;
var moneySaved = 50000;
var hasFlat = true;

// if(gotJob && moneySaved > 200000) {
//     console.log('Cholo biya koira feli');
// } else {
//     console.log('Top kopale biya nai');
// }
// if(gotJob && moneySaved > 200000 && hasFlat == true) {
//     console.log('Cholo biya koira feli');
// } else {
//     console.log('Top kopale biya nai');
// }
if((gotJob && moneySaved > 200000) || hasFlat == true) {
    console.log('Cholo biya koira feli');
} else {
    console.log('Top kopale biya nai');
}