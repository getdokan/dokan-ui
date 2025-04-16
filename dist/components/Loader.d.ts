import { ReactElement } from 'react';
export interface LoaderProps {
    loading?: boolean;
    children?: ReactElement | ReactElement[];
    height?: string;
}
declare const Loader: ({ loading, children, height }: LoaderProps) => import("react/jsx-runtime").JSX.Element;
export default Loader;
