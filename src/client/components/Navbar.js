import { FaBars, FaHome, FaPhoneAlt, FaFacebook, FaEnvelope, FaYoutube, FaShoppingCart } from "react-icons/fa";

var testDt =[{
    name: "Giới thiệu",
    link: "",
    children:[]
},{
    name: "Liên hệ",
    link: "",
    children:[]
},{
    name: "Giới thiệu",
    link: "",
    children:[]
}]


function Navbar(){

    function toogleCart(e){
        e.preventDefault();
        document.getElementById("menu").classList.toggle("max-lg:hidden")
    }

    function toogleMenu(e){
        e.preventDefault();
        document.getElementById("menu").classList.toggle("max-lg:hidden")
    }
    
    return(
        <>
        <div className="bg-[#ededed]">
            <div className="container mx-auto flex items-center justify-between p-5">
                <a href="/" className="flex items-center">
                    <img className="max-lg:h-12 lg:h-20" src="https://vhu.edu.vn/Resources/Images/SubDomain/HomePage/Logo/logo-footer.png" alt=""/>
                    <p className="pl-5 font-bold text-2xl">LAPTOP VHU</p>
                </a>
                <div className="flex items-center">
                    <button className="mr-3 text-[30px]" onClick={toogleCart}>
                        <FaShoppingCart />
                    </button>
                    <div class="p-3 hidden lg:flex items-center">
                        <a href="tel:18001568" class="flex items-center text-[30px] font-semibold">
                            <FaPhoneAlt />
                            <span class="mx-3">1800 1568</span>
                        </a>
                        <a href=" " class="text-4xl font-semibold mx-1 text-[#0866ff]">
                            <FaFacebook />
                        </a>
                        <a href="mailto:" class="text-4xl font-semibold mx-1">
                           <FaEnvelope />
                        </a>
                        <a href=" " class="text-5xl font-semibold mx-1 text-red-600">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
                <button className="lg:hidden" onClick={toogleMenu}>
                    <FaBars />
                </button>
            </div>
        </div>
        <div id="menu" className="bg-[#264485] max-lg:hidden max-lg:z-10 max-lg:fixed max-lg:w-full">
            <div className="container mx-auto flex items-center py-2">
                <ul className="lg:flex lg:items-center text-lg font-semibold text-white">
                    <li className="px-4 max-lg:py-2 hover:text-[#4f9e46] max-lg:border-b-2 max-lg:w-screen">
                        <a href=" " className="max-lg:hidden">
                            <FaHome />
                        </a>
                        <a href=" " className="lg:hidden">
                            Trang chủ
                        </a>
                    </li><p className="max-lg:hidden lg:visible">|</p>
                    {testDt.map(e => {
                        return(
                            <>
                                <li className="px-4 max-lg:py-2 hover:text-[#4f9e46] max-lg:border-b-2 max-lg:w-screen">
                                    <a href={e.link}>
                                        {e.name}
                                    </a>
                                </li><p className="max-lg:hidden lg:visible">|</p>
                            </>
                        )
                    })}
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar;