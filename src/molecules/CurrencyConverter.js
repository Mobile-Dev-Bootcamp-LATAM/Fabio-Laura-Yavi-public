import { useEffect, useState } from "react"
import styled from "styled-components";
import { Flag } from "../atoms/Flag";

const CurrencyConverterCtn = styled.div`
    display: flex;
    gap: 2rem;
`;

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
        <CurrencyConverterCtn>
            <div>
                <Flag src={countryA.flags.png} size={3}/>
                <div>1 {countryA.currencies[0].symbol}</div>
            </div>
            <div>
                <Flag src={countryB.flags.png} size={3}/>
                <div>{rate} {countryB.currencies[0].symbol}</div>
            </div>
        </CurrencyConverterCtn>
    )
}

export {
    CurrencyConverter
}