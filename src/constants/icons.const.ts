
import { IoniconsGlyph } from "@helpers/frameworks";
import { Platform } from "react-native";

export const trashIcon: IoniconsGlyph = Platform.select({ android: 'md-trash', ios: 'ios-trash' });

