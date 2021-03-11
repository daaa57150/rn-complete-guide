import { PropsWithChildren } from 'react';

export type RenderIfProps = PropsWithChildren<{
  condition: boolean
}>;

export default function RenderIf(props: RenderIfProps): JSX.Element | null {
  return props.condition && props.children ? props.children as JSX.Element : null;
};
