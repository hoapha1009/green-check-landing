import React, { createContext, useContext } from "react";

export const DefaultLayoutContext = createContext<Partial<{}>>({});
export function DefaultLayoutProvider({ ...props }: { children: React.ReactNode }) {
  return <DefaultLayoutContext.Provider value={{}}>{props.children}</DefaultLayoutContext.Provider>;
}
export const useDefaultLayoutContext = () => useContext(DefaultLayoutContext);
