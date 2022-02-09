import { Button } from "@mui/material";

//Types

import { CartItemType } from "../App";

//Styles
import { Wrapper } from "../App.style";

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
        </div>
    <Button onClick={() => console.log()}>Add to cart</Button>
    </Wrapper>
)

export default Item;