import Header from "./components/Header";
import SideBar from "./components/SideBar";

import ProductTable from "./components/ProductTable";
import CategoriesTable from "./components/CategoriesTable";
import ManufacturersTable from "./components/ManufacturersTable";
import ModelsTable from "./components/ModelsTable";

import UsersTable from "./components/UsersTable";
import PermissionTable from "./components/PermissionTable";

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