import React from 'react';
import { Layout, Switch } from 'antd';
import styles from './index.scss';
import { connect, ConnectProps, setLocale } from 'umi';
import { IUserState } from '../../pages/user/model';

const { Header, Footer } = Layout;

interface IAppProps extends ConnectProps {
  user: IUserState;
}

const App: React.FC<IAppProps> = ({ user, children }) => {
  const switchLanguage = (checked: boolean) => {
    setLocale(checked ? 'en-US' : 'zh-CN', false);
  };

  return (
    <>
      <Header className={styles.header}>
        <Switch onChange={switchLanguage} />
        <div className={styles.username}>{user?.name}</div>
      </Header>
      {children}
      <Footer className={styles.footer}>© copyright</Footer>
    </>
  );
};

export default connect(({ user }: { user: IUserState }) => ({
  user,
}))(App);
