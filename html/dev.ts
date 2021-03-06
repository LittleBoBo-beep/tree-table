import Table from '@/Table'
import '@/index.less'
// import Compile from '@/utils/compile'
const treeData = [
    {
      name: "root1",
      key: "1",
      children: [
        {
          name: "child1",
          key: "1-1",
          children: [
            {
              name: "child1Child1",
              key: "1-1-1",
            },
            {
              name: "child1Child2",
              key: "1-1-2",
            },
            {
              name: "child1Child3",
              key: "1-1-3",
            },
            {
              name: "child1Child1",
              key: "1-1-4",
            },
            {
              name: "child1Child2",
              key: "1-1-5",
            },
            {
              name: "child1Child3",
              key: "1-1-6",
            },
            {
              name: "child1Child1",
              key: "1-1-7",
            },
            {
              name: "child1Child2",
              key: "1-1-8",
            },
            {
              name: "child1Child3",
              key: "1-1-9",
            },
            {
              name: "child1Child1",
              key: "1-1-10",
            },
            {
              name: "child1Child2",
              key: "1-1-11",
            },
            {
              name: "child1Child3",
              key: "1-1-12",
            },
            {
              name: "child1Child1",
              key: "1-1-13",
            },
            {
              name: "child1Child2",
              key: "1-1-14",
            },
            {
              name: "child1Child3",
              key: "1-1-15",
            },
            {
              name: "child1Child1",
              key: "1-1-16",
            },
            {
              name: "child1Child2",
              key: "1-1-17",
            },
            {
              name: "child1Child3",
              key: "1-1-18",
            },
            {
              name: "child1Child1",
              key: "1-1-19",
            },
            {
              name: "child1Child2",
              key: "1-1-20",
            },
            {
              name: "child1Child3",
              key: "1-1-21",
            },
          ],
        },
        {
          name: "child2",
          key: "1-2",
          children: [],
        },
      ],
    },
    {
      name: "root2",
      key: "2",
      children: [
        {
          name: "child3",
          key: "2-1",
          children: [
            {
              name: "child3child1",
              key: "2-1-1",
              children: [],
            },
          ],
        },
      ],
    },
  ];
  // 定义表格头部的数据
  const columns = [
    {
      key: 0,
      title: "column1",
    },
    {
      key: 1,
      title: "column2",
    },
    {
      key: 2,
      title: "column3",
    },
  ];
  // 定义所必需的配置项
  const options: any = {
    container: document.getElementById("container"),
    data: treeData,
    columns,
  };
  // 实例化一个表格
  let table = new Table(options);
  // const testReact: any = {
    // container: document.getElementById('compileCon'),
    // con: (<div></div>)
  // }
// new Compile(testReact)