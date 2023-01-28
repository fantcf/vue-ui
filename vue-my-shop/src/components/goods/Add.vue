<template>
    <div>
        <!-- 面包屑导航区 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{path: '/home'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            <el-breadcrumb-item>添加商品</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 卡片视图 -->
        <el-card>
            <!-- 提示区 -->
            <el-alert type="info" title="添加商品信息" center show-icon :closable="false"></el-alert>

            <!-- 步骤条区 -->
            <el-steps align-center :active="activeIndex - 0" finish-status="success" :space="200">
                <el-step title="基本信息"></el-step>
                <el-step title="商品参数"></el-step>
                <el-step title="商品属性"></el-step>
                <el-step title="商品图片"></el-step>
                <el-step title="商品内容"></el-step>
                <el-step title="完成"></el-step>
            </el-steps>

            <!-- tab栏区 -->
            <el-form ref="addFormRef" :rules="addFormRules" :model="addForm" label-width="100px" label-position="top">
                <el-tabs v-model="activeIndex" :tab-position="'left'" :befor-leave="beforeTabLeave" >
                    <el-tab-pane label="基本信息" name="0">
                        <el-form-item label="商品名称" prop="goods_name">
                            <el-input v-model="addForm.goods_name"></el-input>
                        </el-form-item>
                        <el-form-item label="商品价格" prop="goods_price">
                            <el-input type="number" v-model="addForm.goods_price"></el-input>
                        </el-form-item>
                        <el-form-item label="商品重量" prop="goods_weight">
                            <el-input type="number" v-model="addForm.goods_weight"></el-input>
                        </el-form-item>
                        <el-form-item label="商品数量" prop="goods_number">
                            <el-input type="number" v-model="addForm.goods_weight"></el-input>
                        </el-form-item>
                        <el-form-item label="商品分类" prop="goods_cat">
                            <el-cascader v-model="addForm.goods_cat" :props="cateProps" :options="cateProps" expand-trigger="hover"></el-cascader>
                        </el-form-item>
                    </el-tab-pane>
                    <el-tab-pane label="商品参数" name="1">
                        <el-form-item v-for="item in manyTableData" :key="item.attr_id" :label="item.attr_name">
                            <el-checkbox-group v-model="item.attr_vals">
                                <el-checkbox v-for="(cb, i) in item.attr_vals" :key="i" :label="cb" border></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                    </el-tab-pane>
                    <el-tab-pane label="商品属性" name="2">
                        <el-form-item v-for="item in onlyTableData" :key="item.attr_id" :label="item.attr_name">
                            <el-input v-model="item.attr_vals"></el-input>
                        </el-form-item>
                    </el-tab-pane>
                    <el-tab-pane label="商品图片" name="3">
                        <el-upload :action="uploadURL" list-type="picture" :on-preview="handlePreview" :on-reomve="handleRemove" :on-success="handleSuccess">
                            <el-button type="primary" size="small">点击上传</el-button>
                        </el-upload>
                    </el-tab-pane>
                    <el-tab-pane label="商品内容" name="4">
                        <quill-editor v-model="addForm.goods_introduce"></quill-editor>
                        <el-button type="primary" class="btnAdd">添加商品</el-button>
                    </el-tab-pane>
                </el-tabs>
            </el-form>
        </el-card>

        <!-- 图片预览 -->
        <el-dialog title="图片预览" :visible.sync="previewVisble" width="50%">
            <img :src="previewPath" class="previewImg">
        </el-dialog>
    </div>
</template>

<script>
import { manyTableData, onlyTableData } from '@/assets/data/Goods/add';
export default {
    name: 'addView',
    data() {
        return {
            activeIndex: '0',
            addFormRules: {
                goods_name: [
                    {required: true, message: '请输入商品名称', trigger: 'blur'},
                    {min: 0, max: 15, message: '0-15'}
                ],
                goods_price: [
                    {required: true, message: '请输入价格', trigger: 'blur'}
                ],
                goods_weigth: [
                    {required: true, message: '请输入重量', trigger: 'blur'}
                ],
                goods_number: [
                    {required: true, message: '请输入数量', trigger: 'blur'}
                ],
                goods_cat: [
                    {required: true, message: '请选择商品分类', trigger: 'blur'}
                ]
            },
            addForm: {
                goods_name: 'aaa',
                goods_price: 0,
                goods_weight: 1, 
                goods_number: 2,
                goods_cat: [],
                pics: [],
                goods_introduce: '',
                attrs: []
            },
            cateProps: {
                label: 'cat_name',
                value: 'cat_id',
                children: 'children'
            },
            catelist: [],
            manyTableData: manyTableData,
            onlyTableData: onlyTableData,
            uploadURL: require('../../assets/logo.png'),
            previewPath: require('../../assets/logo.png'),
            previewVisble: false
        }
    },
    methods: {
        handlePreview(file) {
            this.previewPath = file.response.data.url
            this.previewVisble = true
        },
        handleRemove(file) {
            const filePath = file.response.data.tmp_path
            const i = this.addForm.pics.findIndex(x => x.pic === filePath)
            this.addForm.pics.splice(i, 1)
        },
        handleSuccess(response) {
            const picInfo = {pic: response.data.tmp_path}
            this.addForm.pics.push(picInfo)
        },
        beforeTabLeave(activeName, oldActiveName) {
            if (oldActiveName === '0' && this.addForm.goods_cat.length !== 3) {
                this.$message.error('请先选择商品分类！')
                return false
            }
        }
    }
}
</script>

<style lang="less" scoped>
.btnAdd {
  margin-top: 15px;
}
.previewImg {
  width: 100%;
}
</style>