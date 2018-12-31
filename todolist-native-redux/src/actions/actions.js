export const addAction = card => {
  return { type: "ADD", card };
};

export const editAction = card => {
  return { type: "EDIT", card };
};

export const deleteAction = id => {
  return { type: "DELETE", id };
};