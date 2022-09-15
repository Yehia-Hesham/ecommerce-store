import { useEffect } from "react";
import { connect, useDispatch,useSelector } from "react-redux";
import { useState } from "react";
import { Connect } from "react-redux";

function ItemListing({products})  {


    console.log("Products inside",products)

    let renderProducts=() => {
        return products.map((product,i) => {
            return <div key={i}>
            <a href="./item-description" className="items-center relative max-w-sm max-h-sm block h-70 rounded-lg shadow-lg bg-white hover:grayscale-0"><img className=" h-60" src={product.image}/></a>  {/*onClick={renderSection()}*/}
                <div className="flex items-center justify-between mt-3">
                    <div>
                        <a href="#" className="font-medium">{product.title}</a>
                        <a className="flex items-center" href="#">
                            <span className="text-xs font-medium text-gray-600">by</span>
                            <span className="text-xs font-medium ml-1 text-indigo-500">Store Name</span>
                        </a>
                    </div>
                <span className="flex items-center h-8 bg-indigo-200 text-indigo-600 text-sm px-2 rounded">$ {product.price}</span>
                </div>
            </div>
        }) 
    };

    return (
        <>
        <div className="flex flex-col w-screen min-h-screen p-10 bg-gray-100 text-gray-800">

        {/*<!-- Component Start -->*/}
        <h1 className="text-3xl">Product Category</h1>
        <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">
            {renderProducts()}
        </div>
        {/*<!-- Component End  -->*/}
    
    </div>
    </>
    )
}

const mapStateToProps = (state) => {
    return{
        products: state.productReducer.products
    }
}
export default connect(mapStateToProps)(ItemListing);