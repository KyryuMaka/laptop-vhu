import Header from "../admin/components/Header";
import SideBar from "../admin/components/SideBar";

import ProductTable from "../admin/components/ProductTable";
import CategoriesTable from "../admin/components/CategoriesTable";
import ManufacturersTable from "../admin/components/ManufacturersTable";
import ModelsTable from "../admin/components/ModelsTable";

import UsersTable from "../admin/components/UsersTable";
import PermissionTable from "../admin/components/PermissionTable";

function Admin(props){
    var route = props.match.params.route;
    return(
        <>
            <div className="min-w-screen min-h-screen bg-gray-200">
                <Header />
                <div className="grid grid-cols-5 my-8 mx-10">
                    <SideBar />
                    <div className="col-span-4 w-full">
                    {(() => {
                        switch(route) {
                        case 'product':
                            return <ProductTable />
                        case 'categories':
                            return <CategoriesTable />
                        case 'manufacturers':
                            return <ManufacturersTable />
                        case 'models':
                            return <ModelsTable />
                        case 'users':
                            return <UsersTable />
                        case 'permission':
                            return <PermissionTable />
                        default:
                            return <></>
                        }
                    })()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin;