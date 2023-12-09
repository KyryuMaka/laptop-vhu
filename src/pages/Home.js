import Navbar from '../client/components/Navbar.js';
import Carousel from '../client/components/Carousel';
import ProductCard from '../client/components/ProductCard';
import Footer from '../client/components/Footer';

import img1 from "../images/img.webp";

var testData =[{
    images: img1,
    title: "Acer Nitro 5",
    price: "27,000,000",
    link: "/"
},{
    images: img1,
    title: "Acer Nitro 5",
    price: "27,000,000",
    link: "/"
},{
    images: img1,
    title: "Acer Nitro 5",
    price: "27,000,000",
    link: "/"
},{
    images: img1,
    title: "Acer Nitro 5",
    price: "27,000,000",
    link: "/"
},{
    images: img1,
    title: "Acer Nitro 5",
    price: "27,000,000",
    link: "/"
},{
    images: img1,
    title: "Acer Nitro 5",
    price: "27,000,000",
    link: "/"
},{
    images: img1,
    title: "Acer Nitro 5",
    price: "27,000,000",
    link: "/"
}]

function Home() {
  return (
    <>
        <Navbar />
        <div className="lg:container lg:mx-auto max-lg:mx-3">
            <Carousel />
            <div>
                <h1>SẢN PHẨM NỔI BẬT</h1>
                <div 
                    className="grid lg:grid-cols-5 max-lg:grid-cols-2
                    lg:gap-y-10 max-lg:gap-5
                    my-5 justify-center"
                >
                    {testData.map(card => {
                        return(
                            <ProductCard images={card.images} title={card.title} price={card.price} link={card.link} />
                        )
                    })}
                </div>
            </div>
        </div>
        <Footer />
    </>
  );
}

export default Home;
