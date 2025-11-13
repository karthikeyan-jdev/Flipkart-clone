import { createContext, useContext, useEffect, useState } from "react";

const FavoriteContext = createContext();

export const useFavorite = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFav = localStorage.getItem("favorites");
    if (storedFav) setFavorites(JSON.parse(storedFav));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorite = (item) => {
    setFavorites((prev) =>
      prev.find((p) => p.id === item.id) ? prev : [...prev, item]
    );
  };

  const removeFromFavorite = (id) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleFavorite = (item) => {
    setFavorites((prev) =>
      prev.some((p) => p.id === item.id)
        ? prev.filter((p) => p.id !== item.id)
        : [...prev, item]
    );
  };
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
