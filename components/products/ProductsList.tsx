import React, {FC} from 'react';
import {IOrder, IProduct} from "@/types";
import ProductItem from "@/components/products/ProductItem";


interface ProductsListProps {
    products: IProduct[];
    orders: IOrder[];
}

const ProductsList: FC<ProductsListProps> = ({products, orders}) => {
    return (
        <div className="overflow-x-hidden">
                        <div className="overflow-x-auto mt-4 p-4">
                            {products.map(item => (
                                <ProductItem key={item.id} product={item} orders={orders}/>
                            ))}
                        </div>
        </div>
    );
};

export default ProductsList;