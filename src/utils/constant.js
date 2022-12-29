//1：研发人员 2：测试人员  3：admin

// 用户类型
export const USERTYPE = {
    AfterSales: { text: 'After Sales', type: 2},
    RD: { text: 'R&D', type: 1},
    Admin: { text: 'Admin', type: 3}
  }
  // 设备类型
  export const DEVICETYPE = {
    EarStick: 'Ear Stick',
    Ear1: 'Nothing Ear (1)',
    Ear2: 'Ear (2)',
    JV: 'JV'
  }
  export const USERSTATUS = [
    { text: 'active', code: 0},
    { text: 'in Active', code: 1}
  ]
  export const MENULIST = [
    {
      menu: 'Users',
      subMenu: [
        {menuItem: 'After Sales', path: '/usersList'}, 
        {menuItem: 'R&D', path: '/usersList'}
      ],
      showMenuMap: [3], //对于哪类登录人员可展示
    },
    {
      menu: 'Devices', 
      subMenu: [
        {menuItem: 'Ear Stick', path: '/device'}, 
        {menuItem: 'Nothing Ear (1)', path: '/device'},
        {menuItem: 'Ear (2)', path: '/device'}, 
        {menuItem: 'JV', path: '/device'},
      ],
      showMenuMap: [1, 2, 3],
    },
  ]
  