import ProductCard from "../ProductCard/ProductCard";
import mainImage from "../../assets/productImg.png"; // Placeholder image
import hoverImage from "../../assets/productImgHover.png"; // Placeholder image

const ProductSection = () => {
  return (
    <div>
      <h2>Featured Products</h2>
      <div className="">
        {/* Product items will be rendered here */}
        <ProductCard
          mainImage={mainImage}
          hoverImage={hoverImage}
          title="Product 1"
          price={29.99}
        />
      </div>
    </div>
  );
};

export default ProductSection;
