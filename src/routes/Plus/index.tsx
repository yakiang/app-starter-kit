import { Button, DatePicker, Form, Input, InputNumber, Rate, Switch, TimePicker, message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import axios from 'axios';
import React, { useCallback } from 'react';

const { Item } = Form;

const PlusRecord: React.FC = () => {
  const [form] = useForm();

  const submit = useCallback(async () => {
    try {
      const values = form.getFieldsValue(true);
      await axios.post('/paji/koa/api/records/item', {
        date: values.date?.format('yyyy-MM-DD-HH-mm'),
        duration: values.duration,
        location: {},
        protection: values.protected,
        note: `${values.rating}分, ${values.note}`,
        activities: [{ name: 'Sex' }],
      });
      message.success('已记录');
    } catch (err: any) {
      message.error(err.message);
    }
  }, [form]);

  return (
    <Form form={form} onFinish={submit}>
      <Item label="日期" name="date">
        <DatePicker />
      </Item>
      <Item label="时间" name="time">
        <TimePicker format="HH:mm" />
      </Item>
      <Item label="时长" name="duration">
        <InputNumber precision={0} min={1} addonAfter="分钟" />
      </Item>
      <Item label="地点" name="location">
        <Input />
      </Item>
      {/* <Item label="伴侣" name="partner">
        <Input />
      </Item> */}
      <Item label="保护" name="protected">
        <Switch defaultChecked={false} />
      </Item>
      <Item label="评分" name="rating">
        <Rate />
      </Item>
      <Item label="备注" name="note">
        <Input />
      </Item>
      <Item>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Item>
    </Form>
  );
};

export default PlusRecord;
