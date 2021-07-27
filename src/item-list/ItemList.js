import AmountRow from '../common/AmountRow';
import { useDispatch, useSelector } from 'react-redux';
import './ItemList.css';
import { selectItem } from '../state/itemSlice';

export default function ItemList() {
  const itemList = useSelector(state => state.item.itemList);
  const selectedItem = useSelector(state => state.item.selectedItem);

  const dispatch = useDispatch();

  let totalCost = 0;
  for (let item of itemList) {
    totalCost += item.amount;
  }

  const tax = totalCost * 0.04; // Georgia sales tax rate is 4%

  return (
    <div className="ItemList">
      <div className="list-header">
        <p>{itemList.length} Item{itemList.length !== 1 ? 's' : ''}</p>
      </div>
      <ul className="list-body">
        {
          itemList.map((item, index) => {
            let className = 'list-item';
            if (selectedItem != null && item.id === selectedItem.id) {
              className += ' selected';
            }

            return (
              <li key={item.id} className={className} onClick={() => dispatch(selectItem(index))}>
                <AmountRow name={item.name} amount={item.amount} />
              </li>
            );
          })
        }
      </ul>
      <div className="list-footer">
        <AmountRow name="Tax" amount={tax}/>
        <AmountRow name="Total" amount={totalCost}/>
        <button>Pay</button>
      </div>
    </div>
  );
}
