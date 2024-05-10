import { useSelector} from "react-redux";
import {FavoriteCard} from "../../components";

export function Favourites() {
  const { favorites } = useSelector((state) => state.imdb);

  return (
    <>
      {favorites.length === 0 ? "empty"
        :favorites.map(item =>
          <FavoriteCard
            key={item.Title}
            props={item}
          />)
    }
    </>
  )
}