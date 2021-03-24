
import { IoniconsGlyph } from "@helpers/frameworks";
import { Platform } from "react-native";

export const trashIcon: IoniconsGlyph = Platform.select({ android: 'md-trash', ios: 'ios-trash' });
export const cartIcon: IoniconsGlyph = Platform.select({ android: 'md-cart', ios: 'ios-cart' });
export const menuIcon: IoniconsGlyph = Platform.select({ android: 'md-menu', ios: 'ios-menu' });

