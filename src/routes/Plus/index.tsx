import { Button, DatePicker, Form, Input, InputNumber, Rate, Row, Switch, TimePicker, message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import axios from 'axios';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';

const { Item } = Form;

const PlusRecord: React.FC = () => {
  const [form] = useForm();
  const navigate = useNavigate();

  const submit = useCallback(async () => {
    try {
      const values = form.getFieldsValue(true);
      await axios.post('/paji/koa/api/records/item', {
        date: `${values.date?.format('yyyy-MM-DD')}-${values.time?.format('HH-mm')}`,
        duration: values.duration,
        location: {},
        protection: values.protected,
        note: `${values.rating}/5 ${values.note || ''}`,
        activities: [{ name: 'Sex' }],
      });
      message.success('已记录', () => navigate('/', { replace: true }));
    } catch (err: any) {
      message.error(err.message);
    }
  }, [form]);

  return (
    <Form form={form} onFinish={submit} className={styles.plus}>
      <Item label="日期" name="date">
        <DatePicker size="large" className={styles.input} />
      </Item>
      <Item label="时间" name="time">
        <TimePicker size="large" format="HH:mm" className={styles.input} popupStyle={{ fontSize: 20 }} />
      </Item>
      <Item label="时长" name="duration">
        <InputNumber size="large" precision={0} min={1} addonAfter="分钟" className={styles.input} />
      </Item>
      <Item label="地点" name="location">
        <Input size="large" className={styles.input} />
      </Item>
      {/* <Item label="伴侣" name="partner">
        <Input />
      </Item> */}
      <Item label="备注" name="note">
        <Input size="large" />
      </Item>
      <Row justify="space-around">
        <Item label="保护" name="protected">
          <Switch defaultChecked={false} />
        </Item>
        <Item label="评分" name="rating">
          <Rate />
        </Item>
      </Row>
      <Item>
        <Button size="large" className={styles.input} type="primary" htmlType="submit">
          提交
        </Button>
      </Item>
    </Form>
  );
};

export default PlusRecord;
