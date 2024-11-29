import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    imgs: [],
  };



const redus = createSlice({
  name: 'count',
  initialState,
  reducers: {
    addImage: (state, action) => {
      state.imgs = action.payload; // Store the fetched image URL in the state
    },
    addPost: (state, action) => {
      const newImages = action.payload.filter(
        (newImg) => !state.imgs.some((existingImg) => existingImg.id === newImg.id)
      );
      state.imgs = [...state.imgs, ...newImages]; // Store the fetched image URL in the state
    },
    updateImage: (state, action) => {
      const index = state.imgs.findIndex((img) => img.id === action.payload.id);
      if (index !== -1) {
        state.imgs[index] = action.payload; // Update the specific image in the state
      }
    },
    deleteImage: (state, action) => {
      console.log("Reducer called with payload:", action.payload);
      state.imgs = state.imgs.filter((img) => img.id !== action.payload); // Remove the image locally
    }
  }
})

export const { addImage, addPost, updateImage, deleteImage } = redus.actions;
export default redus.reducer;