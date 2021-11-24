import React, {useState} from "react";
import './NewProduct.css';

const NewProduct = (props) => {
    const [price, setPrice] = useState();
    const [name, setName] = useState();
    const [category, setCategory] = useState();

    const PriceChangeHandler = (e) => {
        setPrice(e.target.value);
    };
    const NameChangeHandler = (e) => {
        setName(e.target.value);
    };
    const CategoryChangeHandler = (e) => {
        setCategory(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const ProductData = {
            NameData : name,
            PriceData : price,
            CategoryData : category
        };

        props.AddProduct(ProductData);

        setName('');
        setPrice('');
        setCategory('');
    }
    return (
        <div className='new-product'>
        <form onSubmit={submitHandler}>
            <div className='new-product__controls'>
            <div className='new-product__control'>
                <label>Name</label>
                <input 
                    type='text' 
                    placeholder="Product name" 
                    value={name}
                    onChange={NameChangeHandler}    
                />
            </div>
            <div className='new-product__control'>
                <label>Price</label>
                <input 
                    type='number' 
                    placeholder="Product price" 
                    value={price}
                    onChange={PriceChangeHandler}
                />
            </div>
            <div className='new-product__control'>
                <label>Category</label>
                <select 
                    value={category}
                    onChange={CategoryChangeHandler}
                >
                    <option value=""></option>
                    <option value="Fashion">Fashion</option>
                    <option value="Smart Phone">Smartphone</option>
                    <option value="Fashion">Smart Tivi</option>
                </select>
            </div>
            </div>
            <div className='new-product__actions'>
                <button type='submit'>Add Product</button>
            </div>
        </form>
        </div>

    )
}
export default NewProduct;