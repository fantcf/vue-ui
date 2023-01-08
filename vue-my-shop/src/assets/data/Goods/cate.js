export const catelist = [
    {
        cat_deleted: false,
        cat_level: 0,
    },
    {
        cat_deleted: false,
        cat_level: 1,
    },
    {
        cat_deleted: true,
        cat_level: 2,
    }
]

export const columns = [
    {
        label: '分类名称',
        prop: 'cat_name'
    },
    {
        label: '是否有效',
        type: 'template',
        template: 'isok'
    },
    {
        label: '排序',
        type: 'template',
        template: 'order'
    },
    {
        label: '操作',
        type: 'template',
        template: 'opt'
    }
]

export const addCateForm = {
    cat_name: 'a',
}