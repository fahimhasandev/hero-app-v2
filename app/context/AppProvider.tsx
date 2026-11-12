import { createContext, ReactNode, useState } from "react";
import { IApp } from "../types/app.type";
type TAppContenxt = {
  installedApps: IApp[];
  setInstalledApps: React.Dispatch<React.SetStateAction<IApp[]>>;
};

export const AppContext = createContext<TAppContenxt>({
  installedApps: [],
  setInstalledApps: () => {},
});

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [installedApps, setInstalledApps] = useState<IApp[]>([]);

  const sharedData = {
    installedApps,
    setInstalledApps,
  };

  return (
    <AppContext.Provider value={sharedData}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
