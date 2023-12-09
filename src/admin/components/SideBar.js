var list =[{
    title: "DASHBORD",
    children: [{
        title: "Báo cáo tổng quan",
        link: "/admin/report"
    },{
        title: "Báo cáo doanh thu ngày",
        link: "/admin/day-report"
    }]
},{
    title: "CONTENT",
    children: [{
        title: "Sản phẩm",
        link: "/admin/product"
    },{
        title: "Danh mục",
        link: "/admin/categories"
    },{
        title: "Nhà sản xuất",
        link: "/admin/manufacturers"
    },{
        title: "Mẫu mã",
        link: "/admin/models"
    }]
},{
    title: "ADMIN",
    children: [{
        title: "Quản lý người dùng",
        link: "/admin/users"
    },{
        title: "Phân quyền",
        link: "/admin/permission"
    }]
}]

function SideBar(){
    return(
        <>
            <div>
                <ul>
                    {list.map(e => {
                        return(
                            <li key={e.title} className="font-bold mb-3">
                                <p>{e.title}</p>
                                <ul className="font-light ml-5">
                                    {e.children.map(el => {
                                        return(
                                            <li key={el.title}>
                                                <a href={el.link}>{el.title}</a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default SideBar