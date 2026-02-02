import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const savedFav = (favorites) =>
  localStorage.setItem("favorites", JSON.stringify(favorites));

const storedFavorites = localStorage.getItem("favorites")
  ? JSON.parse(localStorage.getItem("favorites"))
  : [];

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: { favorites: storedFavorites },
  reducers: {
    // addToFavorite
    addToFavorite(state, action) {
      const item = action.payload;
      const exists = state.favorites.find(
        (p) => p.id === item.id && p.source === item.source,
      );
      if (!exists) {
        state.favorites.unshift(item);
      }
      savedFav(state.favorites);
    },
    //Remove fav
    removeFromFavorite: (state, action) => {
      const item = action.payload;
      state.favorites = state.favorites.filter(
        (p) => p.id !== item.id || p.source !== item.source,
      );
      savedFav(state.favorites);
    },
    // toggleFavorite
    toggleFavorite: (state, action) => {
      const item = action.payload;
      const isFav = state.favorites.some(
        (fav) => fav.id === item.id && fav.source === item.source,
      );
      if (isFav) {
        state.favorites = state.favorites.filter(
          (p) => p.id !== item.id || p.source !== item.source,
        );
      } else {
        state.favorites.unshift(item);
      }
      if (window.innerWidth >= 1024) {
        if (isFav) { 
          toast.warning("Removed from favorites ❌", { duration: 1200 });
        } else {
          toast.success("Added to favorites ❤️", { duration: 1200 });
        }
      }
      savedFav(state.favorites);
    },
  },
});

export const { toggleFavorite, addToFavorite, removeFromFavorite } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
