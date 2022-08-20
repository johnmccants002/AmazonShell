import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from "./StateProvider"
import {getBasketTotal} from "./reducer"


export default function Subtotal() {
    const [{basket}, dispatch] = useStateValue();


    return (
        
        <div className="subtotal">
            <CurrencyFormat 
                renderText= {(value) => (
                    <p>
                        Subtotal ({basket.length}): <strong>{value}</strong>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </p>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandsSeparator={true}
                prefix={"$"}
            />
            <button>Purchase</button>
        </div>
    )
}