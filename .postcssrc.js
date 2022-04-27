// import와 export는 ECMA Script Module이라고 함
// But, Node.js에서는 CommonJS 제공. \
// Node.js에서는 import와 export를 사용하지 않고, require/module.exports를 사용함. 

// import qutoprefixer from 'autoprefixer
const autoprefixer = require('autoprefixer')

// export {
//     plugins :[
//         autoprefixer
//     ]
// }

module.exports = {
    plugin: [
        autoprefixer
    ]
}