/** Action types */
export const OPEN_SIDEBAR = "OPEN_SIDEBAR";
export const CLOSE_SIDEBAR = "CLOSE_SIDEBAR";
export const FULLSCREEN = "FULLSCREEN";
export const EXIT_FULLSCREEN = "EXIT_FULLSCREEN";
export const SET_ACTIVE_MENU_ACTIVITY_BAR = "SET_ACTIVE_MENU_ACTIVITY_BAR"; 

/** Actions */
export const openSidebar = () => {
  return (dispatch) => {
    dispatch({
      type: OPEN_SIDEBAR,
    });
  };
};

export const closeSidebar = () => {
  return (dispatch) => {
    dispatch({
      type: CLOSE_SIDEBAR,
    });
  };
};


export const fullScreen = () => {
  return (dispatch) => {
    dispatch({
      type: FULLSCREEN,
    });
  }
}

export const exitFullScreen = () => {
  return (dispatch) => {
    dispatch({
      type: EXIT_FULLSCREEN,
    });
  }
}

export const setActiveMenuActivityBar = (menuName) => {
  if(!menuName) {
    console.log("Kosong");
  }
  return (dispatch) => {
    dispatch({
      type: SET_ACTIVE_MENU_ACTIVITY_BAR,
      payload: menuName,
    });
  }
}