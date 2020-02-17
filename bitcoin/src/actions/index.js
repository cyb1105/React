import axios from 'axios';

const ROOT_URL = `https://poloniex.com/public?command=returnChartData&start=1580972901&end=1581577701&period=86400`;

export const FETCH_BITCOIN = 'FETCH_BITCOIN';

export function fetchBitcoin(currencyPair){
    const url = `${ROOT_URL}&currencyPair=${currencyPair}`
    const request = axios.get(url)

return{
    type: FETCH_BITCOIN,
    payload: request
}
}