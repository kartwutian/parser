const { parseAST } = require('@wxmini/wxml-parser');
 
var wxml = `<view class="cate-container">
    <view class="cate" wx:for="{{cate}}" wx:key="index" wx:for-item="cateItem">
        <view class="cate-label">{{cateItem.label}}</view>
        <view class="cate-sub">
            <view bindtap="jumpTo" class="subcate" wx:for="{{cateItem.subCate}}" wx:key="id" wx:for-item="subCateItem">
                <view>{{subCateItem.label}}</view>
            </view>
        </view>
    </view>
</view>`;
 
// 返回结果为根节点root
const result = parseAST(wxml);

console.dir(result)