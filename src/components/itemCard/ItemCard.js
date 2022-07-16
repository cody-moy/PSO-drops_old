import React, { useState, useEffect } from 'react';
import getItemFromWiki from '../../Utils/getItemFromWiki';
import WeaponCard from './types/WeaponCard';

import './ItemCard.css';
import ArmorCard from './types/ArmorCard';

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
    <div className="item-card-container">
      {itemToDisplay && weapons.includes(item.type.object) && (
        <WeaponCard item={itemToDisplay} itemType={item.type.object} />
      )}
      {itemToDisplay && armor.includes(item.type.object) && (
        <ArmorCard item={itemToDisplay} itemType={item.type.object} />
      )}
      {itemToDisplay && item.type.object === 'Unit'}
      {itemToDisplay && item.type.object === 'Tool'}
      {itemToDisplay && item.type.object === 'Misc'}
    </div>
  );
}

export default ItemCard;
