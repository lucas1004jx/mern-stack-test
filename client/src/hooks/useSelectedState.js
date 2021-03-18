import { useSelector } from 'react-redux';

const useSelectedState = (stateName) => {
  const ui = useSelector((state) => (stateName ? state[stateName] : state));
  return ui;
};

export default useSelectedState;
