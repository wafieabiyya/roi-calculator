const STORAGE_KEY = "adforecast_history";

export const loadHistory = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

export const saveHistory = (data: unknown) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    console.log("err found");
  }
};

export const clearHistoryStorage = () => {
  localStorage.removeItem(STORAGE_KEY);
};
