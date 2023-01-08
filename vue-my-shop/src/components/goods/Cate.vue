<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{path: '/home'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>商品分类</el-breadcrumb-item>
        </el-breadcrumb>

        <el-card>
            <el-row>
                <el-col>
                    <el-button type="primary" @click="istrue = true">添加分类</el-button>
                </el-col>
            </el-row>

            <!-- 表格 -->
            <tree-table class="treeTable" :data="catelist" :columns="columns">
                <template slot="isok" slot-scope="scope">
                    <i class="el-icon-success" v-if="scope.row.cat_deleted === false" style="color: lightgreen"></i>
                    <i class="el-icon-error" v-else style="color: red"></i>
                </template>
                <template slot="order" slot-scope="scope">
                    <el-tag size="mini" v-if="scope.row.cat_level === 0">一级</el-tag>
                    <el-tag size="mini" v-else-if="scope.row.cat_level === 1">二级</el-tag>
                    <el-tag size="mini" v-else>三级</el-tag>
                </template>
                <template slot="opt">
                    <el-button size="mini" type="primary" icon="el-icon-edit">编辑</el-button>
                    <el-button size="mini" type="danger" icon="el-icon-delete">删除</el-button>
                </template>
            </tree-table>

            <el-pagination></el-pagination>
        </el-card>

        <el-dialog title="添加分类" :visible.sync="istrue" width="50%">
            <el-form :model="addCateForm">
                <el-form-item label="分类名称" prop="cat_name">
                    <el-input v-model="addCateForm.cat_name"></el-input>
                </el-form-item>
                <el-form-item label="父级分类">
                    <el-cascader></el-cascader>
                </el-form-item>
            </el-form>
            <span slot="footer">
                <el-button @click="istrue = false">取 消</el-button>
                <el-button type="primary">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import {catelist, columns, addCateForm} from '@/assets/data/Goods/cate.js'
export default {
    name: 'cateView',
    data() {
        return {
            catelist: catelist,
            columns: columns,
            addCateForm: addCateForm,
            istrue: false
        }
    },
}
</script>

<style lang="less" scoped>
.treeTable {
    margin-top: 15px;
}
</style>