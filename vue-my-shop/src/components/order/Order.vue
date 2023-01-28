<template>
    <div>
        <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{path: '/home'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item>订单管理</el-breadcrumb-item>
            <el-breadcrumb-item>订单详情</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 卡片试图 -->
        <el-card>
            <el-row>
                <el-col :span="8">
                    <el-input placeholder="请输入内容">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-col>
            </el-row>

            <!-- 订单列表数据 -->
            <el-table :data="orderlist">
                <el-table-column type="index"></el-table-column>
                <el-table-column label="订单编号" prop="order_number"></el-table-column>
                <el-table-column label="订单价格" prop="order_price"></el-table-column>
                <el-table-column label="是否付款" prop="pay_status">
                    <template slot-scope="scope">
                        <el-tag type="success" v-if="scope.row.pay_status === true">已付款</el-tag>
                        <el-tag type="danger" v-else>未付款</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="是否发货" prop="is_send">
                    <tempalte slot-scope="scope">
                        {{ scope.row.is_send }}
                    </tempalte>
                </el-table-column>
                <el-table-column label="下单时间" prop="create_time">
                    <tempalte slot-scope="scope">
                        {{ scope.row.create_time | dateFormat }}
                    </tempalte>
                </el-table-column>
                <el-table-column label="操作">
                    <template>
                        <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
                        <el-button type="success" icon="el-icon-location" size="mini"></el-button>
                    </template>
                </el-table-column>
            </el-table>

            <!-- 分页 -->
            <el-pagination ></el-pagination>
        </el-card>
    </div>
</template>

<script>
import {orderlist} from '@/assets/data/Order/order'
export default {
    name: 'orderView',
    data() {
      return {
        orderlist: orderlist
      }  
    },
}
</script>