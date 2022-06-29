import { languages } from '../../helpers/data';
import Item from '../item/Item';
import './Card.css';

const Card = () => {
  return (
    <div className="cards-area-container">
      <div className="bars">
        <h1 className="bars-title">Maşallah</h1>
      </div>
      <h1 className="language-title">Languages</h1>
      <div className="cards-container">
        {languages.map((item, index) => {
          return <Item key={index} card={item} />;
        })}
      </div>
    </div>
  );
};

export default Card;
