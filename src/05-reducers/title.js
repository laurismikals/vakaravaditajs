export default (state = 'Raivis Bružis - vakara vadītājs', action = {}) => {
  switch (action.type) {
    case 'HOME':
      return 'Raivis Bružis - vakara vadītājs';
    default:
      return state;
  }
};
