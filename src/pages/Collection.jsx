import './Collection.scss';
import CollectionSidebar from "../components/collection-sidebar/CollectionSidebar";
import CollectionCard from '../components/collection-card/CollectionCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slice/products';
import { useEffect } from 'react';
const Collection = () => {
    const dispatch = useDispatch();
    const productsData = useSelector(state => state.getProducts);

    useEffect(() => {
        dispatch(fetchProducts('https://fakestoreapi.com/products'));
    }, []);

    const productCards = productsData?.products?.map((product) => (
        <CollectionCard key={product.id} id={product.id} title={product.title} image={product.image} price={product.price} />
    ));


    return (
        <div className='container'>
            <div className="collection">
                <CollectionSidebar />
                <div className="collection__cards">
                    {productCards}
                </div>
            </div>
        </div>

    )
}

export default Collection;