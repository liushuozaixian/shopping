//SG使用mockjs来模拟数据接口

import Mock from 'mockjs'
import main from './main.json'
import myclass from './class.json'

import position from './position.json'
//映射几个接口
Mock.mock('/api2/main',main)
Mock.mock('/api2/myclass',myclass)

//映射的是position的接口
Mock.mock('/api2/position',position)
