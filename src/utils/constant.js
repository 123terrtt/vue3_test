export const USERTYPE = {
    ADMIN: { text: 'admin', type: 3},
    RD: { text: 'R&D', type: 2},
    AfterSales: { text: 'AfterSales', type: 1}
}

export const DEVICE = {
    nothingx: 'Nothingx',
    ear1: 'ear (1)',
    earStick: 'ear (Stick)'
}

const loginInfo = JSON.parse(localStorage.getItem('logininfo'));
const { type } = loginInfo ? loginInfo : '';

let menulist = [];
if (type === '3') {
    menulist = [
       {
           menu: 'users',
           subMenu: [
            { menu: 'AfterSales', path: '/users'},
            { menu: 'R&D', path: '/users'},
           ]
       },
       {
            menu: 'device',
            subMenu: [
                { menu: 'nothingx', path: '/device'},
                { menu: 'ear (1)', path: '/device'},
                { menu: 'ear (Stick)', path: '/device'}
            ]
        }
    ]
} else if (type === '1' || type === '2'){
    menulist = [
        {
            menu: 'device',
            subMenu: [
                { menu: 'nothingx', path: '/device'},
                { menu: 'ear (1)', path: '/device'},
                { menu: 'ear (Stick)', path: '/device'}
            ]
        }
    ]
} else {
    menulist = [];
}
export const MENULIST = menulist