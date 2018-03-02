/* eslint-disable */
export default (state = 'Raivis Bružis - vakara vadītājs', action = {}) => {
  switch (action.type) {
    case 'HOME':
      return 'Raivis Bružis - vakara vadītājs';
    case 'LIST':
      return `RFR: ${capitalize(action.payload.category)}`;
    case 'VIDEO':
      return `RFR: ${capitalize(action.payload.slug)}`;
    case 'LOGIN':
      return 'RFR Login';
    case 'ADMIN':
      return 'RFR Admin';
    default:
      return state;
  }
};

const capitalize = str =>
  str.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

// RFR automatically changes the document.title for you :)
