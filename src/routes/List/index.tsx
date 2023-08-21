import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Col, List, Row, Statistic } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';

const Records = () => {
  const navigate = useNavigate();

  const [list, setList] = useState([]);
  const [counts, setCounts] = useState<{ total: number; thisYear: number; thisMonth: number }>({
    total: 0,
    thisMonth: 0,
    thisYear: 0,
  });

  useEffect(() => {
    axios.get('/paji/koa/api/records').then((res) => {
      setList(res.data.list);
      setCounts(res.data.counts);
    });
  }, []);

  const addOne = useCallback(() => {
    navigate('/plus');
  }, [navigate]);

  return (
    <div className={styles.records}>
      <Row className={styles.stats}>
        <Col span={8}>
          <Statistic className={styles.stat} title="历史" value={counts.total} precision={0} />
        </Col>
        <Col span={8}>
          <Statistic className={styles.stat} title="今年" value={counts.thisYear} precision={0} />
        </Col>
        <Col span={8}>
          <Statistic className={styles.stat} title="本月" value={counts.thisMonth} precision={0} />
        </Col>
      </Row>

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
        className={styles.list}
        dataSource={list}
        renderItem={(item: any) => (
          <List.Item>
            <List.Item.Meta
              title={item.date}
              description={
                <span className={styles.item}>
                  {item.duration} 分钟, {item.protection ? 'Protected' : 'Unprotected'}, {item.note}
                </span>
              }
            />
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
