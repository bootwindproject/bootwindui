import{a as f,j as o}from"./jsx-runtime-29545a09.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const t=({src:e,alt:n,rounded:l="md",notificationDot:r,showPlaceholder:m=!1})=>{const s={none:"",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",full:"rounded-full"};let i="400";r==="gray"&&(i="300");const p=!e&&m;return f("span",{className:"relative inline-block",children:[r&&o("span",{className:`absolute bottom-0 right-0 block ${l==="full"?"h-2 w-2":"translate-y-1/2 translate-x-1/2 transform h-2 w-2"} rounded-full bg-${r}-${i} ring-1 ring-white`}),p?o("img",{className:`inline-block h-8 w-8 bg-gray-200 ${s[l]}`,src:"https://english.columbia.edu/themes/custom/columbia/assets/img/people-default.svg",alt:n}):e?o("img",{className:`inline-block h-8 w-8 ${s[l]}`,src:e,alt:n}):null]})};try{t.displayName="Avatar",t.__docgenInfo={description:"",displayName:"Avatar",props:{src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},rounded:{defaultValue:{value:"md"},description:"",name:"rounded",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'},{value:'"full"'}]}},notificationDot:{defaultValue:null,description:"",name:"notificationDot",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"red"'},{value:'"green"'}]}},showPlaceholder:{defaultValue:{value:"false"},description:"",name:"showPlaceholder",required:!1,type:{name:"boolean"}}}}}catch{}try{avatar.displayName="avatar",avatar.__docgenInfo={description:"",displayName:"avatar",props:{src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},rounded:{defaultValue:{value:"md"},description:"",name:"rounded",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"none"'},{value:'"full"'}]}},notificationDot:{defaultValue:null,description:"",name:"notificationDot",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"red"'},{value:'"green"'}]}},showPlaceholder:{defaultValue:{value:"false"},description:"",name:"showPlaceholder",required:!1,type:{name:"boolean"}}}}}catch{}const y={title:"Components/Avatar",component:t,tags:["autodocs"],argTypes:{rounded:{options:["none","sm","md","lg","full"],control:{type:"radio"}},notificationDot:{options:[null,"gray","red","green"],control:{type:"radio"}},showPlaceholder:{description:"Show avatar placeholder if `src` is null",control:"boolean"}}},a={args:{rounded:"full",notificationDot:"gray",alt:"User 1 Avatar",showPlaceholder:!1,src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}};var u,d,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    rounded: 'full',
    notificationDot: 'gray',
    alt: 'User 1 Avatar',
    showPlaceholder: false,
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const b=["Basic"];export{a as Basic,b as __namedExportsOrder,y as default};
//# sourceMappingURL=Avatar.stories-b131a661.js.map
