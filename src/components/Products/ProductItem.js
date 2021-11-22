import './ProductItem.css';
import React, {useState} from 'react';

function ProductItem(props) {
    const price = new Intl.NumberFormat('en-US',{pirce : 'currency', currency : 'USD'}).format(props.price);
    const [name, setName] = useState(props.name);
    const clickDetail = () => {
        setName(name + '!');
    };
    return (
        <div className="product-item">
            <div>
                {props.category}
            </div>
            <div className="product-item__description">
                <h3 onClick={clickDetail}>
                    {name}
                </h3>
                <div className="product-item__price">
                    {price}
                </div>
            </div>
        </div>
    )
}
export default ProductItem;