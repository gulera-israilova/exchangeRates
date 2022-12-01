import axios from "axios";

export const exchangeRates =  await axios.get('http://www.floatrates.com/daily/kgs.json')
    .then()
    .catch(error => {
        console.log(error);
    });