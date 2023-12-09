function ProductCard(props){
    const {images, title, price, link} = props;
    return(
        <>
        <a href={link} className="border-2 rounded-xl mx-auto bg-blue-500">
            <div className="flex justify-center">
                <img className="mb-5 rounded-t-lg" src={images} alt="" />
            </div>
            <div className="m-5 mt-0 text-white">
                <p className="text-2xl font-semibold">{title}</p>
                <p className="text-lg font-medium">{price}đ</p>
            </div>
        </a>
        </>
    )
}

export default ProductCard;