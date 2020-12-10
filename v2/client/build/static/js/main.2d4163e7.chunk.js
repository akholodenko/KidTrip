(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{124:function(e,t,n){},203:function(e,t,n){e.exports=n(247)},215:function(e,t,n){},216:function(e,t,n){},217:function(e,t,n){},218:function(e,t,n){},245:function(e,t,n){},247:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n(0),o=n.n(r),l=n(17),i=n.n(l),c=n(9),s=n(44),u=n(170),m=n(15);const d=e=>e.pathname===p.home;var p={home:"/",dashboard:"/dashboard/:section?",dashboardPath:e=>"/dashboard/".concat(e),venue:"/venue/:venueSlug",venuePath:e=>"/venue/".concat(e),userProfile:"/user/:userId",userProfilePath:e=>"/user/".concat((e=>btoa(999999999*e))(e)),validatePageSection:(e,t,n)=>Object.values(t).includes(e)?e:n},g=n(184);const v=(e,t)=>({container:{display:"flex",justifyContent:"center",alignItems:"center",background:"linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(".concat(e,") 50% 50% no-repeat"),backgroundSize:"cover",height:t},headerText:{color:"#ffffff"}}),b="https://kidtrip.s3.us-east-2.amazonaws.com/assets/",f=v("".concat(b,"venue-header-backgrounds/family-biking-cmp.jpg"),"700px");var h=()=>(console.log(b),o.a.createElement("div",{style:f.container},o.a.createElement(g.a,{variant:"h2",style:f.headerText},o.a.createElement("strong",null,"Experience")," childhood, again."))),y=(n(215),e=>{const t=e.title,n=e.icon,a=e.text,r={background:"url(/images/icons/".concat(n,".png) 0% 0% / 60px 60px no-repeat"),width:"60px",height:"60px"};return o.a.createElement("div",{className:"value-prop-section"},o.a.createElement("div",{className:"value-prop-title"},t),o.a.createElement("div",{className:"value-prop-icon",style:r}),o.a.createElement("div",{className:"value-prop-text"},a))});n(216);const E={title:"Discover",icon:"discover",text:"Find out about great local places to visit with your family. From restaurants, to museums, \n\tparks and playgrounds, make the most of your time!"},O={title:"Track",icon:"track",text:"Had a great time sharing a meal with your family or enjoyed a hiking trail? Jot it down to build your \n\troster of go-to places for your future trips."},j={title:"Share",icon:"share",text:"Share your favorite places to visit with friends and family; hear about what others are \n\tenjoying, for great new ideas."};var S=()=>o.a.createElement("div",{className:"value-prop-container"},o.a.createElement(y,E),o.a.createElement(y,O),o.a.createElement(y,j));var x=n(174),I=n(183),C=n(23);function N(){const e=Object(C.a)(["\n  query($cityIds: String, $venueTypeIds: String, $sort: String, $first: Int) {\n    venues(\n      cityIds: $cityIds\n      venueTypeIds: $venueTypeIds\n      sort: $sort\n      first: $first\n    ) {\n      id\n      createdAt\n      name\n      slug\n      description\n      streetAddress\n      zipcode\n      city\n      state\n      lat\n      lng\n      creator {\n        id\n        firstName\n        lastName\n      }\n      venueTypes {\n        id\n        name\n        image\n      }\n    }\n  }\n"]);return N=function(){return e},e}function k(){const e=Object(C.a)(["\n  query($venueId: ID!, $limit: Int, $radius: Int) {\n    similarVenues(id: $venueId, first: $limit, radius: $radius) {\n      id\n      name\n      slug\n      streetAddress\n      zipcode\n      city\n    }\n  }\n"]);return k=function(){return e},e}function T(){const e=Object(C.a)(["\n  query {\n    venueTypes {\n      id\n      name\n      image\n    }\n  }\n"]);return T=function(){return e},e}function w(){const e=Object(C.a)(["\n  query {\n    me {\n      venues {\n        ...VenueDetails\n      }\n      favoriteVenues {\n        ...VenueDetails\n      }\n    }\n  }\n  ","\n"]);return w=function(){return e},e}function D(){const e=Object(C.a)(["\n  query($venueSlug: String!) {\n    venueBySlug(slug: $venueSlug) {\n      ...VenueDetails\n      ...VenueStats\n    }\n  }\n  ","\n  ","\n"]);return D=function(){return e},e}function V(){const e=Object(C.a)(["\n  query($venueId: ID!) {\n    venue(id: $venueId) {\n      ...VenueDetails\n      ...VenueStats\n    }\n  }\n  ","\n  ","\n"]);return V=function(){return e},e}function q(){const e=Object(C.a)(["\n  query($venueId: ID!) {\n    venue(id: $venueId) {\n      ...VenueDetails\n    }\n  }\n  ","\n"]);return q=function(){return e},e}function $(){const e=Object(C.a)(["\n  fragment VenueStats on Venue {\n    venueStats {\n      favorites\n      favoriteByCurrentUser\n    }\n  }\n"]);return $=function(){return e},e}function F(){const e=Object(C.a)(["\n  fragment VenueDetails on Venue {\n    id\n    name\n    slug\n    description\n    streetAddress\n    zipcode\n    city\n    state\n    lat\n    lng\n    venueTypes {\n      id\n      name\n      image\n    }\n  }\n"]);return F=function(){return e},e}const A=Object(c.gql)(F()),B=Object(c.gql)($()),M=(Object(c.gql)(q(),A),Object(c.gql)(V(),A,B),Object(c.gql)(D(),A,B)),U=Object(c.gql)(w(),A),L=Object(c.gql)(T()),W=Object(c.gql)(k()),z=Object(c.gql)(N());function P(){const e=Object(C.a)(["\n  query($publicId: String!) {\n    userProfile(publicId: $publicId) {\n      user {\n        id\n        firstName\n        lastName\n        zipcode\n      }\n      config {\n        headerImageUrl\n      }\n      stats {\n        created\n        favorited\n      }\n      recentFavoriteVenues {\n        ...VenueDetails\n      }\n      recentAddedVenues {\n        ...VenueDetails\n      }\n    }\n  }\n  ","\n"]);return P=function(){return e},e}function R(){const e=Object(C.a)(["\n  query {\n    userFeedConfig {\n      cityIds\n      venueTypeIds\n      cityDetails {\n        id\n        name\n        state\n      }\n    }\n  }\n"]);return R=function(){return e},e}function Q(){const e=Object(C.a)(["\n  query {\n    currentUser @client {\n      id\n      firstName\n      lastName\n    }\n  }\n"]);return Q=function(){return e},e}const _=Object(c.gql)(Q()),H=Object(c.gql)(R()),G=Object(c.gql)(P(),A),J=()=>!!localStorage.getItem("auth-token");n(217),n(218);var Y=()=>o.a.createElement("div",null,!J()&&o.a.createElement("div",null,o.a.createElement("button",{className:"form-button homepage-signup-button",onClick:()=>(()=>{const e=new Event("openSignUpModal");window.dispatchEvent(e)})()},"Get Started"))),K=()=>o.a.createElement("div",null,o.a.createElement(h,null),o.a.createElement(S,null),o.a.createElement(Y,null)),Z=n(11),X=n(8),ee=n(35),te=n(284),ne=n(295),ae=n(301),re=n(282),oe=n(281),le=n(283),ie=n(303),ce=n(112),se=n(278),ue=n(279),me=n(177),de=n.n(me),pe=n(280),ge=n(115);function ve(){const e=Object(C.a)(["\n  query($limit: Int, $query: String) {\n    cities(first: $limit, query: $query) {\n      id\n      name\n      state\n    }\n  }\n"]);return ve=function(){return e},e}const be=Object(c.gql)(ve());var fe=n(304),he=n(275);const ye={container:{position:"relative",width:"500px"},formControl:{minWidth:"500px",marginTop:"16px",marginBottom:"8px",height:"16px"}};var Ee=({onCitySelected:e,isMulti:t,fieldLabel:n,placeholder:l,containerWidth:i,containerDisplay:s,initialValue:u})=>{const m=Object(c.useApolloClient)(),d=Object(r.useState)(""),p=Object(Z.a)(d,2),g=p[0],v=p[1],b=Object(r.useState)(t?[]:{}),f=Object(Z.a)(b,2),h=f[0],y=f[1],E=Object(r.useState)([]),O=Object(Z.a)(E,2),j=O[0],S=O[1];Object(r.useEffect)(()=>{g&&g.length>=3?(e=>m.query({query:be,variables:{limit:10,query:e}}))(g).then(({data:e})=>{S(e.cities.map(e=>({value:e.id,label:"".concat(e.name,", ").concat(e.state)})))}):S([])},[g,m]),Object(r.useEffect)(()=>{u&&Array.isArray(u)&&u.length&&y(u.map(e=>({value:e.id,label:"".concat(e.name,", ").concat(e.state)})))},[u]);return o.a.createElement("div",{style:Object(a.a)(Object(a.a)({},ye.container),{},{width:i||"500px",display:s||"block"})},o.a.createElement(he.a,{style:ye.formControl},o.a.createElement(fe.a,{shrink:!0,htmlFor:"age-simple"},n||"City")),o.a.createElement(ge.a,{value:h,defaultValue:null,onChange:t=>{y(t),e(t)},options:j,onInputChange:e=>{v(e)},placeholder:l||"Type in name of city",isClearable:!0,isMulti:!!t,menuIsOpen:j&&j.length,escapeClearsValue:!0}))},Oe=n(299),je=n(302);const Se={formControl:{minWidth:"500px",marginTop:"16px",marginBottom:"8px"}};var xe=({onVenueTypeSelected:e})=>{const t=Object(r.useState)(""),n=Object(Z.a)(t,2),a=n[0],l=n[1],i=Object(c.useQuery)(L),s=i.loading,u=i.error,m=i.data;return s?"Loading...":u?"Error! ".concat(u.message):o.a.createElement(he.a,{style:Se.formControl},o.a.createElement(fe.a,{htmlFor:"age-simple"},"Venue Type"),o.a.createElement(Oe.a,{value:a,onChange:t=>{return n=t.target.value,l(n),void e(n);var n},inputProps:{name:"type",id:"venue-type"}},m.venueTypes.map(e=>o.a.createElement(je.a,{key:e.id,value:e.id},e.name))))};function Ie(){const e=Object(C.a)(["\n  mutation DeleteUserVenueFavorite($venueId: Int!) {\n    deleteUserVenueFavorite(venueId: $venueId) {\n      favorites\n      favoriteByCurrentUser\n    }\n  }\n"]);return Ie=function(){return e},e}function Ce(){const e=Object(C.a)(["\n  mutation CreateUserVenueFavorite($venueId: Int!) {\n    createUserVenueFavorite(venueId: $venueId) {\n      favorites\n      favoriteByCurrentUser\n    }\n  }\n"]);return Ce=function(){return e},e}function Ne(){const e=Object(C.a)(["\n  mutation CreateVenueMutation(\n    $name: String!\n    $streetAddress: String!\n    $zipcode: Int!\n    $cityId: Int!\n    $typeId: Int!\n  ) {\n    createVenue(\n      name: $name\n      streetAddress: $streetAddress\n      zipcode: $zipcode\n      city: { id: $cityId }\n      venueType: { id: $typeId }\n    ) {\n      id\n      name\n      streetAddress\n      venueTypes {\n        name\n      }\n    }\n  }\n"]);return Ne=function(){return e},e}const ke=Object(c.gql)(Ne()),Te=Object(c.gql)(Ce()),we=Object(c.gql)(Ie()),De={appBar:{position:"relative"},title:{margin:"0 auto"},body:{margin:"0 auto"},input:{minWidth:"500px"}},Ve={name:"",type:{id:null},streetAddress:"",zipcode:"",lat:"",lng:"",city:{}};var qe=({open:e,toggleDialog:t,onCreatedVenue:n})=>{const l=Object(c.useMutation)(ke,{onError(e){console.log("error",e)},onCompleted(e){n()},refetchQueries:[{query:U}],awaitRefetchQueries:!0}),i=Object(Z.a)(l,1)[0],s=Object(r.useState)(Object(a.a)({},Ve)),u=Object(Z.a)(s,2),m=u[0],d=u[1],p=Object(r.useState)("Please enter information about a venue"),g=Object(Z.a)(p,2),v=g[0],b=g[1],f=e=>t=>{d(Object(a.a)(Object(a.a)({},m),{},{[e]:t.target.value}))};return o.a.createElement(ae.a,{open:e,onClose:t,fullScreen:!0,"aria-labelledby":"form-dialog-title"},o.a.createElement(se.a,{style:De.appBar},o.a.createElement(ue.a,null,o.a.createElement(pe.a,{edge:"start",color:"inherit",onClick:t,"aria-label":"close"},o.a.createElement(de.a,null)))),o.a.createElement(oe.a,{style:De.title},"Add New Destination"),o.a.createElement(re.a,{style:De.body},o.a.createElement(le.a,null,v),o.a.createElement(ie.a,{id:"venue-name",label:"Venue name",value:m.name,onChange:f("name"),margin:"normal",style:De.input}),o.a.createElement("br",null),o.a.createElement(xe,{onVenueTypeSelected:e=>{d(Object(a.a)(Object(a.a)({},m),{},{type:{id:e}}))}}),o.a.createElement("br",null),o.a.createElement(ie.a,{id:"venue-street-address",name:"street-address",label:"Street address",value:m.streetAddress,onChange:f("streetAddress"),margin:"normal",autoComplete:"shipping street-address",style:De.input}),o.a.createElement(Ee,{onCitySelected:e=>{e&&e.value?d(Object(a.a)(Object(a.a)({},m),{},{city:{id:e.value}})):d(Object(a.a)(Object(a.a)({},m),{},{city:{}}))}}),o.a.createElement(ce.a,{customInput:ie.a,id:"venue-zipcode",name:"zipcode",label:"Zipcode",value:m.zipcode,onChange:f("zipcode"),margin:"normal",style:De.input,autoComplete:"postal-code",format:"#####"}),o.a.createElement("div",null,o.a.createElement(te.a,{color:"primary",onClick:()=>{(({name:e,type:t,streetAddress:n,city:a,zipcode:r})=>{let o={name:!1,type:!1,streetAddress:!1,city:!1,zipcode:!1};return e&&e.length>=2&&(o.name=!0),t&&t.id&&(o.type=!0),n&&n.length>=2&&(o.streetAddress=!0),a&&a.id&&(o.city=!0),r&&!isNaN(parseInt(r))&&(o.zipcode=!0),-1===Object.values(o).indexOf(!1)})(m)?i({variables:{name:m.name,typeId:m.type.id,streetAddress:m.streetAddress,zipcode:parseInt(m.zipcode),cityId:m.city.id}}).then(e=>{d(Object(a.a)({},Ve)),t()}):b("Please enter valid venue information")}},"Create venue"))))},$e=n(178),Fe=n.n($e),Ae=n(298),Be=n(286);var Me=Object(X.a)({appBar:{boxShadow:"none",float:"left",width:"300px"},tabIndicator:{backgroundColor:"#ffffff"}})(({classes:e,venues:t,venueTypeFilter:n,onSetVenueTypeFilter:a})=>o.a.createElement(o.a.Fragment,null,o.a.createElement(Fe.a,{position:"static",className:e.appBar},o.a.createElement(Ae.a,{value:n,onChange:(e,t)=>{a(t)},classes:{indicator:e.tabIndicator},orientation:"vertical",variant:"scrollable",scrollButtons:"auto"},o.a.createElement(Be.a,{label:"all",value:"all"}),(e=>{let t={};for(let n=0;n<e.length;n++)e[n].venueTypes&&e[n].venueTypes.length&&(t[e[n].venueTypes[0].name]?t[e[n].venueTypes[0].name].venues.push(e[n]):t[e[n].venueTypes[0].name]={type:{id:e[n].venueTypes[0].id,name:e[n].venueTypes[0].name},venues:[e[n]]});return Object.keys(t)})(t).sort().map((e,t)=>o.a.createElement(Be.a,{label:e,value:e,key:t})))))),Ue=n(287),Le=n(288),We=n(289),ze=n(290),Pe=n(291),Re=n(292),Qe=n(293),_e=n(294);const He=e=>{const t="".concat(e.streetAddress,", ").concat(e.city,", ").concat(e.state," ").concat(e.zipcode);return"https://maps.google.com/?q=".concat(encodeURIComponent(t))},Ge=e=>"".concat(e.city,", ").concat(e.state),Je=(e,t=", ",n="")=>e?"raw"===n?"".concat(e.streetAddress).concat(t).concat(Ge(e)," ").concat(e.zipcode):o.a.createElement("span",null,e.streetAddress,t,Ge(e)," ",e.zipcode):"";var Ye=Object(X.a)({"@global":{".venueItem":{border:"1px solid #eee",borderRadius:"8px",marginTop:"5px",marginBottom:"5px",padding:"15px",width:"49%",display:"inline-block","&:nth-child(odd)":{marginRight:"10px"}},".venueItemTitle":{display:"block",fontSize:"18px",fontWeight:500,lineHeight:1.6,color:"#333333",textDecoration:"none","&:hover":{textDecoration:"underline"}},".venueItemDescription":{},".venueItemTypeBadge":{display:"inline-block",padding:"1px 5px",backgroundColor:"#2196f3",color:"#fff",borderRadius:"3px",height:"22px"},".venueItemTypeBadgeText":{marginLeft:"20px",marginTop:"3px",textTransform:"uppercase",fontSize:"11px",fontWeight:600,minWidth:"75px",textAlign:"center"},".venueItemLocation":{textTransform:"uppercase",fontSize:"11px",fontWeight:600,textDecoration:"none",float:"right",marginTop:"4px",color:"#666"},".venueIcon":{float:"left",width:"15px",height:"auto",marginRight:"5px",position:"relative",top:"2px"},".venueUnlike":{float:"right"}}})(e=>{const t=e.venue,n=e.showDeleteFavoriteButton,a=e.onDeleteFavoriteCallback,r=Object(c.useMutation)(we,{onError(e){console.log("error",e)},update:(e,{data:{deleteUserVenueFavorite:t}})=>{i(e,t)},onCompleted:()=>{a()},refetchQueries:[{query:U}],awaitRefetchQueries:!0}),l=Object(Z.a)(r,1)[0],i=(e,n)=>{try{let a=e.readQuery({query:M,variables:{venueSlug:t.slug}});a.venueBySlug.venueStats=n,e.writeQuery({query:M,variables:{venueSlug:t.slug},data:a})}catch(a){}};return o.a.createElement("div",{className:"venueItem"},n&&o.a.createElement("button",{onClick:()=>{l({variables:{venueId:t.id}})},className:"venueUnlike"},"Unlike"),o.a.createElement(ee.b,{to:p.venuePath(t.slug),className:"venueItemTitle"},t.name),o.a.createElement("div",{className:"venueItemDescription"},o.a.createElement("div",{className:"venueItemTypeBadge"},((e,t)=>{let n;switch(e.venueTypes[0].name){case"restaurant":n=o.a.createElement(Ue.a,{className:t});break;case"museum":n=o.a.createElement(Le.a,{className:t});break;case"zoo":n=o.a.createElement(We.a,{className:t});break;case"hiking trail":n=o.a.createElement(ze.a,{className:t});break;case"outdoor park":n=o.a.createElement(Pe.a,{className:t});break;case"camp site":n=o.a.createElement(Re.a,{className:t});break;case"outdoor playground":n=o.a.createElement(Qe.a,{className:t});break;default:n=o.a.createElement(_e.a,{className:t})}return n})(t,"venueIcon"),o.a.createElement("div",{className:"venueItemTypeBadgeText"},t.venueTypes&&t.venueTypes.length?"".concat(t.venueTypes[0].name):"")),o.a.createElement("a",{href:He(t),target:"_blank",rel:"noopener noreferrer",className:"venueItemLocation"},Ge(t))))});var Ke=Object(X.a)({"@global":{".venueList":{marginLeft:"320px"}}})(({currentDashboardSection:e,isFavoritesDashboardSection:t,externalTriggerVenueRefresh:n})=>{const a=Object(c.useApolloClient)(),l=Object(r.useState)("all"),i=Object(Z.a)(l,2),s=i[0],u=i[1],m=Object(r.useState)([]),d=Object(Z.a)(m,2),p=d[0],g=d[1],v=Object(r.useState)(!0),b=Object(Z.a)(v,2),f=b[0],h=b[1];Object(r.useEffect)(()=>{a.query({query:U}).then(({data:e})=>{g(t?e.me.favoriteVenues:e.me.venues)}),u("all")},[e,f,n,t,a]);const y=()=>{h(!f)};return o.a.createElement(r.Fragment,null,o.a.createElement(Me,{venues:p,onSetVenueTypeFilter:u,venueTypeFilter:s}),o.a.createElement("div",{className:"venueList"},p.filter(e=>"all"===s||e.venueTypes[0].name===s).map(e=>o.a.createElement(Ye,{key:e.id,venue:e,showDeleteFavoriteButton:t,onDeleteFavoriteCallback:y}))))});function Ze(){const e=Object(C.a)(["\n  mutation UpdateCurrentUserFeedConfigMutation(\n    $cityIds: String\n    $venueTypeIds: String\n  ) {\n    updateUserFeedConfig(cityIds: $cityIds, venueTypeIds: $venueTypeIds) {\n      cityIds\n      venueTypeIds\n    }\n  }\n"]);return Ze=function(){return e},e}function Xe(){const e=Object(C.a)(["\n  mutation LoginMutation($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        id\n        firstName\n        lastName\n        email\n      }\n    }\n  }\n"]);return Xe=function(){return e},e}function et(){const e=Object(C.a)(["\n  mutation SignupMutation(\n    $email: String!\n    $password: String!\n    $firstName: String!\n    $lastName: String!\n  ) {\n    signup(\n      email: $email\n      password: $password\n      firstName: $firstName\n      lastName: $lastName\n    ) {\n      token\n      user {\n        id\n        firstName\n        lastName\n        email\n      }\n    }\n  }\n"]);return et=function(){return e},e}const tt=Object(c.gql)(et()),nt=Object(c.gql)(Xe()),at=Object(c.gql)(Ze());var rt=Object(X.a)({"@global":{".feedItem":{borderBottom:"1px solid #eee",marginTop:"5px",marginBottom:"5px",padding:"15px"},".feedItemTitle":{fontWeight:600,color:"#000",textDecoration:"none",fontSize:"15px","&:hover":{textDecoration:"underline"}},".feedItemSubtitle":{fontSize:"12px"}}})(({venue:e})=>{return o.a.createElement("div",{className:"feedItem"},o.a.createElement(ee.b,{to:p.venuePath(e.slug),className:"feedItemTitle"},e.name),o.a.createElement("div",{className:"feedItemSubtitle"},"in ",Ge(e),e.creator&&o.a.createElement(r.Fragment,null,o.a.createElement("br",null),"added ",(e=>{const t=new Date(e),n=((new Date).getTime()-t.getTime())/1e3;let a;return a=n<=60?"now":n<90?Math.round(n/60)+" minute ago":n<=3600?Math.round(n/60)+" minutes ago":n<5400?Math.round(n/3600)+" hour ago":n<=86400?Math.round(n/3600)+" hours ago":"on "+t.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),a})(e.createdAt)," by \xa0",o.a.createElement(ee.b,{to:p.userProfilePath(e.creator.id)},(t=e.creator)&&t.firstName&&t.lastName?"".concat(t.firstName," ").concat(t.lastName[0],"."):""))));var t});const ot={container:{position:"relative",width:"350px",display:"inline-block"},formControl:{minWidth:"500px",marginTop:"16px",marginBottom:"8px",height:"16px"}};var lt=({initialValue:e,onVenueTypeSelected:t})=>{const n=Object(c.useApolloClient)(),a=Object(r.useState)([]),l=Object(Z.a)(a,2),i=l[0],s=l[1],u=Object(r.useState)([]),m=Object(Z.a)(u,2),d=m[0],p=m[1];Object(r.useEffect)(()=>{n.query({query:L}).then(({data:e})=>{p(e.venueTypes.map(e=>({value:e.id,label:e.name})))})},[n]),Object(r.useEffect)(()=>{if(d&&d.length&&e){const t=e.split(",").map(e=>parseInt(e));s(d.filter(e=>t.includes(e.value)))}},[d,e]);return o.a.createElement("div",{style:ot.container},o.a.createElement(he.a,{style:ot.formControl},o.a.createElement(fe.a,{shrink:!0,htmlFor:"age-simple"},"Venue type")),o.a.createElement(ge.a,{value:i,defaultValue:null,onChange:e=>{s(e),t(e)},options:d,placeholder:"Select venue type",isClearable:!0,isMulti:!0,isSearchable:!1,escapeClearsValue:!0}))};var it=({feedConfiguration:e,onFeedConfigurationUpdated:t})=>{const n=Object(r.useState)(),a=Object(Z.a)(n,2),l=a[0],i=a[1],c=Object(r.useState)(),s=Object(Z.a)(c,2),u=s[0],m=s[1];Object(r.useEffect)(()=>{i(e.cityIds),m(e.venueTypeIds)},[e]);return o.a.createElement("div",null,o.a.createElement(Ee,{onCitySelected:e=>{const n=e?e.map(e=>e.value).join(","):null;i(n),t({cityIds:n,venueTypeIds:u})},fieldLabel:"Filter feed by city",placeholder:"e.g.: San Francisco, CA",isMulti:!0,containerWidth:"350px",containerDisplay:"inline-block",initialValue:e.cityDetails}),o.a.createElement("div",{style:{display:"inline-block",width:"30px",height:"20px"}}),o.a.createElement(lt,{initialValue:u,onVenueTypeSelected:e=>{const n=e?e.map(e=>e.value).join(","):null;m(n),t({venueTypeIds:n,cityIds:l})}}))};var ct=Object(X.a)({"@global":{".feedContainer":{maxWidth:"50%",minWidth:"400px"}}})(()=>{const e=Object(c.useApolloClient)(),t=Object(r.useState)([]),n=Object(Z.a)(t,2),l=n[0],i=n[1],s=Object(r.useState)({cityIds:null,venueTypeIds:null,sort:"DESC",first:25,init:!1}),u=Object(Z.a)(s,2),m=u[0],d=u[1],p=Object(c.useMutation)(at),g=Object(Z.a)(p,1)[0];Object(r.useEffect)(()=>{e.query({query:H}).then(({data:e})=>{d(Object(a.a)({init:!0,sort:"DESC",first:25},e.userFeedConfig))})},[e]),Object(r.useEffect)(()=>{m.init&&e.query({query:z,variables:Object(a.a)({},m)}).then(({data:e})=>{i(e.venues)})},[e,m]);return o.a.createElement("div",null,o.a.createElement(it,{feedConfiguration:m,onFeedConfigurationUpdated:e=>{e&&d(Object(a.a)(Object(a.a)({},e),{},{init:!0})),g({variables:{cityIds:e.cityIds,venueTypeIds:e.venueTypeIds}})}}),o.a.createElement("div",{className:"feedContainer"},l.map(e=>o.a.createElement(rt,{key:e.id,venue:e}))))});var st=e=>class extends o.a.Component{render(){return o.a.createElement("div",{className:"mainContainer"},o.a.createElement("div",{className:"mainContent"},o.a.createElement(e,this.props)))}};const ut={FEED:"feed",FOLLOWED_DESTINATIONS:"followed-destinations",MY_DESTINATIONS:"my-destinations",FAVORITES:"favorites"};var mt=Object(X.a)({"@global":{".sectionHeader":{marginBottom:"30px",display:"flex"},".sectionHeaderTitle":{flexGrow:2,maxWidth:"250px",cursor:"pointer",textDecoration:"none",color:"#666",textAlign:"center",textTransform:"uppercase",borderRadius:"8px",margin:"0px 10px",fontSize:"14px",fontWeight:600,lineHeight:2.5,letterSpacing:"1.3px",border:"1px solid #eee"},".sectionHeaderTitleSelected":{backgroundColor:"#f9f8f8"},".venueList":{marginLeft:"320px"}}})(st(({match:e})=>{const t=p.validatePageSection(e.params.section,ut,ut.FEED),n=Object(r.useState)(!1),a=Object(Z.a)(n,2),l=a[0],i=a[1],c=Object(r.useState)(!0),s=Object(Z.a)(c,2),u=s[0],m=s[1],d=()=>{i(!l)},g=(e,n)=>o.a.createElement(ee.b,{to:p.dashboardPath(n),className:"sectionHeaderTitle ".concat(t===n?"sectionHeaderTitleSelected":"")},e);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"sectionHeader"},g("Feed",ut.FEED),g("My destinations",ut.MY_DESTINATIONS),g("Favorite destinations",ut.FAVORITES),o.a.createElement(te.a,{variant:"outlined",style:{marginLeft:"auto"},onClick:d},o.a.createElement(ne.a,null),"Add Destination"),o.a.createElement(qe,{open:l,toggleDialog:d,onCreatedVenue:()=>m(!u)})),t===ut.FEED?o.a.createElement(ct,null):o.a.createElement(Ke,{currentDashboardSection:t,isFavoritesDashboardSection:t===ut.FAVORITES,externalTriggerVenueRefresh:u}))})),dt=n(179),pt=n.n(dt),gt=e=>{const t=e.venue,n=v("".concat((e=>e.venueTypes[0].image)(t)),"300px");return o.a.createElement("div",{style:n.container},o.a.createElement(g.a,{variant:"h2",style:n.headerText},o.a.createElement("strong",null,t.name)))};n(124);var vt=({venue:e})=>{const t=Object(c.useApolloClient)(),n=Object(r.useState)([]),a=Object(Z.a)(n,2),l=a[0],i=a[1];return Object(r.useEffect)(()=>{t.query({query:W,variables:{venueId:e.id,limit:5,radius:10}}).then(({data:e})=>{i(e.similarVenues)})},[e,t]),o.a.createElement("div",{className:"sidebar-module",style:{display:l&&l.length?"block":"none"}},o.a.createElement("h3",null,"Similar places near by"),o.a.createElement("div",{className:"sidebar-module-body"},l&&l.map(e=>o.a.createElement("div",{key:e.id},o.a.createElement(ee.b,{to:p.venuePath(e.slug)},e.name)))))};var bt=({venue:e})=>o.a.createElement("div",{className:"sidebar-module"},o.a.createElement("h3",null,"Location"),o.a.createElement("div",{className:"sidebar-module-body"},o.a.createElement("a",{href:"".concat("https://maps.google.com/?daddr=").concat(encodeURIComponent(Je(e,",","raw"))),target:"_blank",rel:"noopener noreferrer"},Je(e,o.a.createElement("br",null))))),ft=({venueId:e,venueSlug:t,favoriteByCurrentUser:n,onUpdateFavoritesStats:r})=>{const l=[{query:U}],i=(e,n)=>{let o=e.readQuery({query:M,variables:{venueSlug:t}});r(n),e.writeQuery({query:M,variables:{venueSlug:t},data:Object(a.a)(Object(a.a)({},o),{},{venueBySlug:Object(a.a)(Object(a.a)({},o.venueBySlug),{},{venueStats:Object(a.a)({},n)})})})},s=Object(c.useMutation)(Te,{onError(e){console.log("error",e)},update:(e,{data:{createUserVenueFavorite:t}})=>{i(e,t)},refetchQueries:l}),u=Object(Z.a)(s,1)[0],m=Object(c.useMutation)(we,{onError(e){console.log("error",e)},update:(e,{data:{deleteUserVenueFavorite:t}})=>{i(e,t)},refetchQueries:l}),d=Object(Z.a)(m,1)[0];return o.a.createElement(o.a.Fragment,null,n?o.a.createElement("span",null,"\u2605\xa0",o.a.createElement("button",{onClick:t=>{t.preventDefault(),d({variables:{venueId:e}})}}," ","Unlike")):o.a.createElement("button",{href:"#",onClick:t=>{t.preventDefault(),u({variables:{venueId:e}})}},"Like"))};const ht={sectionHeader:{marginBottom:"15px"},columnWrapper:{display:"flex"},mainColumn:{flexGrow:3,maxWidth:"800px"},sideColumm:{flexGrow:1,marginTop:"-20px"}};var yt=({match:e})=>{const t=e.params.venueSlug,n=Object(r.useState)(null),l=Object(Z.a)(n,2),i=l[0],s=l[1],u=Object(r.useState)(""),m=Object(Z.a)(u,2),d=m[0],p=m[1],v=Object(c.useQuery)(M,{variables:{venueSlug:t}}),b=v.loading,f=v.error,h=v.data;Object(r.useEffect)(()=>{h&&(s(h.venueBySlug),p((e=>e.venueTypes[0].name||"venue")(h.venueBySlug)))},[h]);const y=e=>{s(Object(a.a)(Object(a.a)({},i),{},{venueStats:Object(a.a)({},e)}))};return b?null:f?"Error! ".concat(f):t?i&&o.a.createElement("div",null,o.a.createElement(gt,{venue:i}),o.a.createElement("div",{className:"mainContainer"},o.a.createElement("div",{className:"mainContent"},o.a.createElement(g.a,{variant:"h5",style:ht.sectionHeader},i.name),o.a.createElement("div",{style:ht.columnWrapper},o.a.createElement("div",{style:ht.mainColumn},o.a.createElement("div",null,"Liked by"," ",o.a.createElement("strong",null,o.a.createElement(ce.a,{value:i.venueStats.favorites,thousandSeparator:!0,displayType:"text"})," ",pt()("person",i.venueStats.favorites)),". \xa0",J()&&o.a.createElement(ft,{venueId:i.id,venueSlug:t,favoriteByCurrentUser:i.venueStats.favoriteByCurrentUser,onUpdateFavoritesStats:y})),o.a.createElement("br",null),i.description&&o.a.createElement("span",null,i.description),"This ",d," is located in ",i.city,", ",i.state,"."),o.a.createElement("div",{style:ht.sideColumm},o.a.createElement(bt,{venue:i}),o.a.createElement(vt,{venue:i})))))):o.a.createElement("div",null,"Venue not found.")},Et=n(297),Ot=n(285),jt=n(181),St=n(129),xt=n.n(St),It=Object(jt.a)({palette:{primary:{main:xt.a[500]},background:{default:"#efefef"}},typography:{useNextVariants:!0}}),Ct=n(80),Nt=n.n(Ct),kt=n(180),Tt=n.n(kt),wt=n(182),Dt=n(67),Vt=n.n(Dt),qt=n(116),$t=n(56),Ft=n(296);class At extends r.Component{constructor(...e){var t;super(...e),t=this,this.state={login:void 0===this.props.login||this.props.login,email:"",password:"",firstName:"",lastName:"",errorMessage:null},this._update=function(){var e=Object(qt.a)(Vt.a.mark((function e(t,n){return Vt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.writeQuery({query:_,data:{currentUser:Object(a.a)(Object(a.a)({},n.user),{},{token:n.token})}});case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this._confirm=function(){var e=Object(qt.a)(Vt.a.mark((function e(n){var a,r,o;return Vt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.state.error=null,a=t.state.login?n.login:n.signup,r=a.token,o=a.user,t._saveUserData(r,o),document.location=p.dashboardPath("");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._saveUserData=(e,t)=>{((e,t)=>{localStorage.setItem("auth-token",e),localStorage.setItem("user-info",JSON.stringify(t))})(e,t)},this._error=function(){var e=Object(qt.a)(Vt.a.mark((function e({graphQLErrors:n}){return Vt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.state.login&&n&&n[0]&&n[0].message?t.setState({errorMessage:n[0].message}):n&&n[0]&&n[0].extensions.exception.errors[0].message&&t.setState({errorMessage:n[0].extensions.exception.errors[0].message});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}componentDidUpdate(e){e.open!==this.props.open&&this.setState({errorMessage:null}),e.login!==this.props.login&&this.setState({login:this.props.login})}render(){const e=this.state,t=e.login,n=e.email,a=e.password,r=e.firstName,l=e.lastName,i=e.errorMessage,c=this.props.classes;return o.a.createElement(ae.a,{open:this.props.open,onClose:this.props.toggleDialog,maxWidth:"sm",fullWidth:!0,"aria-labelledby":"form-dialog-title"},o.a.createElement(oe.a,{id:"login-dialog-title"},t?"Login":"Sign Up"),o.a.createElement(re.a,null,i&&o.a.createElement(le.a,{className:c.dialogMainError},i),o.a.createElement("div",{className:c.dialogMainContent},!t&&o.a.createElement("span",null,o.a.createElement(ie.a,{id:"firstName",label:"First name",error:!!i,value:r,onChange:e=>this.setState({firstName:e.target.value}),margin:"normal",fullWidth:!0}),o.a.createElement(ie.a,{id:"lastName",label:"Last name",error:!!i,value:l,onChange:e=>this.setState({lastName:e.target.value}),margin:"normal",fullWidth:!0})),o.a.createElement(ie.a,{id:"email",label:"Email",error:!!i,value:n,onChange:e=>this.setState({email:e.target.value}),margin:"normal",fullWidth:!0}),o.a.createElement(ie.a,{id:"password",label:"Password",error:!!i,type:"password",autoComplete:"current-password",onChange:e=>this.setState({password:e.target.value}),margin:"normal",fullWidth:!0}))),o.a.createElement(Ft.a,null,o.a.createElement(te.a,{onClick:()=>this.setState({login:!t,errorMessage:null}),color:"primary",style:{marginRight:"auto"}},t?"need to create an account?":"already have an account?"),o.a.createElement(te.a,{onClick:this.props.toggleDialog,color:"primary"},"Cancel"),o.a.createElement($t.Mutation,{mutation:t?nt:tt,variables:{email:n,password:a,firstName:r,lastName:l},update:(e,{data:n})=>this._update(e,t?n.login:n.signup),onCompleted:e=>this._confirm(e),onError:e=>this._error(e)},e=>o.a.createElement(te.a,{color:"primary",onClick:e},t?"login":"create account"))))}}var Bt=Object(m.f)(Object(X.a)({dialogMainContent:{display:"flex",justifyContent:"center",flexDirection:"column"},dialogMainError:{textAlign:"center"}})(At));var Mt,Ut=(Mt=Object(m.f)(({currentUser:e,className:t})=>{const n=Object(r.useState)(!1),a=Object(Z.a)(n,2),l=a[0],i=a[1],c=Object(r.useState)(!0),s=Object(Z.a)(c,2),u=s[0],m=s[1];Object(r.useEffect)(()=>{var e;e=()=>{(void 0).setState({dialogOpen:!0,login:!1}),i(!0),m(!1)},window.addEventListener("openSignUpModal",()=>e())});const d=()=>{i(!l),m(!0)};return J()?o.a.createElement(g.a,{variant:"button",color:"inherit",className:t},(e=>e&&e.id?"Welcome, ".concat(e.firstName):"")(e)):o.a.createElement("span",null,o.a.createElement(te.a,{onClick:d,className:t,color:"inherit"},"Login"),o.a.createElement(Bt,{open:l,login:u,toggleDialog:d}))}),Object(I.a)(Object(x.graphql)(_,{props:({data:{currentUser:e}})=>({currentUser:e})}))(Mt));class Lt extends r.Component{constructor(...e){super(...e),this.state={anchorEl:null},this.toggleMenu=e=>{this.state.anchorEl?this.setState({anchorEl:null}):this.setState({anchorEl:e.currentTarget})}}render(){const e=this.props.classes;return o.a.createElement("div",{className:e.root},o.a.createElement(se.a,{position:"fixed",style:{background:"transparent",boxShadow:"none"}},o.a.createElement(ue.a,{variant:"dense",className:e.container},o.a.createElement(g.a,{className:e.logoText,variant:"button",color:"inherit"},"KidTrip"),o.a.createElement(g.a,{variant:"h6",color:"inherit",className:e.grow}),o.a.createElement(Ut,{className:e.loginButton}),J()&&o.a.createElement("span",{className:e.menuWrapper},o.a.createElement(pe.a,{onClick:this.toggleMenu,className:e.menuButton,color:"inherit","aria-label":"Menu"},o.a.createElement(Tt.a,null)),o.a.createElement(wt.a,{id:"simple-menu",anchorEl:this.state.anchorEl,open:Boolean(this.state.anchorEl),onClose:this.toggleMenu},o.a.createElement(je.a,{component:ee.b,to:p.home,onClick:this.toggleMenu},"Home"),o.a.createElement(je.a,{component:ee.b,to:p.dashboardPath(""),onClick:this.toggleMenu},"Dashboard"),o.a.createElement(je.a,{onClick:this.toggleMenu},"My account"),o.a.createElement(je.a,{onClick:()=>{localStorage.removeItem("auth-token"),localStorage.removeItem("user-info"),this.props.history.push("/")}},"Logout"))))))}}var Wt=Object(m.f)(Lt);const zt={root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},menuWrapper:{marginLeft:15}},Pt=Object(a.a)(Object(a.a)({},zt),{},{container:{borderBottom:"1px solid",borderBottomColor:Nt.a[100],backgroundColor:"white"},grow:Object(a.a)(Object(a.a)({},zt.grow),{},{color:Nt.a[500]}),menuButton:Object(a.a)(Object(a.a)({},zt.menuButton),{},{color:Nt.a[500]}),loginButton:{color:Nt.a[500]},logoText:{color:Nt.a[500]}});var Rt=Object(m.f)(e=>{const t=d(e.location)?zt:Pt,n=Object(X.a)(t)(Wt);return o.a.createElement(n,null)});var Qt=({title:e,venues:t})=>(console.log("here",t),o.a.createElement("div",{className:"sidebar-module"},o.a.createElement("h3",null,e),o.a.createElement("div",{className:"sidebar-module-body"},t.map(e=>o.a.createElement(rt,{key:e.id,venue:e})))));n(245);var _t=st(({match:e})=>{const t=e.params.userId,n=Object(r.useState)(null),l=Object(Z.a)(n,2),i=l[0],s=l[1],u=Object(c.useQuery)(G,{variables:{publicId:t}}).data;if(Object(r.useEffect)(()=>{u&&s(u.userProfile)},[u]),t){if(i){const e=v(i.config.headerImageUrl,"300px");return o.a.createElement("div",null,o.a.createElement("div",{style:Object(a.a)(Object(a.a)({},e.container),{},{borderRadius:"8px"})},o.a.createElement("div",{className:"headerUserInfo"},o.a.createElement("strong",null,i.user.firstName,i.user.lastName&&i.user.lastName.length&&o.a.createElement(r.Fragment,null,"\xa0",i.user.lastName[0]),"."),"\xa0\xb7\xa0",o.a.createElement("span",null,i.stats.created," added"),"\xa0\xb7\xa0",o.a.createElement("span",null,i.stats.favorited," liked"))),o.a.createElement("div",{className:"contentContainer"},o.a.createElement("div",{className:"contentContainerMain"},"More to come..."),o.a.createElement("div",{className:"contentContainerSide"},i.recentAddedVenues&&i.recentAddedVenues.length&&o.a.createElement(Qt,{title:"Recently added",venues:i.recentAddedVenues}),i.recentFavoriteVenues&&i.recentFavoriteVenues.length&&o.a.createElement(Qt,{title:"Recently liked",venues:i.recentFavoriteVenues}))))}return!1}return o.a.createElement("div",null,"User profile not found.")});class Ht extends r.Component{render(){const e=this.props,t=e.classes,n=e.location;return o.a.createElement(Ot.a,{theme:It},o.a.createElement("div",null,o.a.createElement(Et.a,null),o.a.createElement(Rt,null),!d(n)&&o.a.createElement("div",{className:t.appBarSpacer}),o.a.createElement(m.c,null,o.a.createElement(m.a,{exact:!0,path:p.home,component:K}),o.a.createElement(m.a,{path:p.dashboard,component:mt}),o.a.createElement(m.a,{path:p.venue,component:yt}),o.a.createElement(m.a,{path:p.userProfile,component:_t}))))}}var Gt=Object(m.f)(Object(X.a)({"@global":{body:{fontFamily:"Roboto, Helvetica, Arial, sans-serif",fontWeight:400},".mainContainer":{display:"flex",justifyContent:"center"},".mainContent":{maxWidth:"1200px",flexGrow:"1",margin:"25px",backgroundColor:"#ffffff",padding:"25px",borderRadius:"8px"}},appBarSpacer:{height:"49px"}})(Ht));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(246);const Jt=localStorage.getItem("auth-token"),Yt=new c.HttpLink({uri:"http://api.mykidtrip.com",credentials:"same-origin",headers:{authorization:Jt?"Bearer ".concat(Jt):""}}),Kt=new c.ApolloClient({link:c.ApolloLink.from([Object(u.a)(({graphQLErrors:e,networkError:t})=>{e&&e.map(({message:e,locations:t,path:n})=>console.log("[GraphQL error]: Message: ".concat(e,", Location: ").concat(t,", Path: ").concat(n))),t&&console.log("[Network error]: ".concat(t))}),Yt]),cache:new s.InMemoryCache,resolvers:{}});Kt.writeQuery({query:_,data:{currentUser:Object(a.a)({},(()=>{const e=localStorage.getItem("user-info");return e?JSON.parse(e):{__typename:"User",id:null,firstName:null,lastName:null,email:null}})())}}),i.a.render(o.a.createElement(ee.a,null,o.a.createElement(c.ApolloProvider,{client:Kt},o.a.createElement(Gt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[203,1,2]]]);
//# sourceMappingURL=main.2d4163e7.chunk.js.map