// Booking Reducer

const bookingReducerDefaultState = {
  id: "",
  name: "",
  month: "",
  date: "",
  hour: "",
  course: ""
};

export default (state = bookingReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_NAME':
      return {
        ...state,
        id: action.id,
        name: action.name
      };
    case 'ADD_DATE':
      return {
        ...state,
        month: action.month,
        date: action.date,
        hour: action.hour
      };
    case 'ADD_COURSE':
      return {
        ...state,
        course: action.course
      }
    default:
      return state;
  }
};