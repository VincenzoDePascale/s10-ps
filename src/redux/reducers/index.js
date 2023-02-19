const initialState = {
  lat: "-75.4557",
  lon: "43.2128",
  meteoData: {},
  manyDays: {},
  place: "Roma",
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLACE":
      return {
        ...state,
        place: action.payload,
      };

    case "ADD_LAT":
      return {
        ...state,
        lat: action.payload,
      };
    case "ADD_LON":
      return {
        ...state,
        lon: action.payload,
      };

    case "WEATHER":
      return {
        ...state,
        meteoData: action.payload,
      };

    case "MANY_DAYS":
      return {
        ...state,
        manyDays: action.payload,
      };

    default:
      return state;
  }
};

export default mainReducer;
