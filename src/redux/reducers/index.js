const initialState = {
  location: {
    lat: "",
    lon: "",
  },
  place: "Roma",
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLACE":
      return {
        ...state,
        place: action.payload,
      };

    case "ADD_LAT_LON":
      return {
        ...state,
        location: action.payload,
      };

    case "ADD":
      return {
        ...state,
        location: action.payload,
      };

    case "action2":
      return {
        ...state,
        city: {
          ...state.city,
          content: [
            "",
            /*filter per cancellare roba tramite index*/
          ],
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
