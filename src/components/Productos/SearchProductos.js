import React, { useEffect, useState } from "react";
import crud from "../../conections/crud";
import Header from "../Header";
import SideBar from "../Sidebar";

const SearchProductos = () => {
    
    const [productos, setProductos] = useState([]);

    const getAllProductos = async () =>  {
        const response = await crud.GET(`/api/products/`);
        console.log(response.product);
        setProductos(response.product);
    }

    useEffect(() => {   
        getAllProductos();
    }, [])

    return(
        <>
          <Header/>
            <div className="md:flex md:min-h-screen">
                <SideBar/>
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg flex-1">
                        <div className="mt-10 flex justify-center bg-gradient-to-r text-sky-100 bg-clip-text font-display text-5xl tracking-tight text-transparent'">
                            <h1>
                            All Products
                            </h1>
                        </div>
                        <br></br>
                <form>
                    <table className="table table-bordered rounded-md w-full text-md  ">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-400 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th style={{width:'15%'}} scope="col" class="py-3 px-6">Image</th>
                                    <th style={{width:'20%'}} scope="col" class="py-3 px-6">Product Name</th>
                                    <th style={{width:'15%'}} scope="col" class="py-3 px-6">Stock </th>
                                    <th style={{width:'25%'}} scope="col" class="py-3 px-6">Price </th>
                                </tr>
                            </thead>
                            <tbody className="bg-sky-200 border-b ">
                                {productos.map( item => (
                                    <tr>
                                        <td><img src={item.imagen} width="100" heigth="100"/></td>
                                        <td scope="row" class="py-4 px-6 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white" >{item.nombre}</td>
                                        <td className="text-center">{item.stock}</td>
                                        <td className="text-center">{item.precio}</td>
                                        
                                    </tr>
                                ))}
                            </tbody>
                    </table>
                </form>
            </div>
            </div>
        </>
    )


}

export default SearchProductos;