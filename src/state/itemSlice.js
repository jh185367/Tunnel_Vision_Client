import { createSlice } from '@reduxjs/toolkit';

export const itemSlice = createSlice({
  name: 'item',
  initialState: {
    itemList: [],
    selectedItem: null
    // selectedItem: {
    //   id: '',
    //   name: '',
    //   amount: 0
    // }
  },
  reducers: {
    addToItemList: (state, action) => {
      const existingIndex = state.itemList.findIndex(item => item.id === action.payload.id);

      if (existingIndex === -1) {
        state.itemList.push(action.payload);
      } else {
        state.itemList[existingIndex] = action.payload;
      }
    },
    selectItem: (state, action) => {
      state.selectedItem = state.itemList[action.payload];
    },
    selectLastItem: state => {
      if (state.itemList.length > 0) {
          state.selectedItem = state.itemList[state.itemList.length - 1];
      }
    }
  }
});

export const { addToItemList, selectItem, selectLastItem } = itemSlice.actions;

export default itemSlice.reducer;
