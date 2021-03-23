import { Ionicons } from "@expo/vector-icons";
import { Icon } from '@expo/vector-icons/build/createIconSet';
import { Action } from "redux";

// I don't like those inside the utils, maybe split them in another utils-like folder ?


// -------------- EXPO ------------------- //
type ExtractedIconType<T> = T extends Icon<infer U, infer _V> ? U : never;
export type IoniconsGlyph = ExtractedIconType<typeof Ionicons> | undefined;

// -------------- REDUX ------------------- //
/** Any redux internal action, see https://github.com/reduxjs/redux/issues/3580 */
export type ReduxLifecycleAction = Action<'@@redux/*'>;

// -------------- REACT ------------------- //
export const componentKey = <TypeId>(name: string, id: TypeId) => `[${name}: ${id}]`;

