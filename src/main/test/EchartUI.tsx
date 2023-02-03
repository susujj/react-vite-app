import { useEffect, useContext, useState } from 'react'
import React from "react";
import {
    BrowserRouter as Router,
    Route, Routes,
    Link, Outlet,
    useParams
} from "react-router-dom";
import { Col, Divider, Row } from 'antd';
import axios from 'axios';
import * as echarts from 'echarts';


const style: React.CSSProperties = { background: '#ffffff', padding: '8px 0' };
function EchartUI() {

    useEffect(() => {
        var myChart = echarts.init(document.getElementById('main') as HTMLElement);
        myChart.clear();
        // 绘制图表
        myChart.setOption( {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                // Use axis to trigger tooltip
                type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
              }
            },
            legend: {},
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              type: 'value'
            },
            yAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            series: [
              {
                name: 'Direct',
                type: 'bar',
                stack: 'total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                },
                data: [320, 302, 301, 334, 390, 330, 320]
              },
              {
                name: 'Mail Ad',
                type: 'bar',
                stack: 'total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
              },
              {
                name: 'Affiliate Ad',
                type: 'bar',
                stack: 'total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
              },
              {
                name: 'Video Ad',
                type: 'bar',
                stack: 'total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                },
                data: [150, 212, 201, 154, 190, 330, 410]
              },
              {
                name: 'Search Engine',
                type: 'bar',
                stack: 'total',
                label: {
                  show: true
                },
                emphasis: {
                  focus: 'series'
                },
                data: [820, 832, 901, 934, 1290, 1330, 1320]
              }
            ]
          });


        let option = {
            title: {
              text: 'Referer of a Website',
              subtext: 'Fake Data',
              left: 'center'
            },
            tooltip: {
              trigger: 'item'
            },
            legend: {
              orient: 'vertical',
              left: 'left'
            },
            series: [
              {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                  { value: 1048, name: 'Search Engine' },
                  { value: 735, name: 'Direct' },
                  { value: 580, name: 'Email' },
                  { value: 484, name: 'Union Ads' },
                  { value: 300, name: 'Video Ads' }
                ],
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          };
          var chart2 = echarts.init(document.getElementById('chart2') as HTMLElement);
          chart2.setOption(option);



          let option3 ={
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true
              }
            ]
          };
          var chart3= echarts.init(document.getElementById('chart3') as HTMLElement);
          chart3.setOption(option3);




          let option4 ={
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                areaStyle: {}
              }
            ]
          };
          var chart4 = echarts.init(document.getElementById('chart4') as HTMLElement);
          chart4.setOption(option4);
    }, []);


    useEffect(() => {
        return () => {
            console.log("组件即将卸载时执行");
        }
    }, []);

    return (<div style={{ backgroundColor: 'lightgrey', width: "100%", height: "100vh",overflow:"overflow-y" }}>
        <Row style={{ margin: "10px" }} gutter={[8, 8]}>
            <Col className="gutter-row" span={12}>
                <div style={style}>
                    <div id="main" style={{ width: '100%', height: 260 }}></div>
                </div>
            </Col>
            <Col className="gutter-row" span={12}>
                <div style={style}>  <div id="chart2" style={{ width: '100%', height: 260 }}></div></div>
            </Col>

        </Row>
        <div style={{ margin: "10px" }} >
        <Row gutter={[8, 8]}>
            <Col className="gutter-row" span={12}>
                <div style={style}>
                    <div id="chart3" style={{ width: '100%', height: 260 }}></div>
                </div>
            </Col>
            <Col className="gutter-row" span={12}>
                <div style={style}>  <div id="chart4" style={{ width: '100%', height: 260 }}></div></div>
            </Col>

        </Row></div>
    </div>);;
}

export default EchartUI