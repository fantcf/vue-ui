export const menulist = [
    {
        id: 1,
        authName: '用户管理',
        children: [
            {
                id: 101,
                authName: '用户列表',
                path: 'users'
            }
        ]
    },
    {
        id: 2,
        authName: '权限',
        children: [
            {
                id: 201,
                authName: '权限',
                path: 'rights'
            },
            {
                id: 202,
                authName: '角色',
                path: 'roles'
            }
        ]
    },
    {
        id: 3,
        authName: '商品管理',
        children: [
            {
                id: 301,
                authName: '商品列表',
                path: 'list'
            },
            {
                id: 302,
                authName: '商品分类',
                path: 'cates'
            },
            {
                id: 303,
                authName: '参数列表',
                path: 'params'
            },
            {
                id: 304,
                authName: '添加商品',
                path: 'add'
            },
        ]
    },
    {
        id: 4,
        authName: '订单管理',
        children: [
            {
                id: 401,
                authName: '订单管理',
                path: 'order'
            }
        ]
    },
    {
        id: 5,
        authName: '订单图表',
        children: [
            {
                id: 501,
                authName: '订单图表',
                path: 'report'
            }
        ]
    },
]