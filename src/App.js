import { useEffect } from 'react';
import socketIOclient from 'socket.io-client';
import ItemList from './item-list/ItemList';
import './App.css';
import ItemSelected from './item-selected/ItemSelected';
import { addToItemList, selectLastItem } from './state/itemSlice';
import { useDispatch } from 'react-redux';

const socket = socketIOclient("http://34.72.101.172/");

const logoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/NCR_Corporation_logo.svg/1200px-NCR_Corporation_logo.svg.png";

function App() {
  // listen for scanned items from backend
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('message', function (data) {
      console.log(data);
    });

    socket.on('send_item', function (item) {
      //barcodeList = ;
      dispatch(addToItemList(item));
      dispatch(selectLastItem());
      console.log(item);
    })
  }, [dispatch]);

  return (
    <div className="App">
      <ItemList/>
      <div className="left-window">
        <img className="company-logo" height="75" width="75" src={logoUrl} alt="NCR logo"/>
        <ItemSelected/>
      </div>
    </div>
  );
}

export default App;
