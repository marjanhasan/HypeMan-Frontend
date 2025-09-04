import ProductCard from "../ProductCard/ProductCard";
import mainImage from "../../assets/productImg.png"; // Placeholder image
import hoverImage from "../../assets/productImgHover.png"; // Placeholder image

const products = [
  {
    id: 1,
    mainImage: mainImage,
    hoverImage: hoverImage,
    title: "Product 1",
    price: 29.99,
  },
  {
    id: 2,
    mainImage: mainImage,
    hoverImage: hoverImage,
    title: "Product 2",
    price: 39.99,
  },
  {
    id: 3,
    mainImage: mainImage,
    hoverImage: hoverImage,
    title: "Product 3",
    price: 49.99,
  },
  {
    id: 4,
    mainImage: mainImage,
    hoverImage: hoverImage,
    title: "Product 4",
    price: 59.99,
  },
  // Add more products as needed
];

const ProductSection = () => {
  return (
    <div className="py-8 px-4 bg-gray-100">
      <div className="text-center my-6">
        <h2 className="text-2xl font-bold uppercase">All Products</h2>
        <p className="text-gray-600">Discover our range of products</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {/* Product items will be rendered here */}
        {products.map((product) => (
          <ProductCard
            key={product.id}
            mainImage={product.mainImage}
            hoverImage={product.hoverImage}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
      <div className="text-center mt-2">
        <button className="bg-white text-black border py-2 px-1 sm:px-3 my-5 text-xs sm:text-base rounded whitespace-nowrap uppercase font-medium cursor-pointer hover:bg-black hover:text-white transition duration-300">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default ProductSection;
