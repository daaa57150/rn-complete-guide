import { Platform, TouchableNativeFeedback, TouchableNativeFeedbackProps, TouchableOpacity } from "react-native";
import { ContainedTouchableProperties } from "react-native-gesture-handler";

// uses the ripple effect on android versions where supported, otherwise the standard opacity effect.

const isRippleEffect = () => Platform.OS === 'android' && Platform.Version >= 21;
const Touchable = isRippleEffect() ? TouchableNativeFeedback : TouchableOpacity;

export default Touchable as React.ComponentType<TouchableNativeFeedbackProps | ContainedTouchableProperties>;