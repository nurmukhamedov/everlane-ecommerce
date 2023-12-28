import './CollectionSidebar.scss';
const CollectionSidebar = (props) => {
    return (
        <div className='collectionSidebar'>
            <span className='collectionSidebar__number'>{props.productCount} Products</span>
            <hr />
            <h4>Category</h4>
            <div className='collectionSidebar__wrapper'>
                <label className='collectionSidebar__checkboxes'>
                    <input type='checkbox' />
                    <span>Everyone - All Gender Collection</span>
                </label>
                <label className='collectionSidebar__checkboxes'>
                    <input type='checkbox' />
                    <span>Accessories & Gift Cards</span>
                </label>
                <label className='collectionSidebar__checkboxes'>
                    <input type='checkbox' />
                    <span>Backpacks, Weekenders & Duffle Bags</span>
                </label>
                <label className='collectionSidebar__checkboxes'>
                    <input type='checkbox' />
                    <span>Dress Shirts & Button Downs</span>
                </label>
            </div>
        </div>
    )
}

export default CollectionSidebar