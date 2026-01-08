export const initialHierarchy = {
  id: 'root',
  label: 'Equipments',
  type: 'Equipment',
  children: [
    {
      id: 'eng-1',
      label: 'Engine',
      type: 'Engine',
      children: [
        { id: 'me-1', label: 'Main Engine & Propulsion', type: 'System' },
        { id: 'pg-1', label: 'Power Generation', type: 'System' },
        { id: 'ab-1', label: 'Aux Boiler', type: 'System' },
      ],
    },
    {
      id: 'deck-1',
      label: 'Deck',
      type: 'Engine',
      children: [
        { id: 'dm-1', label: 'Deck Machinary', type: 'System' },
      ],
    },
  ],
};