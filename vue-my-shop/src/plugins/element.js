import Vue from 'vue'
import {
    Button,
    Header,
    Aside,
    Form,
    FormItem,
    Input,
    Message,
    Menu,
    MenuItem,
    Submenu,
    Main,
    Breadcrumb,
    BreadcrumbItem,
    Card,
    Row,
    Col,
    Table,
    TableColumn,
    Switch,
    Tooltip,
    Pagination,
    Dialog,
    Select,
    Option,
    Tag,
    Tree,
    Container,
    Cascader,
    Alert,
    Tabs,
    TabPane,
    MessageBox
} from 'element-ui'

Vue.use(Button)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Main)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Select)
Vue.use(Option)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Container)
Vue.use(Cascader)
Vue.use(Alert)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(MessageBox)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm