import './AmountRow.css';

export default function AmountRow(props) {
  return (
    <div className="AmountRow">
      <span>{props.name || 'None'}</span>
      <span>${props.amount ? props.amount.toFixed(2) : '-'}</span>
    </div>
  );
}
