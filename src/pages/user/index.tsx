import React, { useEffect } from 'react';
import { connect, ConnectProps, IUserState } from 'umi';
import styles from './index.scss';

interface IUserProps extends ConnectProps {
  user: IUserState;
}

const User: React.FC<IUserProps> = ({ user, dispatch }) => {
  useEffect(() => {
    dispatch?.({
      type: 'user/eGetMyself',
      payload: {},
    });
  }, []);

  return (
    <div>
      <h1>Who am I?</h1>
      <p className={styles.name}>{user.name}</p>
    </div>
  );
};

export default connect(({ user }: { user: IUserState }) => ({
  user,
}))(User);
