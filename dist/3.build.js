/*!
 * This file is created by longjw 
 *  email : hilongjw@gmail.com 
 *  updated_at : Fri Jan 08 2016 14:21:15 GMT+0800 (中国标准时间)
 */
webpackJsonp([3],{68:function(t,l,e){"use strict";function d(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(l,"__esModule",{value:!0});var a=e(8),i=(d(a),e(10)),o=d(i),s=e(4),n=d(s),c=n["default"].state.Cloud.Object.extend("Post");l["default"]={data:function(){return{post:{title:"",content:""}}},ready:function(){this.$nextTick(function(){componentHandler.upgradeAllRegistered()}),(0,o["default"])(document.querySelector("#content"))},methods:{showModal:function(t,l){n["default"].actions.showModal(t,l),this.$nextTick(function(){componentHandler.upgradeAllRegistered()})},newPost:function(){var t=this,l=new c,e=n["default"].state.Cloud.User.current();return e?void l.save({title:t.post.title,frontcover:"dist/shopping.jpg",text:t.post.content,author:e,favorite:0},{success:function(l){t.showModal("提示","你的文章写的太棒了，已经完成提交。")},error:function(l,e){t.showModal("提示","你的文章写的太棒了，但是由于一些故障，没有完成提交。")}}):(t.showModal("提示","你还没登录呢，登录之后才能提交文章哦"),!1)}}}},111:function(t,l,e){l=t.exports=e(2)(),l.push([t.id,".writing{background:#fff}.writing .mdl-layout__content{margin-top:112px}@media screen and (max-width:1024px){.writing .mdl-layout__content{margin-top:56px}}.writing .mdl-navigation__link{cursor:pointer}.writing .mdl-textfield{margin:1rem 0;width:100%}.writing .preview-content{border-radius:2px;padding:80px 56px;margin-bottom:80px;min-height:600px}",""])},122:function(t,l,e){var d=e(111);"string"==typeof d&&(d=[[t.id,d,""]]);e(3)(d,{});d.locals&&(t.exports=d.locals)},141:function(t,l){t.exports='<div class="writing mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs"><header class=mdl-layout__header><div class=mdl-layout__header-row><span class=mdl-layout-title v-link="{name:\'home\'}">Cov Blog</span><div class=mdl-layout-spacer></div><nav class=mdl-navigation><a class=mdl-navigation__link @click=newPost>完成</a></nav></div><div class="mdl-layout__tab-bar mdl-js-ripple-effect"><a href=#fixed-tab-1 class="mdl-layout__tab is-active">编辑</a> <a href=#fixed-tab-2 class=mdl-layout__tab>预览</a></div></header><div class=mdl-layout__drawer><span class=mdl-layout-title>Cov Blog</span></div><main class=mdl-layout__content><section class="mdl-layout__tab-panel is-active" id=fixed-tab-1><div class=page-content><div class=mdl-grid><div class="mdl-cell mdl-cell--2-col mdl-cell--1-col-tablet"></div><div class="mdl-cell mdl-cell--8-col mdl-cell--10-col-tablet"><div class="mdl-textfield mdl-js-textfield"><input class=mdl-textfield__input v-model=post.title><label class=mdl-textfield__label>Title</label></div><div class="mdl-textfield mdl-js-textfield"><textarea class=mdl-textfield__input id=content v-model=post.content type=text rows=15></textarea><label class=mdl-textfield__label>Content</label></div></div><div class="mdl-cell mdl-cell--2-col mdl-cell--1-col-phone"></div></div></div></section><section class=mdl-layout__tab-panel id=fixed-tab-2><div class=page-content><div class="preview-container mdl-grid"><div class="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div><div class="preview-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col"><h3>{{post.title}}</h3>{{{post.content | marked}}}</div></div></div></section></main></div>'},145:function(t,l,e){var d,a;e(122),d=e(68),a=e(141),t.exports=d||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options:t.exports).template=a)}});