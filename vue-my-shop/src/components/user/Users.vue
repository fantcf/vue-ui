<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{path: '/home'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
        
        <el-card>
            <!-- 搜索与添加区域 -->
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable>
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary" @click="addDialogVisible = true">添加用户</el-button>
                </el-col>
            </el-row>

            <!-- 用户列表区域 -->
            <el-table :data="userlist" border stripe>
                <el-table-column type="index"></el-table-column>
                <el-table-column label="姓名" prop="username"></el-table-column>
                <el-table-column label="邮箱" prop="email"></el-table-column>
                <el-table-column label="电话" prop="mobile"></el-table-column>
                <el-table-column label="角色" prop="role_name"></el-table-column>
                <el-table-column label="状态">
                    <template slot-scope="scope">
                        <el-switch v-model="scope.row.mg_state"></el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="180px">
                    <template slot-scope="scope">
                        <el-button type="primary" icon="el-icon-edit" size="mini" @click="showEditDialog(scope.row.id)"></el-button>
                        <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
                        <el-tooltip effect="dark" content="分配角色" placement="top" :enterable="false">
                            <el-button type="warning" icon="el-icon-setting" size="mini" @click="setRole(scope.row)"></el-button>
                        </el-tooltip>
                    </template>
                </el-table-column>
            </el-table>

            <!-- 分页区域 -->
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="queryInfo.pagenum" :page-sizes="[1,2,5,10]" :page-size="queryInfo.pagesize" layout="total,sizes,prev,pager,next,jumper" :total="total"></el-pagination>
        </el-card>

        <!-- 添加用户对话框 -->
        <el-dialog title="添加用户" :visible.sync="addDialogVisible" width="50%" @close="addDialogClosed">
            <el-form :model="addForm" label-width="70px" :rules="addFormRules" ref="editFormRef">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="addForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="addForm.password"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="addForm.email"></el-input>
                </el-form-item>
                <el-form-item label="手机" prop="mobile">
                    <el-input v-model="addForm.mobile"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer">
                <el-button @click="addDialogVisible = false">取消</el-button>
                <el-button type="primary">确定</el-button>
            </span>
        </el-dialog>

        <!-- 修改用户的对话框 -->
        <el-dialog title="修改用户" :visible.sync="editDialogVisible">
            <el-form :model="editForm" label-width="70px">
                <el-form-item label="用户名">
                    <el-input v-model="editForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="editForm.password"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="editForm.email"></el-input>
                </el-form-item>
                <el-form-item label="电话">
                    <el-input v-model="editForm.mobile"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer">
                <el-button @click="editDialogVisible = false">取消</el-button>
                <el-button type="primary">确定</el-button>
            </span>
        </el-dialog>

        <!-- 分配角色的对话框 -->
        <el-dialog title="分配角色" :visible.sync="setRoleDialogVisible">
            <div>
                <p>当前的用户： {{ userInfo.username }}</p>
                <p>当前的角色 {{ userInfo.role_name }}</p>
                <p>分配新角色：
                    <el-select v-model="selectedRoleId">
                        <el-option v-for="item in rolesList" :key="item.id" :label="item.roleName" :value="item.id"></el-option>
                    </el-select>
                </p>
            </div>
            <span slot="footer">
                <el-button @click="setRoleDialogVisible = false">取消</el-button>
                <el-button type="primary">确定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import { usersInfo, queryInfo, rolesList} from '@/assets/data/Users/usersInfo'
    export default {
        name: 'UsersView',
        data() {
            return {
                userlist: usersInfo,
                queryInfo: queryInfo,
                total: usersInfo.length,
                rolesList: rolesList,
                addForm: {
                    username: '',
                    password: '',
                    email: '',
                    mobile: ''
                },
                userInfo: {},
                editForm: {},
                addFormRules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 6, max: 15, message: '用户名长度为6~15之间', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 6, max: 15, message: '密码长度为6~15之间', trigger: 'blur'}
                    ],
                    email: [
                        {required: true, message: '请输入邮箱', trigger: 'blur'},
                        {min: 6, max: 15, message: '邮箱长度为6~15之间', trigger: 'blur'}
                    ],
                    mobile: [
                        {required: true, message: '请输入电话', trigger: 'blur'},
                        {min: 6, max: 15, message: '电话长度为6~15之间', trigger: 'blur'}
                    ],
                },
                addDialogVisible: false,
                editDialogVisible: false,
                setRoleDialogVisible: false,
                selectedRoledId: 0,
            }
        },
        methods: {
            handleSizeChange(newSize) {
                this.queryInfo.pagesize = newSize
            },
            handleCurrentChange(newPage) {
                this.queryInfo.pagenum = newPage
            },
            showEditDialog(id) {
                this.editDialogVisible = true
                this.userlist.forEach(item => {
                    if (item.id === id) {
                        this.editForm = item
                    }
                })
            },
            setRole(userInfo) {
                this.userInfo = userInfo
                this.setRoleDialogVisible = true
            },
            addDialogClosed() {
                this.$refs.editFormRef.resetFields()
            }
        }
    }
</script>