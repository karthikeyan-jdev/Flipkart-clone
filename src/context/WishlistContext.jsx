import { createContext, useContext, useEffect, useState } from "react";

const FavoriteContext = createContext();

export const useFavorite = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // get items from local storgae to set items to favorites
  useEffect(() => {
    const storedFav = localStorage.getItem("favorites");
    if (storedFav) setFavorites(JSON.parse(storedFav));
  }, []);

  // exeiting favorite items to store local storage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // addToFavorite
  const addToFavorite = (item) => {
    setFavorites((prev) =>
      prev.find((p) => p.id === item.id) ? prev : [...prev, item]
    );
  };
  //Remove fav
  const removeFromFavorite = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  // toggleFavorite
  const toggleFavorite = (item) => {
    setFavorites((prev) =>
      prev.find((p) => p.id === item.id)
        ? prev.filter((p) => p.id !== item.id)
        : [...prev, item]
    );
  };
  // boolean
  const isFavorite = (item) => favorites.some((fav) => fav.id === item.id);

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addToFavorite,
        removeFromFavorite,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
