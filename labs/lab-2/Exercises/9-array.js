'use strict';

const phonebook =
[ { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'John Pork', phone: '+380992303920' },
  { name: 'Bob Kennedy', phone: '+380678761234' }
];

const findPhoneByName = (name) => {
  for (const obj of phonebook) {
    if (obj.name === name) return obj.phone;
  }
  return undefined;
};

module.exports = { phonebook, findPhoneByName };
