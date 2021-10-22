export const getUser = () => {
  const result = JSON.parse(sessionStorage.getItem('user') || null);
  return result;
};

export const getData = () => {
  const result = JSON.parse(sessionStorage.getItem('data') || null);
  return result;
};

// The setion of isEmpty
export const isEmpty = (value) => {
  if (!value) return true;
  return false;
};
