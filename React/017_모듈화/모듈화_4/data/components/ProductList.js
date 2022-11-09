import productData from "../data.js";

export function ProductList (){
    return (
        <ul>
            {productData.map(i => (
                <ProductInfo item={i} key={i.id} />
            ))}
        </ul>
    )
}

function ProductInfo(props) {
    return (
        <li>
            <img
                src={
                    "http://test.api.weniv.co.kr/" + props.item["thumbnailImg"]
                }
                alt=""
            />
            <p>상품명: {props.item["productName"]}</p>
            <p>하트</p>
            <p>가격: {parseInt(props.item["price"] + 10000) * 0.2 + '원'}</p>
        </li>
    );
}