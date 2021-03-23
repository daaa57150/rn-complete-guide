import { IoniconsGlyph } from "@helpers/utils";
import { Platform } from "react-native";

export const trashIcon: IoniconsGlyph = Platform.select({ android: 'md-trash', ios: 'ios-trash' });

