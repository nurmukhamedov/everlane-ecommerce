import './CollectionCard.scss';
import { useDispatch } from 'react-redux';
import { addCartProducts } from '../../redux/slice/cart';
const CollectionCard = (props) => {
    const dispatch = useDispatch();

    const { image, title, price, id } = props;

    const handleAddToCart = (id) => {
        const cartData = {
            userId: id,
            date: new Date().toLocaleString(),
            products: [{ productId: id, quantity: 1 }]
        };
        dispatch(addCartProducts(cartData))
        
    }

    return (
        <div className='collectionCard'>
            <img src={image} alt={title} />
            <div className='collectionCard__info'>
                <h4>{title}</h4>
                <span>${price}</span>
            </div>
            <button onClick={() => handleAddToCart(id)}>Add to Cart</button>
        </div>
    )
}

export default CollectionCard