import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

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
      prev.find((p) => p.id === item.id && p.source === item.source)
        ? prev
        : [...prev, item],
    );
  };
  //Remove fav
  const removeFromFavorite = (p) => {
    setFavorites((prev) =>
      prev.filter((item) => item.id !== p.id || item.source !== p.source),
    );
  };

  // toggleFavorite
  const toggleFavorite = (item) => {
    const isFav = favorites.some(
      (fav) => fav.id === item.id && fav.source === item.source,
    );

    setFavorites((prev) =>
      isFav
        ? prev.filter((p) => p.id !== item.id || p.source !== item.source)
        : [...prev, item],
    );
    if (window.innerWidth >= 1024) {
      if (isFav) {
        toast.warning("Removed from favorites ❌", { duration: 1200 });
      } else {
        toast.success("Added to favorites ❤️", { duration: 1200 });
      }
    }
  };

  // boolean
  const isFavorite = (item) =>
    favorites.some((fav) => fav.id === item.id && fav.source === item.source);

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
