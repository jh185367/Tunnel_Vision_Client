import AmountRow from '../common/AmountRow';
import { useSelector } from 'react-redux';
import './ItemSelected.css';

export default function ItemSelected() {
  const selectedItem = useSelector(state => state.item.selectedItem);

  if (selectedItem != null) {
    return (
      <div className="ItemSelected">
        <AmountRow name={selectedItem.name} amount={selectedItem.amount}/>
        <img className="item-image" src={selectedItem.imageUrl} alt="Item"/>
      </div>
    );
  } else {
    return (<span></span>)
  }
  
}
