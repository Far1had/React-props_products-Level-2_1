
import ProductCard from '../ProductCard/ProductCard';
import '../ProductList/ProductList.css'; 

const ProductList = () => {
    return (
      <div className="product-list-container">
        <ProductCard
          img="https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg"
          product="Produkt 1"
          price="$19.99"
        />
        <ProductCard
          img="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          product="Produkt 2"
          price="$29.99"
        />
        <ProductCard
          img="https://static.wixstatic.com/media/25ebdc%5F11569a061f824bc99cda2e6b1ac6348b~mv2.jpg/v1/fill/w%5F740,h%5F493,al%5Fc,q%5F85,usm%5F0.66%5F1.00%5F0.01,enc%5Fauto/25ebdc%5F11569a061f824bc99cda2e6b1ac6348b~mv2.jpg"
          product="Produkt 3"
          price="$39.99"
        />
      </div>
    );
  };
  
  export default ProductList;