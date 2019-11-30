const { transformFromAST } = require('@wxmini/wxml-generator');
 
var ast = `{
    "tag": "body",
    "attr": {},
    "children": [{
        "tag": "view",
        "attr": {
            "class": "cate-container"
        },
        "unary": false,
        "children": [{
            "tag": "view",
            "attr": {
                "class": "cate",
                "wx:for": "{{cate}}",
                "wx:key": "index",
                "wx:for-item": "cateItem"
            },
            "unary": false,
            "children": [{
                "tag": "view",
                "attr": {
                    "class": "cate-label"
                },
                "unary": false,
                "children": ["{{cateItem.label}}"]
            }, {
                "tag": "view",
                "attr": {
                    "class": "cate-sub"
                },
                "unary": false,
                "children": [{
                    "tag": "view",
                    "attr": {
                        "bindtap": "jumpTo",
                        "class": "subcate",
                        "wx:for": "{{cateItem.subCate}}",
                        "wx:key": "id",
                        "wx:for-item": "subCateItem"
                    },
                    "unary": false,
                    "children": [{
                        "tag": "view",
                        "attr": {},
                        "unary": false,
                        "children": ["{{subCateItem.label}}"]
                    }, {
                        "tag": "textarea",
                        "attr": {},
                        "unary": true,
                        "children": []
                    }]
                }]
            }]
        }]
    }]
}`;
 
// 返回结果为wxml
const result = transformFromAST(ast);

