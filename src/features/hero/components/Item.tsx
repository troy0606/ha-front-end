import { Link } from "react-router-dom";
import { IHeroData } from "../model";

interface IProps extends IHeroData{
}

const Item = ({ image, id, name }: IProps) => {
  return (
    <Link to={`${id}`} className="py-4 px-2 border-gray-300 w-1/4">
      <div className="rounded overflow-hidden shadow-lg hover:scale-95 transition ease-in-out cursor-pointer">
        <img src={image} alt={name} className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-l mb-2">{name}</div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
