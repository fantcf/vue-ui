<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{path: '/home'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>参数列表</el-breadcrumb-item>
        </el-breadcrumb>

        <el-card>
            <el-alert show-icon title="注意：只允许为第三级分类设置相关参数！" type="warning" :closable="false"></el-alert>

            <el-row>
                <el-col>
                    <span>选择商品分类：</span>
                    <el-cascader expand-trigger="hover"></el-cascader>
                </el-col>
            </el-row>

            <el-tabs v-model="activeName">
                <el-tab-pane label="动态参数" name="many">
                    <el-button type="primary" size="mini">添加参数</el-button>
                    <el-table :data="manyTableData">
                        <el-table-column type="expand">
                            <tempalte slot-scope="scope">
                                <el-tag v-for="(item, i) in scope.row.attr_vals" :key="i" closable>{{ item }}</el-tag>
                                <el-input v-if="scope.row.inputVisible" v-model="scope.row.inputValue" size="small"></el-input>
                                <el-button v-else size="small">+ New Tag</el-button>
                            </tempalte>
                        </el-table-column>
                        <el-table-column type="index"></el-table-column>
                        <el-table-column label="参数名称" prop="attr_name"></el-table-column>
                        <el-table-column label="操作">
                            <template>
                                <el-button size="mini" type="primary" icon="el-icon-edit">编辑</el-button>
                                <el-button size="mini" type="danger" icon="el-icon-delete">编辑</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script>
import {manyTableData} from '@/assets/data/Goods/params.js'
export default {
    name: 'paramsView',
    data() {
        return {
            activeName: 'many',
            manyTableData: manyTableData
        }
    },
}
</script>