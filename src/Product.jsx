import "./Product.css";

function Product ({title,price=1,features}){
    const list = features.map((feature) => <li>{feature}</li>);
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h5>Price: {price}</h5>
            <p>{list}</p>
            {/* <p>{features2.b}</p> */}
        </div>
    );
}

export default Product;