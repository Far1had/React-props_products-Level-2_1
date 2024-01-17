import "../ProductCard/ProductCard.css"
const ProductCard = ({ img, product, price }) => {
  return (
 
      <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px' }}>
        <img src={img} alt={product} style={{ width: '100%' }} />
        <h3>{product}</h3>
        <p>{price}</p>
      </div>
  

  );
};

export default ProductCard;
