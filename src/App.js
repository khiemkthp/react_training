import './App.css';
import ProductList from './components/Products/ProductList.js';
import NewProduct from './components/Products/NewProduct.js';

function App() {
  return (
    <h3> {element}</h3>
  );
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
 
const user = {
  firstName: 'Khiem',
  lastName: 'Ngo'
};

const RedColor = 'RedColor';
const PinkColor = 'PinkColor';

const products = [
  {name: "T-Shirt", category: "Fashion", price: 12},
  {name: "Red Dress", category: "Fashion", price: 20},
  {name: "iPhoneX", category: "Smartphone", price: 600},
  {name: "iPhone 12", category: "Fashion", price: 1200},
  {name: "Smart Tivi Sony 50 Inch", category: "Smart Tivi", price: 700}
];

const AddProductHandler = (productdata) => {
  console.log("Process to add product");
  console.log(productdata);
};

const element = (
  <div>
    <h1 className={RedColor}>
      Xin chào, {formatName(user)}!
    </h1>
    <NewProduct AddProduct={AddProductHandler}></NewProduct>
    <ProductList products={products}></ProductList>
  </div>
);

export default App;
