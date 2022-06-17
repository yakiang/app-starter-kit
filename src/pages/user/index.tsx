import { Button } from 'antd';
import React from 'react';
import { connect, ConnectProps, useIntl } from 'umi';

const User: React.FC<ConnectProps> = ({ dispatch }) => {
  const intl = useIntl();

  const handleClick = () =>
    dispatch?.({
      type: 'user/eGetMyself',
      payload: {},
    });

  return (
    <div>
      <Button onClick={handleClick}>
        {intl.formatMessage({ id: 'pages.user.name' })}
      </Button>
    </div>
  );
};

export default connect()(User);
