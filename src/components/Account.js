import { useSelector, useDispatch } from 'react-redux';

import { deposit } from 'redux/store';

export const Account = () => {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.account.balance);
  return (
    <div>
      <div>Balance:{balance}$</div>
      <button onClick={() => dispatch(deposit(10))}>Deposit</button>
      <button>Withdraw</button>
    </div>
  );
};
