import { useState, useRef, useEffect } from 'react'
import React from "react";
import {
  BrowserRouter as Router,
  Route, Routes,
  Link, Outlet,
  useParams
} from "react-router-dom";
import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Sider } = Layout;


import G6 from '@antv/g6';
function TestUI() {
  let graph = null;

  const test3 = () => {
    console.log("test3");

    const contextMenu = new G6.Menu({
      getContent(evt) {
        let header;
        if (evt.target && evt.target.isCanvas && evt.target.isCanvas()) {
          header = 'Canvas ContextMenu';
        } else if (evt.item) {
          const itemType = evt.item.getType();
          header = `${itemType.toUpperCase()} ContextMenu`;
        }
        return `
        <h3>${header}</h3>
        <ul>
          <li id='add1' title='1'>li 1</li>
          <li id='add2' title='2'>li 2</li>
          <li id='add3'>li 3</li>
          <li id='add4'>li 4</li>
          <li id='add5'>li 5</li>
        </ul>`;
      },
      handleMenuClick: (target, item) => {
        console.log(target.id);
        console.log(item);
      },
      // offsetX and offsetY include the padding of the parent container
      // 需要加上父级容器的 padding-left 16 与自身偏移量 10
      offsetX: 16 + 10,
      // 需要加上父级容器的 padding-top 24 、画布兄弟元素高度、与自身偏移量 10
      offsetY: 0,
      // the types of items that allow the menu show up
      // 在哪些类型的元素上响应
      itemTypes: ['node', 'edge', 'canvas'],
    });
    const data = {
      nodes: [
        {
          id: '0',

          label: 'node-0',
          x: 100,
          y: 100,
          description: 'This is node-0.',
          subdescription: 'This is subdescription of node-0.',
        },
        {
          id: '1',
          label: 'node-1',
          x: 250,
          y: 100,
          description: 'This is node-1.',
          subdescription: 'This is subdescription of node-1.',
        },
        {
          id: '2',
          flag: "b",
          label: 'node-2',
          x: 350,
          y: 100,
          description: 'This is node-2.',
          subdescription: 'This is subdescription of node-2.',
        },
        {
          id: '3',
          label: 'node-3',
          x: 450,
          y: 100,
          description: 'This is node-3.',
          subdescription: 'This is subdescription of node-3.',
        },
      ],
      edges: [
        {
          id: 'e0',
          source: '0',
          target: '1',
          description: 'This is edge from node 0 to node 1.',
        },
        {
          id: 'e1',
          source: '1',
          target: '2',
          description: 'This is edge from node 0 to node 2.',
        },
        {
          id: 'e2',
          source: '2',
          target: '3',
          description: 'This is edge from node 0 to node 3.',
        },
      ],
    };

    const container = document.getElementById('container');
    const width = container.scrollWidth;
    const height = container.scrollHeight || 1000;
    if (graph) {
      graph.destroy();
    }
    const grid = new G6.Grid();
    // const minimap = new G6.Minimap();
    const toolbar = new G6.ToolBar({
      position: { x: 300, y: 100 },
    });
    graph = new G6.Graph({
      container: 'container',
      width,
      height,
      linkCenter: true,
      // plugins: [toolbar,grid, minimap],
      plugins: [grid,contextMenu],
      // 设置为true，启用 redo & undo 栈功能
      enabledStack: true,
      defaultNode: {
        size: [80, 40],
        type: 'rect',
        style: {
          fill: '#DEE9FF',
          stroke: '#5B8FF9',
        },
      },
      defaultEdge: {
        style: {
          stroke: '#b5b5b5',
          lineAppendWidth: 3,
        },
      },
      modes: {
        default: ['drag-node'],
      },
    });
    graph.node(node => {
      if (node.flag === 'b') {
        return {
          style: {
            fill: '#2db7f5',
            stroke: '#ea7171'
          }
        }
      }
      return {
        style: {

          fill: '#DEE9FF',
          stroke: '#5B8FF9',

        }
      }
    });
    graph.data(data);
    graph.render();

    if (typeof window !== 'undefined')
      window.onresize = () => {
        if (!graph || graph.get('destroyed')) return;
        if (!container || !container.scrollWidth || !container.scrollHeight) return;
        graph.changeSize(container.scrollWidth, container.scrollHeight);
      };

  };
  useEffect(() => {
    test3();

  }, []);

  const refresh = () => {
    test3();
  }
  return (<div>
    <h2 onClick={refresh}>antv/g6</h2>
    <div id="container" />
  </div>);
}
export default TestUI