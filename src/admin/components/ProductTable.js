import { FaSearch } from "react-icons/fa";

var data =[{
    id: "1",
    name: `Acer Nitro 5 Tiger`,
    color: "Black",
    category: "Laptop",
    accessori: "Yes",
    available: "Yes",
    price: "27.000.000đ",
    weight: "3kg."
},{
    id: "2",
    name: `Asus ExpertBook B1400CACE`,
    color: "Black",
    category: "Laptop",
    accessori: "Yes",
    available: "Yes",
    price: "16.000.000đ",
    weight: "1.5kg."
},{
    id: "3",
    name: `Lenovo Thinkpad E14`,
    color: "Black",
    category: "Laptop",
    accessori: "Yes",
    available: "Yes",
    price: "14.000.000đ",
    weight: "1.5kg."
}]

function ProductTable(){

    function handleAdd(e){
        fetch("https://ap-southeast-1.aws.data.mongodb-api.com/app/laptopvhu-pxytp/endpoint/addProduct?secret=nwXnJh1R8kvGWkoM")
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
                    onClick={handleAdd}
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
                                Tên sản phẩm
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Màu sắc
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Danh mục
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phụ kiện
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Có sẵn
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Giá
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Trọng lượng
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
                                        {dt.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {dt.color}
                                    </td>
                                    <td className="px-6 py-4">
                                        {dt.category}
                                    </td>
                                    <td className="px-6 py-4">
                                        {dt.accessori}
                                    </td>
                                    <td className="px-6 py-4">
                                        {dt.available}
                                    </td>
                                    <td className="px-6 py-4">
                                        {dt.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        {dt.weight}
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
        </>
    )
}

export default ProductTable;