import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div
      className="card"
      style={{
        width: "220px",
        height: "380px",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "4px",
        }}
      />
      <h3
        style={{ fontSize: "16px", margin: "10px 0 5px", fontWeight: "bold" }}
      >
        {product.title}
      </h3>
      <p style={{ fontSize: "13px", flexGrow: 1 }}>
        {product.description.slice(0, 60)}...
      </p>
      <p style={{ fontWeight: "bold", marginTop: "10px" }}>${product.price}</p>
      <Link
        to={`/products/${product.id}`}
        style={{
          marginTop: "5px",
          color: "inherit",
          textDecoration: "underline",
        }}
      >
        Ma'lumotlar
      </Link>
    </div>
  );
};

export default ProductCard;
