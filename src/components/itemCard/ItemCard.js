import React, { useState, useEffect } from 'react';
import getItemFromWiki from '../../Utils/getItemFromWiki';
import WeaponCard from './types/WeaponCard';
import ArmorCard from './types/ArmorCard';
import UnitCard from './types/UnitCard';
import EventItemCard from './types/EventItemCard';

import './ItemCard.css';
import ToolCard from './types/ToolCard';
import MiscCard from './types/MiscCard';

function ItemCard({ item }) {
  const [itemToDisplay, setItemToDisplay] = useState();

  const weapons = [
    'Bazooka',
    'Cane',
    'Card',
    'Claw',
    'Dagger',
    'Double-saber',
    'Fist',
    'Handgun',
    'Katana',
    'Launcher',
    'Mechgun',
    'Partisan',
    'Rifle',
    'Rod',
    'Saber',
    'Shot',
    'Slicer',
    'Sword',
    'Twin-sword',
    'Wand'
  ];
  const armor = ['Frame', 'Armor', 'Barrier', 'Shield'];

  useEffect(() => {
    setItemToDisplay(getItemFromWiki(item));
  }, []);

  return (
    <>
      {item && (
        <div className="item-card-container">
          {itemToDisplay && item.type.object === 'Unit' && (
            <UnitCard item={itemToDisplay} />
          )}
          {itemToDisplay && item.type.object === 'Tool' && (
            <ToolCard item={itemToDisplay} />
          )}
          {itemToDisplay &&
            item.type.object === 'Misc' &&
            item.type.objectSubType !== 'Event Item' && (
              <MiscCard item={itemToDisplay} />
            )}
          {itemToDisplay &&
            item.type.object === 'Misc' &&
            item.type.objectSubType === 'Event Item' && (
              <EventItemCard item={itemToDisplay} />
            )}
          {itemToDisplay && armor.includes(item.type.object) && (
            <ArmorCard item={itemToDisplay} itemType={item.type.object} />
          )}
          {itemToDisplay && weapons.includes(item.type.object) && (
            <WeaponCard item={itemToDisplay} itemType={item.type.object} />
          )}
        </div>
      )}
    </>
  );
}

export default ItemCard;
