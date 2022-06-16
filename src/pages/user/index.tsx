import React from 'react';
import { connect, ConnectProps, IUserState } from 'umi';
import { Button } from '@mui/material';
import { VerifiedUserOutlined } from '@mui/icons-material';
import styles from './index.scss';

interface IUserProps extends ConnectProps {
  user: IUserState;
}

const User: React.FC<IUserProps> = ({ user, dispatch }) => {
  const handleClick = () =>
    dispatch?.({
      type: 'user/eGetMyself',
      payload: {},
    });

  return (
    <div>
      <h1>Who am I?</h1>
      {user.name ? (
        <p className={styles.name}>{user.name}</p>
      ) : (
        <Button onClick={handleClick} variant="contained">
          <VerifiedUserOutlined />
        </Button>
      )}
    </div>
  );
};

export default connect(({ user }: { user: IUserState }) => ({
  user,
}))(User);
