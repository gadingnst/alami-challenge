export interface RootNativeModules {
  DeviceUniqueID: {
    get: (callback: (deviceUniqueID: string) => void) => void;
  };
}
