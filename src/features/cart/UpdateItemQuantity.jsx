import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  function handleIncreaseItems() {
    console.log(pizzaId);
    dispatch(increaseItemQuantity(pizzaId));
  }

  function handleDecreaseItems() {
    dispatch(decreaseItemQuantity(pizzaId));
  }

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={handleDecreaseItems}>
        -
      </Button>
      <span>{currentQuantity}</span>
      <Button type="round" onClick={handleIncreaseItems}>
        +
      </Button>
    </div>
  );
}
