import { useEffect, useState } from "react"
import { Flag } from "../atoms/Flag"

const CurrencyConverter = ({ countryA, countryB}) => {
    const [rate, setRate] = useState('');

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://api.exchangerate.host/convert?from=${countryA.currencies[0].code}&to=${countryB.currencies[0].code}&amount=1`);
            const json = await response.json();
            setRate(json.result);
        })();
    }, [countryB]);

    return (
        <div>
            <div>
                <Flag src={countryA.flags.png}/>
                <div>1 {countryA.currencies[0].symbol}</div>
            </div>
            <div>
                <Flag src={countryB.flags.png}/>
                <div>{rate} {countryB.currencies[0].symbol}</div>
            </div>
        </div>
    )
}

export {
    CurrencyConverter
}