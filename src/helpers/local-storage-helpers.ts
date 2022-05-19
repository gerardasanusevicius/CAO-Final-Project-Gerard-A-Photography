export const getLocalStorageItem = <Type>(name: string): Type | null => {
  const stringItem = localStorage.getItem(name);
  if (stringItem === null) return null;

  return JSON.parse(stringItem) as Type;
};

export const setLocalStorageItem = (name: string, value: unknown) => {
  localStorage.setItem(name, JSON.stringify(value));
};
