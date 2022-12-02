import {exchangeRates} from "./utils/exchangeRates.js";

class controller {

    async get (req, res) {
        try {
            return res.send(exchangeRates.data)
        } catch (e) {
            console.log(e);
            res.status(400).json({
                message: 'Failed to return data',
            });
        }
    }

    async post (req, res) {
        try {
          const {code} = req.body;
          const exchangeRatesData = exchangeRates.data;
            for (let key in exchangeRatesData) {
                if(key === code){
                    res.send(exchangeRatesData[key]);
                }
            }
        } catch (e) {
            console.log(e);
            res.status(400).json({
                message: 'Failed to return data',
            });
        }
    }
}

export default new controller()
