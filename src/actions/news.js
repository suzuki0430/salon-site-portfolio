import uuid from 'uuid';

// ADD_NEWS
export const addNews = (
  {
    title = '',
    note = '',
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_NEWS',
  news: {
    id: uuid(),
    title,
    note,
    createdAt
  }
});

// REMOVE_NEWS
export const removeNews = ({ id } = {}) => ({
  type: 'REMOVE_NEWS',
  id
});

// EDIT_NEWS
export const editNews = (id, updates) => ({
  type: 'EDIT_NEWS',
  id,
  updates
});
