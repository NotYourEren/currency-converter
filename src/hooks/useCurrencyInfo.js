import { useState, useEffect } from "react";

function useCurrencyInfo (currency) {
    const [data, setData] = useState({})

    useEffect( () => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then( (res) => res.json() )
        .then( (res) => setData(res[currency]) ) // we can use res.currency also ig try it later
        // console.log(data)
    }, [currency]);
    console.log(data);
    return data;
}

export default useCurrencyInfo;