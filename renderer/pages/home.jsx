import React, { useState, useEffect } from "react";
import {
  Layout,
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  Alert,
} from "antd";
import fire from "../config/firebase";

const { Header, Content } = Layout;
const { Item: FormItem } = Form;
const { Option } = Select;

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState("lucy");
  const [succesAdd, setSuccesAdd] = useState(false);

  const handleSubmit = async () => {
    try {
      await fire
        .firestore()
        .collection("people")
        .add({
          contoh: "contoh",
        })
        .then((res) => {
          console.log("success");
          setValue("jack");
          setSuccesAdd(true);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Content style={{ padding: 48 }}>
        {succesAdd && (
          <Alert
            message="Success Add"
            type="success"
            closable
            showIcon={true}
            style={{ position: "absolute", zIndex: 99 }}
          />
        )}
        <Form layout="horizontal">
          <FormItem
            label="Input Number"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
          >
            <InputNumber
              size="large"
              min={1}
              max={10}
              style={{ width: 100 }}
              defaultValue={3}
              name="inputNumber"
            />
            <a href="#">Link</a>
          </FormItem>

          <FormItem
            label="Switch"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
          >
            <Switch defaultChecked />
          </FormItem>

          <FormItem
            label="Slider"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
          >
            <Slider defaultValue={70} />
          </FormItem>

          <FormItem
            label="Select"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
          >
            <Select size="large" defaultValue={value} style={{ width: 192 }}>
              <Option value="jack">jack</Option>
              <Option value="lucy">lucy</Option>
              <Option value="disabled" disabled>
                disabled
              </Option>
              <Option value="yiminghe">yiminghe</Option>
            </Select>
          </FormItem>

          <FormItem
            label="DatePicker"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
          >
            <DatePicker name="startDate" />
          </FormItem>
          <FormItem
            style={{ marginTop: 48 }}
            wrapperCol={{ span: 8, offset: 8 }}
          >
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              onClick={() => handleSubmit()}
            >
              OK
            </Button>
            <Button size="large" style={{ marginLeft: 8 }}>
              Cancel
            </Button>
          </FormItem>
        </Form>
      </Content>
    </>
  );
}

export default Home;
