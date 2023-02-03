
import React from 'react'
import 'antd/dist/antd.css';
import { Table } from 'antd';

const columns = [
    {
        title: 'Full Name',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left' as 'left',
        filters: [
            {
                text: 'Joe',
                value: 'Joe',
            },
            {
                text: 'Jim',
                value: 'Jim',
            },
            {
                text: 'Submenu',
                value: 'Submenu',
                children: [
                    {
                        text: 'Green',
                        value: 'Green',
                    },
                    {
                        text: 'Black',
                        value: 'Black',
                    },
                ],
            },
        ],
        // specify the condition of filtering result
        // here is that finding the name started with `value`
        onFilter: (value, record) => record.name.indexOf(value) === 0,

    },
    {
        title: 'Age',
        width: 100,
        dataIndex: 'age',
        key: 'age',
        // fixed: "left",
        // defaultSortOrder: 'descend' as "descend",
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Column 1',
        dataIndex: 'address',
        key: '1',
        ellipsis: true,
    },
    {
        title: 'Column 2',
        dataIndex: 'address',
        key: '2',
    },
    {
        title: 'Column 3',
        dataIndex: 'address',
        key: '3',
    },
    {
        title: 'Column 4',
        dataIndex: 'address',
        key: '4',

    },
    {
        title: 'Column 5',
        dataIndex: 'address',
        key: '5',
    },
    {
        title: 'Column 6',
        dataIndex: 'address',
        key: '6',
    },
    {
        title: 'Column 7',
        dataIndex: 'address',
        key: '7',
    },
    {
        title: 'Column 8',
        dataIndex: 'address',
        key: '8',
    },
    {
        title: 'Action',
        key: 'operation',
        // fixed: 'right',
        fixed: 'right' as 'right',
        width: 100,
        render: () => <a>action</a>,
    },
];
const data = Array(35)
    .fill(0)
    .map((v, i) => ({
        key: i + "",
        name: 'Jim Green',
        age: i + 1,
        address: 'London Parkdddddddddddddd',
    }));
// [
//     {
//         key: '1',
//         name: 'John Brown',
//         age: 32,
//         address: 'New York Park',
//     },
//     {
//         key: '2',
//         name: 'Jim Green',
//         age: 40,
//         address: 'London Park',
//     },
// ];
class TableDemo extends React.Component<any, any>{
    timerID;
    // cState: { date: Date; };
    constructor(props) {
        super(props);
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: (record) => ({
                disabled: record.name === 'Disabled User',
                // Column configuration not to be checked
                name: record.name,
            }),
        };
        this.state = { date: new Date(), rowSelection, selectionType: "checkbox" };
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {

        console.log(columns);
        console.log('left' as 'left');
    }

    componentWillUnmount() {
    }

    onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    showTotal= (total, range) => {
        return `共${total}条记录`;
    };
    render() {
        return (
            <div>
                <h1>table!</h1>
                <Table
                    rowSelection={{
                        type: this.state.selectionType,
                        ...this.state.rowSelection,
                    }}
                    pagination={{
                        position: ['bottomRight'],
                        pageSize: 5,
                        total: data.length,
                        // showSizeChanger:true,
                        showQuickJumper:true,
                        showTotal:this.showTotal,
                    }}
                    columns={columns}
                    dataSource={data}
                    onChange={this.onChange}
                    scroll={{
                        x: 1300,
                    }}
                />
            </div>
        );
    }
}

export default TableDemo
