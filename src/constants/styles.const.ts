import { TextStyle, ViewStyle } from "react-native";

// padding function:
// https://stackoverflow.com/a/55724273
function padding(a: number, b?: number, c?: number, d?: number) {
  return {
    paddingTop: a,
    paddingRight: b ? b : a,
    paddingBottom: c ? c : a,
    paddingLeft: d ? d : (b ? b : a)
  };
}

// Colors by name
const colors = {
  red: '#f44',
  blue:'#44f',
  lightGray: '#ddf'
};

// Colors by usage
export namespace Colors {
  export const primary = colors.blue;
  export const background = colors.red;
  export const button = {
    primary: primary,
    cancel: colors.red
  };
  export const cell = colors.lightGray;
};

export namespace Spaces {
  /** Padding used for screen */
  export const paddingScreen = {
    top: 50,
    bottom: 30,
    horizontal: 20
  };

  export const innerPadding = 10;
  export const separation = 10;
};

export const Fonts = {
  size: 20,
  color: 'green'
};

export const inputStyle: TextStyle = {
  borderBottomColor: 'black',
  borderBottomWidth: 1,
  marginBottom: 10,
  ...padding(5, 10, 5, 10)
};

export const buttonStyle: TextStyle = {
  fontSize: 20,
  color: Colors.button.primary,
  backgroundColor: '#888',
  paddingHorizontal: 10,
  paddingVertical: 10, // impossible to center vertically in a correct way ?
  textAlignVertical: 'center',
};

export const buttonStyleCancel: TextStyle = {
  ...buttonStyle,
  color: Colors.button.cancel
}

export const listItemStyle: ViewStyle = {
  padding: 10,
  marginVertical: 5,
  backgroundColor: Colors.cell,
};

export const appContainerStyle: ViewStyle = {
  backgroundColor: Colors.background,
  paddingTop: 0, // Spaces.paddingScreen.top,
  paddingHorizontal: 0, // Spaces.paddingScreen.horizontal,
  // paddingBottom: Spaces.paddingScreen.bottom,
  flex: 1, // takes up all the height
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start', // top
};

export const pageStyle: ViewStyle = {
  paddingHorizontal: Spaces.paddingScreen.horizontal,
  paddingTop: 20,
  flex: 1,
  width: '100%'
};

export const shadowStyle: ViewStyle = {
  // iOS  only:
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.7,
  shadowRadius: 3,
  // Android only:
  elevation: 6
}


