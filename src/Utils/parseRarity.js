import { ReactComponent as Star } from '../assets/star.svg';

const parseRarity = rarity => {
  let temp = [];
  for (let x = 0; x < rarity; x++) temp.push(x);
  return (
    <div className="rarity-stars">
      {temp.map(index => {
        return index < 9 ? <Star id="star-normal" /> : <Star id="star-rare" />;
      })}
    </div>
  );
};

export default parseRarity;
