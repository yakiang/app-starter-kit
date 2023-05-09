import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Button, List } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';

const Records = () => {
  const navigate = useNavigate();

  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('/paji/koa/api/records').then((res) => setList(res.data));
  }, []);

  const addOne = useCallback(() => {
    navigate('/plus');
  }, [navigate]);

  return (
    <div className={styles.records}>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={list}
        renderItem={(item: any) => (
          <List.Item>
            {item.date} {item.duration}
          </List.Item>
        )}
      />

      <Button
        onClick={addOne}
        className={styles.plus}
        size="large"
        type="primary"
        shape="circle"
        icon={<PlusOutlined />}
      />
    </div>
  );
};

export default Records;
