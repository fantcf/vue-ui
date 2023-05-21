<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{path: '/home'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item>数据统计</el-breadcrumb-item>
            <el-breadcrumb-item>数据报表</el-breadcrumb-item>
        </el-breadcrumb>

        <el-card>
            <div id="main" style="width: 750px;height: 400px"></div>
        </el-card>
    </div>
</template>

<script>
import echarts from 'echarts'
import _ from 'lodash'

export default {
    name: 'reportView',
    data() {
        return {
            options: {
                title: {
                    text: '用户来源'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            background: '#E9EEF3'
                        }
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        boundaryGap: false
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ]
            }
        }
    },
    mounted() {
        const myChart = echarts.init(document.querySelector('#main'))
        const data = {}
        const result = _.merge(data, this.options)
        myChart.setOption(result)
    }
}
</script>