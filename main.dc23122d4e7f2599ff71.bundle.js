(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{285:function(module,exports,__webpack_require__){__webpack_require__(286),__webpack_require__(432),module.exports=__webpack_require__(433)},350:function(module,exports){},433:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(280);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(624)],module)}.call(this,__webpack_require__(434)(module))},624:function(module,exports,__webpack_require__){var map={"./stories/0-Welcome.stories.tsx":625,"./stories/Button.stories.tsx":635,"./stories/Card.stories.tsx":650,"./stories/Typography.stories.tsx":651};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=624},625:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ToStorybook",(function(){return ToStorybook}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_links__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(281),_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(64);__webpack_exports__.default={title:"Welcome",component:_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Welcome};var ToStorybook=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Welcome,{showApp:Object(_storybook_addon_links__WEBPACK_IMPORTED_MODULE_1__.linkTo)("Button")})};ToStorybook.displayName="ToStorybook",ToStorybook.story={name:"to Storybook"},ToStorybook.__docgenInfo={description:"",methods:[],displayName:"ToStorybook"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/0-Welcome.stories.tsx"]={name:"ToStorybook",docgenInfo:ToStorybook.__docgenInfo,path:"src/stories/0-Welcome.stories.tsx"})},635:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Text",(function(){return Text})),__webpack_require__.d(__webpack_exports__,"Emoji",(function(){return Emoji}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(175),_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(64);__webpack_exports__.default={title:"Button",component:_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Button};var Text=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Button,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("clicked")},"Hello Button")};Text.displayName="Text";var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{role:"img","aria-label":"so cool"},"😀 😎 👍 💯"),Emoji=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Button,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("clicked")},_ref)};Emoji.displayName="Emoji",Text.__docgenInfo={description:"",methods:[],displayName:"Text"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Button.stories.tsx"]={name:"Text",docgenInfo:Text.__docgenInfo,path:"src/stories/Button.stories.tsx"}),Emoji.__docgenInfo={description:"",methods:[],displayName:"Emoji"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Button.stories.tsx"]={name:"Emoji",docgenInfo:Emoji.__docgenInfo,path:"src/stories/Button.stories.tsx"})},650:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"SimpleCard",(function(){return SimpleCard}));__webpack_require__(28);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),taggedTemplateLiteral=(__webpack_require__(648),__webpack_require__(88),__webpack_require__(20)),styled_components_browser_esm=__webpack_require__(21),randomImage_images=["https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1429554513019-6c61c19ffb7e?auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=500&q=60"];function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  color: ",";\n  font-size: 17px;\n  font-weight: 500;\n  padding: 0 !important;\n  margin: 0 !important;\n  word-break: break-word;\n  font-family: Raleway, sans-serif;\n"]);return _templateObject=function(){return data},data}var Typography_Paragraph=styled_components_browser_esm.a.p(_templateObject(),(function(props){return props.theme.primary}));function SmallText_templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  color: ",";\n  font-size: 13px;\n  font-weight: 500;\n  margin: 0 !important;\n  padding: 0 !important;\n  word-break: break-word;\n  font-family: Raleway, sans-serif;\n"]);return SmallText_templateObject=function(){return data},data}var Typography_SmallText=styled_components_browser_esm.a.p(SmallText_templateObject(),(function(props){return props.color||props.theme.secondaryDark}));function ClearButton_templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  background: none;\n  border: none;\n  color: #5d8ed5;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 13px;\n  font-family: 'Raleway', sans-serif;\n  &:focus {\n    outline: none;\n  }\n"]);return ClearButton_templateObject=function(){return data},data}var Button_ClearButton=styled_components_browser_esm.a.button(ClearButton_templateObject());function _templateObject3(){var data=Object(taggedTemplateLiteral.a)(["\n  background-color: ",";\n  width: 43px;\n  padding: 0 5px;\n  display: flex;\n  align-items: center;\n  height: 20px;\n  flex-direction: row;\n"]);return _templateObject3=function(){return data},data}function _templateObject2(){var data=Object(taggedTemplateLiteral.a)(["\n  height: 160px;\n  width: '100%';\n  background: url(",");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n"]);return _templateObject2=function(){return data},data}function FoodCard_templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  flex-direction: column;\n  border: 1px solid #fff;\n  width: 100%;\n  padding: 20px 20px 10px 20px;\n  box-shadow: none;\n\n  .view {\n    visibility: hidden;\n  }\n\n  &:hover {\n    border-color: #d3d5df;\n    box-shadow: 0 4px 7px 0 rgba(218, 220, 230, 0.6);\n    .view {\n      visibility: visible;\n    }\n  }\n"]);return FoodCard_templateObject=function(){return data},data}var FoodWrapper=styled_components_browser_esm.a.div(FoodCard_templateObject()),FoodImage=styled_components_browser_esm.a.div(_templateObject2(),randomImage_images[Math.floor(10*Math.random())]),Rating=styled_components_browser_esm.a.div(_templateObject3(),(function(props){return props.theme.success})),_ref=react_default.a.createElement(FoodImage,null),_ref2=react_default.a.createElement("div",{className:"flex-fill"},react_default.a.createElement(Typography_SmallText,null,".")),_ref3=react_default.a.createElement("div",{className:"flex-fill"},react_default.a.createElement(Typography_SmallText,null,".")),_ref4=react_default.a.createElement("div",{className:"mt-3 border-top py-2 text-center view"},react_default.a.createElement(Button_ClearButton,null,"QUICK VIEW"));function FoodCard(props){return react_default.a.createElement("div",{className:props.className},react_default.a.createElement(FoodWrapper,null,_ref,react_default.a.createElement(Typography_Paragraph,null,props.name),react_default.a.createElement(Typography_SmallText,null,props.food_types.join(", ")),react_default.a.createElement("div",{className:"d-flex flex-row mt-4"},react_default.a.createElement("div",{className:"flex-fill"},react_default.a.createElement(Rating,null,react_default.a.createElement("i",{className:"fa fa-star mr-1 my-auto",style:{color:"white",fontSize:"12px"}}),react_default.a.createElement(Typography_SmallText,{color:"white"},props.ratings))),_ref2,react_default.a.createElement("div",{className:"flex-fill"},react_default.a.createElement(Typography_SmallText,null,props.delivery_time)),_ref3,react_default.a.createElement("div",{className:"flex-fill"},react_default.a.createElement(Typography_SmallText,{style:{textAlign:"right"}},"₹",props.price_for_two," FOR TWO"))),_ref4))}FoodCard.displayName="FoodCard",FoodCard.__docgenInfo={description:"",methods:[],displayName:"FoodCard",props:{name:{required:!0,tsType:{name:"string"},description:""},food_types:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},ratings:{required:!0,tsType:{name:"string"},description:""},isExlusive:{required:!0,tsType:{name:"boolean"},description:""},delivery_time:{required:!0,tsType:{name:"string"},description:""},price_for_two:{required:!0,tsType:{name:"number"},description:""},className:{required:!0,tsType:{name:"string"},description:""}}};var Surface_FoodCard=FoodCard;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Surface/FoodCard.tsx"]={name:"FoodCard",docgenInfo:FoodCard.__docgenInfo,path:"src/components/Surface/FoodCard.tsx"});__webpack_exports__.default={title:"Card",component:Surface_FoodCard};var sampleCardProps={name:"Maestro A Restro Cafe",food_types:["North Indian","Chinese","Beverages"],ratings:"4.2",isExlusive:!1,delivery_time:"47 mins",price_for_two:1200},SimpleCard=function(){return react_default.a.createElement("div",{className:"row"},react_default.a.createElement(Surface_FoodCard,Object.assign({},sampleCardProps,{className:"col-sm-4"})),react_default.a.createElement(Surface_FoodCard,Object.assign({},sampleCardProps,{className:"col-sm-4"})),react_default.a.createElement(Surface_FoodCard,Object.assign({},sampleCardProps,{className:"col-sm-4"})))};SimpleCard.displayName="SimpleCard",SimpleCard.__docgenInfo={description:"",methods:[],displayName:"SimpleCard"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Card.stories.tsx"]={name:"SimpleCard",docgenInfo:SimpleCard.__docgenInfo,path:"src/stories/Card.stories.tsx"})},651:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Heading1",(function(){return Heading1})),__webpack_require__.d(__webpack_exports__,"Heading2",(function(){return Heading2})),__webpack_require__.d(__webpack_exports__,"Heading3",(function(){return Heading3})),__webpack_require__.d(__webpack_exports__,"Heading4",(function(){return Heading4})),__webpack_require__.d(__webpack_exports__,"DefaultTag",(function(){return DefaultTag}));var react=__webpack_require__(0),react_default=__webpack_require__.n(react),taggedTemplateLiteral=__webpack_require__(20),styled_components_browser_esm=__webpack_require__(21);function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  color: ",";\n  font-size: ",";\n  font-family: 'Raleway', sans-serif;\n  font-weight: 900;\n"]);return _templateObject=function(){return data},data}var Typography_Heading=styled_components_browser_esm.a.h1(_templateObject(),(function(props){return props.theme.primary}),(function(props){return function(varients){switch(varients){case 1:return"5rem";case 2:return"4rem";case 3:return"3rem";case 4:return"2rem";default:return"1rem"}}(props.varients,props.mediaQueryType)})),_ref=(__webpack_exports__.default={title:"Typography",component:Typography_Heading},react_default.a.createElement(Typography_Heading,{varients:1},"This is heading 1 with 5 rem")),Heading1=function(){return _ref};Heading1.displayName="Heading1";var _ref2=react_default.a.createElement(Typography_Heading,{varients:2},"This is heading 2 with 4 rem"),Heading2=function(){return _ref2};Heading2.displayName="Heading2";var _ref3=react_default.a.createElement(Typography_Heading,{varients:3},"This is heading 3 with 3 rem"),Heading3=function(){return _ref3};Heading3.displayName="Heading3";var _ref4=react_default.a.createElement(Typography_Heading,{varients:4},"This is heading 3 with 2 rem"),Heading4=function(){return _ref4};Heading4.displayName="Heading4";var _ref5=react_default.a.createElement(Typography_Heading,{varients:5},"This is the default "),DefaultTag=function(){return _ref5};DefaultTag.displayName="DefaultTag",Heading1.__docgenInfo={description:"",methods:[],displayName:"Heading1"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Typography.stories.tsx"]={name:"Heading1",docgenInfo:Heading1.__docgenInfo,path:"src/stories/Typography.stories.tsx"}),Heading2.__docgenInfo={description:"",methods:[],displayName:"Heading2"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Typography.stories.tsx"]={name:"Heading2",docgenInfo:Heading2.__docgenInfo,path:"src/stories/Typography.stories.tsx"}),Heading3.__docgenInfo={description:"",methods:[],displayName:"Heading3"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Typography.stories.tsx"]={name:"Heading3",docgenInfo:Heading3.__docgenInfo,path:"src/stories/Typography.stories.tsx"}),Heading4.__docgenInfo={description:"",methods:[],displayName:"Heading4"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Typography.stories.tsx"]={name:"Heading4",docgenInfo:Heading4.__docgenInfo,path:"src/stories/Typography.stories.tsx"}),DefaultTag.__docgenInfo={description:"",methods:[],displayName:"DefaultTag"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Typography.stories.tsx"]={name:"DefaultTag",docgenInfo:DefaultTag.__docgenInfo,path:"src/stories/Typography.stories.tsx"})}},[[285,1,2]]]);
//# sourceMappingURL=main.dc23122d4e7f2599ff71.bundle.js.map