import ProductItem from './ProductItem';
import List from '../UI/List';

function ProductList(props) {
    return(
        <List>
            <ProductItem 
                name={props.products[0].name}
                category={props.products[0].category}
                price={props.products[0].price}
            >
            </ProductItem>

            <ProductItem 
                name={props.products[1].name}
                category={props.products[1].category}
                price={props.products[1].price}
            >
            </ProductItem>

            <ProductItem 
                name={props.products[2].name}
                category={props.products[2].category}
                price={props.products[2].price}
            >
            </ProductItem>

            <ProductItem 
                name={props.products[3].name}
                category={props.products[3].category}
                price={props.products[3].price}
            >
            </ProductItem>

            <ProductItem 
                name={props.products[4].name}
                category={props.products[4].category}
                price={props.products[4].price}
            >
            </ProductItem>
        </List>
    )
}
export default ProductList;