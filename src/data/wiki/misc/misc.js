export const misc = [
  {
    name: `AddSlot`,
    type: `Consumable`,
    description: `Adds a slot to the currently equipped armor`
  },
  {
    name: `Scape Doll`,
    type: `Recovery`,
    description: `A recovery item that will automatically revive the player upon death. Each Scape Doll has one use and is consumed upon use. Players revived by a Scape Doll will have their HP and TP restored, and casts will have their traps refilled.`
  },
  {
    name: `Heart of Lollipop`,
    type: `Weapon Skin`
  },
  {
    name: `Heart of DB's Saber`,
    type: `Weapon Skin`
  },
  {
    name: `Heart of Crazy Tune`,
    type: `Weapon Skin`
  },
  {
    name: `Heart of Daisy Chain`,
    type: `Weapon Skin`
  },
  {
    name: `Heart of Plantain Huge Fan`,
    type: `Weapon Skin`
  },
  {
    name: `Heart of Diska of Liberator`,
    type: `Weapon Skin`
  },
  {
    name: `Heart of Izmaela`,
    type: `Weapon Skin`
  },
  {
    name: `Heart of Suppressed Gun`,
    type: `Weapon Skin`
  },
  {
    name: `Heart of Tension Blaster`,
    type: `Weapon Skin`
  },
  {
    name: `Heart of Rianov 303SNR`,
    type: `Weapon Skin`
  },
  {
    name: `Heart of Samba Maracas`,
    type: `Weapon Skin`
  },
  {
    name: `Heart of Yasminkov 9000M`,
    type: `Weapon Skin`
  },
  {
    name: `Heart of Rabbit Wand`,
    type: `Weapon Skin`
  },
  {
    name: `Heart of Sorcerer's Cane`,
    type: `Weapon Skin`
  },
  {
    name: `Heart of The Sigh of a God`,
    type: `Weapon Skin`
  },
  {
    name: `De Rol Le Shell`,
    type: `Combination Item`,
    description: `Obtainable exclusively from killing Dal Ral Lie and its Episode 2 counterpart, Barba Ray. It can be used to create De Rol Le Shield.`
  },
  {
    name: `Christmas Present`,
    type: `Event Item`,
    description: `A rare seasonal drop which can contain various items; During the Christmas Event, Love Rappies are replaced by St. Rappies, which drop Christmas Presents at 87.5% chance instead of the usual Love Rappy rare drop.`,
    dropTable: {
      caption: `Item chance upon use`,
      items: [
        { name: `Heart of Angel`, rate: `15%` },
        { name: `Heart of Devil`, rate: `15%` },
        { name: `Panther's Spirit`, rate: `15%` },
        { name: `Kit of Mark III`, rate: `15%` },
        { name: `Kit of Hamburger`, rate: `15%` },
        { name: `Kit of Master System`, rate: `10%` },
        { name: `Kit of Genesis`, rate: `7%` },
        { name: `Kit of Sega Saturn`, rate: `5%` },
        { name: `Kit of Dreamcast`, rate: `3%` }
      ]
    }
  },
  {
    name: `Jack-O'-Lantern`,
    type: `Event Item`,
    description: `A rare seasonal drop which can contain various items; During the Halloween Event, Love Rappies are replaced by Hallo Rappies, which drop Jack-O'-Lanterns at 87.5% chance instead of the usual Love Rappy rare drop.`,
    dropTable: {
      caption: `Item chance upon use`,
      items: [
        { name: `Cell of Mag 502`, rate: `13%` },
        { name: `Cell of Mag 213`, rate: `13%` },
        { name: `Heart of Chu Chu`, rate: `13%` },
        { name: `Heart of Kapu Kapu`, rate: `13%` },
        { name: `Parts of RoboChao`, rate: `12%` },
        { name: `Heart of Opa Opa`, rate: `12%` },
        { name: `Heart of Pian`, rate: `12%` },
        { name: `Heart of Chao`, rate: `12%` }
      ]
    }
  },
  {
    name: `Easter Egg`,
    type: `Event Item`,
    description: `A rare seasonal drop which can contain various items; During the Easter Event, Love Rappies are replaced by Egg Rappies, which drop Easter Eggs at 87.5% chance instead of the usual Love Rappy rare drop.`,
    dropTable: {
      caption: `Item chance upon use`,
      items: [
        { name: `Sonic Knuckle`, rate: `14%` },
        { name: `Wok of Akiko's Shop`, rate: `13%` },
        { name: `Rocket Punch`, rate: `11%` },
        { name: `Huge Battle Fan`, rate: `11%` },
        { name: `Rabbit Wand`, rate: `11%` },
        { name: `Drill Launcher`, rate: `11%` },
        { name: `Marina's Bag`, rate: `11%` },
        { name: `Panther's Claw`, rate: `11%` },
        { name: `Amore Rose`, rate: `7%` }
      ]
    }
  },
  {
    name: `Liberta Kit`,
    type: `Mag Cell`,
    description: `A Mag cell that can be used on a level 50+ non-rare Mag to evolve it into Agastya.`
  },
  {
    name: `Heart of Angel`,
    type: `Mag Cell`,
    description: `A Mag cell. It can be used on a level 100+ third evolution Mag to evolve it into Angel's Wing.`
  },
  {
    name: `Heart of Chao`,
    type: `Mag Cell`,
    description: `A Mag cell. It can be used on a third evolution Mag with all of its stats at level 35 or above to evolve it into Chao.`
  },
  {
    name: `Heart of Chu Chu`,
    type: `Mag Cell`,
    description: `A Mag cell. It is used to create the Chu Chu mag when used with a level 50+ third evolution Mag.`
  },
  {
    name: `Cell of Mag 213`,
    type: `Mag Cell`,
    description: `A Mag cell that can be used on a level 100+ third evolution Mag to evolve it into Churel or Preta, dependent on the Section ID of the character who uses it.`
  },
  {
    name: `Heart of Devil`,
    type: `Mag Cell`,
    description: `A Mag cell. It can be used on a level 100+ third evolution Mag to evolve it into Devil's Wing, or on a Devil's Wing to evolve it into Devil's Tail.`
  },
  {
    name: `Kit of Dreamcast`,
    type: `Mag Cell`,
    description: `A Mag cell. It is used to create the Dreamcast mag when used on a Level 100+ character and Level 100+ Sega Saturn.`
  },
  {
    name: `Heart of YN-0117`,
    type: `Mag Cell`,
    description: `A Mag cell. It is used to create the Elenor mag when used with a level 50+ third evolution Mag.`
  },
  {
    name: `D-Photon Core`,
    type: `Mag Cell`,
    description: `A Mag cell. It can be used on a level 100+ Kama to evolve it into Gael Giel.`
  },
  {
    name: `Kit of Genesis`,
    type: `Mag Cell`,
    description: `A Mag cell. It is used to create the Genesis mag when used on a Level 80+ character and Level 70+ Master System.`
  },
  {
    name: `Tablet`,
    type: `Mag Cell`,
    description: `A Mag cell. It can be used on a Rukmin to evolve it into Geung-si.`
  },
  {
    name: `Kit of Hamburger`,
    type: `Mag Cell`,
    description: `A Mag cell. It can be used on a level 50+ Kaitabha to evolve it into Hamburger.`
  },
  {
    name: `Kalki Kit`,
    type: `Mag Cell`,
    description: `A Mag cell that can be used on a level 50+ non-rare Mag to evolve it into Kalki*.`
  },
  {
    name: `Heart of Kapu Kapu`,
    type: `Mag Cell`,
    description: `A Mag cell. It is used to create the Kapu Kapu mag when used with a level 50+ third evolution Mag.`
  },
  {
    name: `Mag Kit`,
    type: `Mag Cell`,
    description: `A Mag cell that can be used on a level 50+ non-rare Mag to evolve it into Mag*.`
  },
  {
    name: `Kit of Mark III`,
    type: `Mag Cell`,
    description: `A Mag cell. It is used to create the Mark III mag when used on a Level 60+ character with a starter Mag.`
  },
  {
    name: `Kit of Master System`,
    type: `Mag Cell`,
    description: `A Mag cell. It is used to create the Master System mag when used on a Level 70+ character and Level 60+ Mark III.`
  },
  {
    name: `Heart of Morolian`,
    type: `Mag Cell`,
    description: `A Mag cell that can be used on any Kumara mag to evolve it into a Moro mag.`
  },
  {
    name: `Heart of Opa Opa`,
    type: `Mag Cell`,
    description: `A Mag cell. It can be used on a level 100+ third evolution Mag to evolve it into Opa-Opa.`
  },
  {
    name: `Panther's Spirit`,
    type: `Mag Cell`,
    description: `A Mag cell. It can be used on a level 50+ Naga to evolve it into Panzer's Tail.`
  },
  {
    name: `Heart of Pian`,
    type: `Mag Cell`,
    description: `A Mag cell. It can be used on a level 100+ third evolution Mag with 120% Synchro and at least 180 IQ to evolve it into Pian.`
  },
  {
    name: `Pioneer Parts`,
    type: `Mag Cell`,
    description: `A Mag cell. It is used to create the Pioneer mag when used with a level 50+ third evolution Mag.`
  },
  {
    name: `Cell of Mag 502`,
    type: `Mag Cell`,
    description: `A Mag cell that can be used on a level 100+ third evolution Mag to evolve it into Pitri or Soniti, dependent on the Section ID of the character who uses it.`
  },
  {
    name: `Cell of Mag 213`,
    type: `Mag Cell`,
    description: `A Mag cell that can be used on a level 100+ third evolution Mag to evolve it into Pitri or Soniti, dependent on the Section ID of the character who uses it.`
  },
  {
    name: `Amitie's Memo`,
    type: `Mag Cell`,
    description: `A Mag cell that can be used on a level 50+ Chu Chu to evolve it into a Puyo.`
  },
  {
    name: `Parts of RoboChao`,
    type: `Mag Cell`,
    description: `A Mag cell. It can be used on a third evolution Mag with two of its stats at level 70 or above to evolve it into Robochao.`
  },
  {
    name: `Rappy's Beak`,
    type: `Mag Cell`,
    description: `A Mag cell that can be used on a level 50+ third evolution Mag to evolve it into Rappy.`
  },
  {
    name: `Kit of Sega Saturn`,
    type: `Mag Cell`,
    description: `A Mag cell. It is used to create the Sega Saturn mag when used on a Level 90+ character and Level 90+ Genesis.`
  },
  {
    name: `Cell of Mag 502`,
    type: `Mag Cell`,
    description: `A Mag cell that can be used on a level 100+ third evolution Mag to evolve it into Pitri or Soniti, dependent on the Section ID of the character who uses it.`
  },
  {
    name: `Stealth Kit`,
    type: `Mag Cell`,
    description: `A Mag cell that can be used on a level 50+ non-rare Mag to evolve it into Stealth.`
  },
  {
    name: `Heaven Striker Coat`,
    type: `Mag Cell`,
    description: `A Mag cell that can be used on a level 50+ Garuda to evolve it into a Striker Unit.`
  },
  {
    name: `Dragon Scale`,
    type: `Mag Cell`,
    description: `A Mag cell that can be used on a level 50+ Kama to evolve it into a Tellusis.`
  },
  {
    name: `Varuna Kit`,
    type: `Mag Cell`,
    description: `A Mag cell that can be used on a level 50+ non-rare Mag to evolve it into Varuna*.`
  },
  {
    name: `Vritra Kit`,
    type: `Mag Cell`,
    description: `A Mag cell that can be used on a level 50+ non-rare Mag to evolve it into Vritra*.`
  },
  {
    name: `Yahoo!'s engine`,
    type: `Mag Cell`,
    description: `A Mag cell that can be used on a level 50+ third evolution Mag to evolve it into Yahoo!.`
  }
];
