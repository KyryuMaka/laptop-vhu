function Header(){
    return(
        <>
            <div className="flex items-center justify-between p-5">
                <a href="/admin" className="flex items-center">
                    <img className="max-lg:h-12 lg:h-20" src="https://vhu.edu.vn/Resources/Images/SubDomain/HomePage/Logo/logo-footer.png" alt=""/>
                    <p className="pl-5 font-bold text-2xl">LAPTOP VHU</p>
                </a>
                <div className="flex items-center">
                    Xin chào, Lương Vĩ Thông!
                </div>
            </div>
        </>
    )
}

export default Header