import { Ionicons } from "@expo/vector-icons";
import { Icon } from '@expo/vector-icons/build/createIconSet';

type ExtractedIconType<T> = T extends Icon<infer U, infer _V> ? U : never;
export type IoniconsGlyph = ExtractedIconType<typeof Ionicons> | undefined;

