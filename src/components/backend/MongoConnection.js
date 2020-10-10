export const restaurantSchema = {
  name: 'restaurant',
  properties: {
    _id: 'objectId?',
    address: 'restaurant_address',
    borough: 'string?',
    cuisine: 'string?',
    grades: 'restaurant_grades[]',
    name: 'string?',
    restaurant_id: 'string?',
  },
  primaryKey: '_id',
};
