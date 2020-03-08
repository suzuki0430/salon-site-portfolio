export const addName = (id, name) =>  ({ 
  type: 'ADD_NAME',
  id, 
  name
});

export const addDate = (month, date, hour) => ({ 
  type: "ADD_DATE", 
  month, 
  date, 
  hour 
});

export const addCourse = (course) => ({ 
  type: "ADD_COURSE", 
  course
});

// export const addName = (id, name) => async dispatch => {
//   dispatch({ type: 'ADD_NAME', id, name });
// };

// export const addDate = (month, date, hour) => async dispatch => {
//   dispatch({ type: "ADD_DATE", month, date, hour });
// }