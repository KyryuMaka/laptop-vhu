import { FaSearch } from "react-icons/fa";

var data =[{
    id: "1",
    displayName: `AnhNV`,
    fullName: "Nguyễn Văn Anh",
    email: "anhnv1234@gmail.com",
    updateDate: "03/10/2023",
    createDate: "01/10/2022",
    status: "Đã kích hoạt",
}]

function UsersTable(){

    function toogleModal(){
        document.getElementById("modal").classList.toggle("invisible");
    }

    function handleAdd(e){
        e.preventDefault();
        var [displayName, fullName, email] = e.target;
        var user = {
            displayName: displayName.value,
            fullName: fullName.value,
            email: email.value,
        }
        console.log(user);
        // fetch("https://ap-southeast-1.aws.data.mongodb-api.com/app/laptopvhu-pxytp/endpoint/addProduct?secret=nwXnJh1R8kvGWkoM")
    }

    function handleDelete(e){
        e.preventDefault();
        var id = e.target.parentElement.parentElement.id
        console.log(id)
    }

    function handleUpdate(e){
        e.preventDefault();
        var id = e.target.parentElement.parentElement.id
        console.log(id)
    }

    return(
        <>
            <div className="flex justify-between">
                <div className="">
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 text-gray-500 pointer-events-none">
                            <FaSearch />
                        </div>
                        <input 
                            type="text" 
                            id="table-search" 
                            className="block py-2 ps-10 
                                text-sm text-gray-900 
                                border border-gray-300 rounded-lg 
                                w-80 bg-gray-50 
                                focus:ring-blue-500 focus:border-blue-500" 
                            placeholder="Tìm kiếm sản phẩm" 
                        />
                    </div>
                </div>
                <button 
                    type="button"
                    onClick={toogleModal}
                    className="mb-2 ml-2 py-2 px-5 rounded-lg
                        text-white 
                        bg-blue-800 hover:bg-blue-500">
                    Thêm
                </button>
            </div>
            <div className="overflow-x-auto rounded-lg">
                <table 
                    className="w-full text-sm text-left rtl:text-right text-white-500">
                    <thead 
                        className="text-xs text-white uppercase bg-blue-500">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input 
                                        id="checkbox-all-search" 
                                        type="checkbox" 
                                        className="w-4 h-4 text-blue-600 bg-gray-100 
                                            border-gray-300 rounded 
                                            focus:ring-blue-500 focus:ring-2" 
                                    />
                                    <label htmlFor="checkbox-all-search" className="sr-only">
                                        checkbox
                                    </label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tên hiển thị
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Họ và tên
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ngày cập nhật
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ngày tạo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Trạng thái
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Hành động
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(dt => {
                            return(
                                <tr id={dt.id} key={dt.id} className="odd:bg-blue-200 even:bg-blue-100 border-b hover:bg-blue-50">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input 
                                                id="checkbox-table-search-1" 
                                                type="checkbox" 
                                                className="w-4 h-4 text-blue-600 bg-gray-100 
                                                    border-gray-300 rounded 
                                                    focus:ring-blue-500 focus:ring-2" 
                                            />
                                            <label htmlFor="checkbox-table-search-1" className="sr-only">
                                                checkbox
                                            </label>
                                        </div>
                                    </td>
                                    <th 
                                        scope="row" 
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {dt.displayName}
                                    </th>
                                    <td className="px-6 py-4">
                                        {dt.fullName}
                                    </td>
                                    <td className="px-6 py-4">
                                        {dt.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {dt.updateDate}
                                    </td>
                                    <td className="px-6 py-4">
                                        {dt.createDate}
                                    </td>
                                    <td className="px-6 py-4">
                                        {dt.status}
                                    </td>
                                    <td className="flex items-center px-6 py-4">
                                        <p onClick={e => handleUpdate(e)} className="cursor-pointer font-medium text-blue-600 hover:underline">Edit</p>
                                        <p onClick={e => handleDelete(e)} className="cursor-pointer font-medium text-red-600 hover:underline ms-3">Remove</p>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div 
                id="modal"
                className="bg-blue-500/10 
                    fixed top-0 right-0 left-0 z-10 
                    flex justify-center items-center 
                    min-w-screen min-h-screen invisible"
            >
                <div className="bg-white p-5 rounded-lg">
                    <h1 className="text-center font-bold text-3xl uppercase">Thêm Người dùng</h1>
                    <form 
                        onSubmit={e => {handleAdd(e);}} 
                        className="grid grid-cols-2 gap-5 justify-center mt-5"
                    >
                        <div className="relative z-0 w-80 group mx-auto">
                            <input 
                                type="text" 
                                name="displayName" 
                                id="displayName" 
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
                                htmlFor="displayName" 
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
                                Tên hiển thị
                            </label>
                        </div>
                        <div className="relative z-0 w-80 group mx-auto">
                            <input 
                                type="text" 
                                name="fullName" 
                                id="fullName" 
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
                                Họ và tên
                            </label>
                        </div>
                        <div className="relative z-0 w-full group mx-auto col-span-2">
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
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
                                htmlFor="email" 
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
                                Email
                            </label>
                        </div>
                        <div className="col-span-2 mx-auto mt-5">
                            <button 
                                type="reset"
                                className="mx-2 mb-5 py-2 px-5 rounded-lg
                                    text-white col-span-2
                                    bg-gray-800 hover:bg-gray-00"
                                onClick={toogleModal}
                            >
                                Hủy
                            </button>
                            <button 
                                type="submit"
                                className="mx-2 mb-5 py-2 px-5 rounded-lg
                                    text-white col-span-2
                                    bg-blue-800 hover:bg-blue-500">
                                Thêm
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UsersTable;