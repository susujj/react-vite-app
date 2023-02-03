import { useState, useCallback } from 'react'
import React from "react";
import {
    BrowserRouter as Router,
    Route, Routes,
    Link, Outlet,
    useParams,
} from "react-router-dom";
import axios from 'axios';
import {
    Alert,
    Button,
    Card,
    Checkbox,
    Col,
    ConfigProvider,
    DatePicker,
    Divider,
    Dropdown,
    Form,
    Input,
    InputNumber,
    Mentions,
    Menu,
    Pagination,
    Progress,
    Radio,
    Row,
    Select,
    Slider,
    Space,
    Spin,
    Steps,
    Switch,
    Table,
    Tabs,
    Tag,
    Timeline,
    TimePicker,
    Transfer,
    Tree,
    TreeSelect,
    Typography,
} from 'antd';


import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';


const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 4,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 20,
        },
    },
};
const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 20,
            offset: 4,
        },
    },
};

const A = ({ onClick }) => {
    // A 父组件的count变化时，A组件仍旧会不断的re-render
    console.log("case2: render_A");
    return <div>

        <button onClick={onClick}>A组件+count</button>;
    </div>
};
const B = React.memo(A);
function Hookdemo() {
    const [color, setColor] = useState({
        primaryColor: '#1890ff',
        errorColor: '#ff4d4f',
        warningColor: '#faad14',
        successColor: '#52c41a',
        infoColor: '#1890ff',
    });
    const [count, setCount] = useState(0);
    const onClick = useCallback(() => {
        setCount((count) => count + 1);
    }, []);
    const onChange = (data) => {
        setCount(Number(data.target.value));
    };
    const onFinish = (values) => {
        console.log('Received values of form:', values);
    };
    const [value, setValue] = useState(1);

    const colorChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
        let nextColor = {
            primaryColor: e.target.value,
        };
        const mergedNextColor = { ...color, ...nextColor };
        setColor(mergedNextColor);
        ConfigProvider.config({
            theme: mergedNextColor,
        });
    };
    return (
        <>

            <input type="number" value={count} onChange={onChange} />
            <B onClick={onClick} />
            <p>count:{count}</p>
            <B onClick={onClick} />
            <Radio.Group onChange={colorChange} value={value}>
                <Radio value={'#1890ff'}>A</Radio>
                <Radio value={'#25b864'}>B</Radio>
                <Radio value={'#ff6f00'}>C</Radio>

            </Radio.Group>

          <li><Button>colortest</Button> </li>  
           
            <Form name="dynamic_form_item" {...formItemLayoutWithOutLabel} onFinish={onFinish}>
                <Form.List
                    name="names"
                    rules={[
                        {
                            validator: async (_, names) => {
                                if (!names || names.length < 2) {
                                    return Promise.reject(new Error('At least 2 passengers'));
                                }
                            },
                        },
                    ]}
                >
                    {(fields, { add, remove }, { errors }) => (
                        <>
                            {fields.map((field, index) => (
                                <Form.Item
                                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                    label={index === 0 ? 'Passengers' : ''}
                                    required={false}
                                    key={field.key}
                                >
                                    <Form.Item
                                        {...field}
                                        validateTrigger={['onChange', 'onBlur']}
                                        rules={[
                                            {
                                                required: true,
                                                whitespace: true,
                                                message: "Please input passenger's name or delete this field.",
                                            },
                                        ]}
                                        noStyle
                                    >
                                        <Input
                                            placeholder="passenger name"
                                            style={{
                                                width: '60%',
                                            }}
                                        />
                                    </Form.Item>
                                    {fields.length > 1 ? (
                                        <MinusCircleOutlined
                                            className="dynamic-delete-button"
                                            onClick={() => remove(field.name)}
                                        />
                                    ) : null}
                                </Form.Item>
                            ))}
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    style={{
                                        width: '60%',
                                    }}
                                    icon={<PlusOutlined />}
                                >
                                    Add field
                                </Button>
                                <Button
                                    type="dashed"
                                    onClick={() => {
                                        add('The head item', 0);
                                    }}
                                    style={{
                                        width: '60%',
                                        marginTop: '20px',
                                    }}
                                    icon={<PlusOutlined />}
                                >
                                    Add field at head
                                </Button>
                                <Form.ErrorList errors={errors} />
                            </Form.Item>
                        </>
                    )}
                </Form.List>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};


export default Hookdemo