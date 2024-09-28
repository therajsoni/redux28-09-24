import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../Features/Product/ProductSlice";

const ProductList = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.product.items);
    const productStatus = useSelector(state => state.products.status); 
  
    useEffect(()=>{
    if(productStatus === "idle"){
        dispatch(fetchProducts());
    }
    },[productStatus,dispatch]);
     
  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };


    return (
    <div>

    </div>
  )
}

export default ProductList