import React from "react";
import SHOP_DATA from "./082 shop.data";
import CollectionPreview from "../../components/preview-collection/collection-preview";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections : SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
        <div className="shop-page">
            {collections.map(({id, ...otherColectionProps }) => (
                    <CollectionPreview key={id} {...otherColectionProps} />
                ))
            }
        </div>
        );
    }
}

export default ShopPage;