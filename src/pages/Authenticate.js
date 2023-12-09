function Authenticate(){

    function login(e){
        e.preventDefault();
        var id = e.target[0].value;
        var pw = e.target[1].value;
        console.log(id, pw)
    }

    return(
        <>
            <div className="min-w-screen min-h-screen grid justify-center items-center">
                <form 
                    onSubmit={e => {login(e);}} 
                    className="border-4 w-96 grid grid-cols-1 justify-center"
                >
                    <div className="mx-auto my-5">
                        <img 
                            className="" 
                            src="https://vhu.edu.vn/Resources/Images/SubDomain/HomePage/Logo/logo-footer.png"
                            alt=""
                        />
                    </div>
                    <div className="relative z-0 w-80 mb-5 group mx-auto">
                        <input 
                            type="text" 
                            name="id" 
                            id="id" 
                            className="block py-2.5 px-0 w-full 
                                text-sm text-gray-900 
                                bg-transparent 
                                border-0 border-b-2 border-gray-300 
                                appearance-none 
                                focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                            placeholder=" " 
                            required 
                        />
                        <label 
                            htmlFor="id" 
                            className="peer-focus:font-medium 
                                absolute text-sm text-gray-500 
                                duration-300 transform -translate-y-6 scale-75 
                                top-3 -z-10 origin-[0] 
                                peer-focus:start-0 rtl:peer-focus:translate-x-1/4 
                                rtl:peer-focus:left-auto peer-focus:text-blue-600 
                                peer-placeholder-shown:scale-100 
                                peer-placeholder-shown:translate-y-0 
                                peer-focus:scale-75 
                                peer-focus:-translate-y-6"
                        >
                            Tên đăng nhập
                        </label>
                    </div>
                    <div className="relative z-0 w-80 mb-5 group mx-auto">
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            className="block py-2.5 px-0 w-full 
                                text-sm text-gray-900 
                                bg-transparent 
                                border-0 border-b-2 border-gray-300 
                                appearance-none 
                                focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                            placeholder=" " 
                            required 
                        />
                        <label 
                            htmlFor="password" 
                            className="peer-focus:font-medium 
                                absolute text-sm text-gray-500 
                                duration-300 transform -translate-y-6 scale-75 
                                top-3 -z-10 origin-[0] 
                                peer-focus:start-0 rtl:peer-focus:translate-x-1/4 
                                rtl:peer-focus:left-auto peer-focus:text-blue-600 
                                peer-placeholder-shown:scale-100 
                                peer-placeholder-shown:translate-y-0 
                                peer-focus:scale-75 
                                peer-focus:-translate-y-6"
                        >
                            Mật khẩu
                        </label>
                    </div>
                    <button 
                        type="submit"
                        className="mx-auto mb-5 py-2 px-5 rounded-lg
                            text-white 
                            bg-blue-800 hover:bg-blue-500">
                        Đăng nhập
                    </button>
                </form>
            </div>
        </>
    )
}

export default Authenticate;