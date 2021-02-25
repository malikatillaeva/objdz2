console.log(cartObj());
let Obj = cartObj()
let sum = 0;
let menu = '';
let i = '';
let dostavka = 9000;
for (const key in Obj) {
    menu = '';
    menu += key;
    for (const key2 in Obj[key]) {
        if (key2 == 'price')
        sum += Obj[key][key2]   
        else {
            i = '';
            i += (Obj[key][key2]); 
        }
        var m = `${menu} ${i}`;
        console.log(m);
}
}
    let s = sum + dostavka;    
    console.log(`Sizning buyurtmangiz:  ${m} | yetqazib berish xizmati bilan bo'lgan narx ${s} yetkazish xaqqi (${dostavka})`);