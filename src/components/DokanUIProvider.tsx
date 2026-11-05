import { createContext, ReactNode, useContext, useMemo } from 'react';

export type DokanUILabels = {
  close: string;
  closeSidebar: string;
  confirmTitle: string;
  dismiss: string;
  list: string;
  no: string;
  search: string;
  yes: string;
};

export const defaultDokanUILabels: DokanUILabels = {
  close: 'Close',
  closeSidebar: 'Close sidebar',
  confirmTitle: 'Please Confirm',
  dismiss: 'Dismiss',
  list: 'List',
  no: 'No',
  search: 'Search',
  yes: 'Yes',
};

const DokanUILabelsContext = createContext<DokanUILabels>(defaultDokanUILabels);

export type DokanUIProviderProps = {
  labels?: Partial<DokanUILabels>;
  children: ReactNode;
};

const DokanUIProvider = ({ labels, children }: DokanUIProviderProps) => {
  const value = useMemo(() => ({ ...defaultDokanUILabels, ...labels }), [labels]);

  return <DokanUILabelsContext.Provider value={value}>{children}</DokanUILabelsContext.Provider>;
};

export const useDokanUILabels = () => useContext(DokanUILabelsContext);

export default DokanUIProvider;
