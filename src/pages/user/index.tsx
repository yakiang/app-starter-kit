import React from 'react';
import { connect, ConnectProps, useIntl, setLocale } from 'umi';
import { IUserState } from './model';
import { Button, Switch } from '@mui/material';
import { VerifiedUserOutlined } from '@mui/icons-material';
import styles from './index.scss';

interface IUserProps extends ConnectProps {
  user: IUserState;
}

const User: React.FC<IUserProps> = ({ user, dispatch }) => {
  const intl = useIntl();

  const switchLanguage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocale(e?.target?.checked ? 'en-US' : 'zh-CN', false);
  };

  const handleClick = () =>
    dispatch?.({
      type: 'user/eGetMyself',
      payload: {},
    });

  return (
    <div>
      <h1>{intl.formatMessage({ id: 'pages.user.name' })}</h1>
      <Switch onChange={switchLanguage} />
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
