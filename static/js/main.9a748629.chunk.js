(this["webpackJsonpreact-frontend-dev-portfolio"]=this["webpackJsonpreact-frontend-dev-portfolio"]||[]).push([[0],{19:function(e,a,t){e.exports=t.p+"static/media/JoseLemaResume.2e8cada6.pdf"},35:function(e,a,t){},36:function(e,a,t){},41:function(e,a,t){e.exports=t(61)},46:function(e,a,t){},47:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(14),s=t.n(r),l=(t(46),t(4)),c=t(5),o=t(8),m=t(7),d=t(25),u=t.n(d),p=(t(47),t(18)),h=t(24),f=t.n(h),g=t(19),E=t.n(g),v=(t(49),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).state={checked:!1},e.onThemeSwitchChange=e.onThemeSwitchChange.bind(Object(p.a)(e)),e}return Object(c.a)(t,[{key:"onThemeSwitchChange",value:function(e){this.setState({checked:e}),this.setTheme()}},{key:"setTheme",value:function(){var e=document.body,a="dark"===e.getAttribute("data-theme")?"light":"dark";e.setAttribute("data-theme",a)}},{key:"handleBurgerMenuClick",value:function(){var e=document.querySelector(".burger"),a=document.querySelector("#"+e.dataset.target);e.addEventListener("click",(function(){e.classList.toggle("is-active"),a.classList.toggle("is-active")}))}},{key:"render",value:function(){return console.log(this),i.a.createElement("div",null,i.a.createElement("nav",{className:"navbar is-black is-spaced",role:"navigation","aria-label":"main navigation"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement("div",{onClick:this.handleBurgerMenuClick,role:"button",className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}))),i.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu is-size-3 is-family-sans-serif"},i.a.createElement("div",{id:"nav-home",className:"navbar-start"},i.a.createElement("a",{href:"#nav-home",className:"navbar-item"},"Home"),i.a.createElement("a",{href:"#about",className:"navbar-item"},"About Me"),i.a.createElement("a",{href:"#skills",className:"navbar-item"},"Skills"),i.a.createElement("a",{href:"#portfolio",className:"navbar-item"},"Projects"),i.a.createElement("a",{href:"#resume",className:"navbar-item"},"Experience"),i.a.createElement("a",{href:E.a,className:"navbar-item",target:"blank"},"Resume"),i.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},i.a.createElement("div",{className:"navbar-link"},"Let's Connect"),i.a.createElement("div",{className:"navbar-dropdown is-size-4"},i.a.createElement("a",{className:"navbar-item",href:"mailto:srjorgemaciel2002@gmail.com",target:"_blank"},"Email"),i.a.createElement("a",{className:"navbar-item",href:"https://www.linkedin.com/in/josemlema/",target:"_blank"},"LinkedIn"),i.a.createElement("a",{className:"navbar-item",href:"https://github.com/mauilema",target:"_blank"},"Github"))),i.a.createElement("div",null,i.a.createElement(f.a,{checked:this.state.checked,onChange:this.onThemeSwitchChange,offColor:"#baaa80",onColor:"#353535",className:"react-switch mx-auto dark-mode-toggle",width:90,height:40,uncheckedIcon:i.a.createElement("span",{className:"iconify","data-icon":"mi:moon","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"20px",color:"#353239"}}),checkedIcon:i.a.createElement("span",{className:"iconify","data-icon":"emojione-v1:sun-with-face","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"10px",color:"#353239"}}),id:"icon-switch"}))),i.a.createElement("div",{className:"navbar-end"},i.a.createElement("div",{className:"navbar-item"},i.a.createElement("div",{className:"buttons"},i.a.createElement("a",{className:"button is-light",href:"https://www.linkedin.com/in/josemlema/",target:"_blank"},i.a.createElement("i",{className:"fab fa-linkedin"})),i.a.createElement("a",{className:"button is-light",href:"https://github.com/mauilema",target:"_blank"},i.a.createElement("i",{className:"fab fa-github"}))))))))}}]),t}(n.Component)),b=t(29),y=t(31),N=t.n(y),k=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=a.call.apply(a,[this].concat(i))).titles=[],e}return Object(c.a)(t,[{key:"render",value:function(){var e=this;if(this.props.sharedData){var a=this.props.sharedData.name,t=N()().format("MM-DD-YYYY"),n=["welcome friend!","today's date is ".concat(t),"\xa1hola amigo!","la fecha de hoy es ".concat(t)];this.titles=n.map((function(e){return[e.toLowerCase(),1500]})).flat()}var r=i.a.memo((function(){return i.a.createElement(b.a,{className:"title-styles",steps:e.titles,loop:50})}),(function(e,a){return!0}));return i.a.createElement("header",{id:"home",style:{height:window.innerHeight-140,display:"block"}},i.a.createElement("div",{className:"row aligner",style:{height:"100%"}},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",null,i.a.createElement("h1",{className:"mb-0"},i.a.createElement(b.a,{steps:[a],wrapper:"p"})),i.a.createElement("div",{className:"title-container"},i.a.createElement(r,null))))))}}]),t}(n.Component),w=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.sharedBasicInfo)var e=this.props.sharedBasicInfo.social.map((function(e){return i.a.createElement("span",{key:e.name,className:"m-4"},i.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:e.class})))}));return i.a.createElement("footer",null,i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"social-links"},e),i.a.createElement("div",{className:"copyright py-4 text-center"},i.a.createElement("div",{className:"container"},i.a.createElement("small",null,"Copyright \xa9"," ",this.props.sharedBasicInfo?this.props.sharedBasicInfo.name:"???")))))}}]),t}(n.Component),x=t(26),j=t(32),I=t.n(j),L=t(33),O=t.n(L),S=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.sharedBasicInfo)var e="images/"+this.props.sharedBasicInfo.image,a="images/"+this.props.sharedBasicInfo.polaroidPin;if(this.props.resumeBasicInfo)var t=this.props.resumeBasicInfo.section_name.about,n=this.props.resumeBasicInfo.description_header,r=this.props.resumeBasicInfo.description;return i.a.createElement("section",{id:"about"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{style:{color:"black"}},i.a.createElement("span",null,t)),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",{className:"row center mx-auto mb-5"},i.a.createElement("div",{className:"col-md-10 center"},i.a.createElement("div",{className:"col-md-10 main-content-about-me "},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"175%",lineHeight:"200%"}},i.a.createElement("br",null),i.a.createElement("span",{className:"wave"},n,"!"),i.a.createElement("br",null),i.a.createElement("br",null),r)))),i.a.createElement("div",{className:"col-md-2 mb-5 center"},i.a.createElement("div",{className:"polaroid"},i.a.createElement("span",{style:{cursor:"auto"}},i.a.createElement("div",{id:"polaroidPin"},i.a.createElement("img",{height:"50px",width:"50px",src:a,alt:"Avatar placeholder"})),i.a.createElement("img",{height:"200px",width:"200px",src:e,alt:"Avatar placeholder"}),i.a.createElement(x.Icon,{icon:I.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}}),i.a.createElement(x.Icon,{icon:O.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}})))))))}}]),t}(n.Component),B=t(23),C=(t(57),t(27)),A=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.resumeExperience&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.experience,a=this.props.resumeExperience.map((function(e,a){var t=e.technologies,n=e.mainTech.map((function(e,a){return i.a.createElement(C.a,{pill:!0,className:"main-badge mr-2 mb-2",key:a},e)})),r=t.map((function(e,a){return i.a.createElement(C.a,{pill:!0,className:"experience-badge mr-2 mb-2",key:a},e)}));return i.a.createElement(B.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:e.years,iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:i.a.createElement("i",{className:"fas fa-regular fa-trophy experience-icon"}),key:a},i.a.createElement("div",{style:{textAlign:"left",marginBottom:"4px"}},n),i.a.createElement("h3",{className:"vertical-timeline-element-title",style:{textAlign:"left"}},e.title),i.a.createElement("h4",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left"}},e.company),i.a.createElement("div",{style:{textAlign:"left",marginTop:"15px"}},r))}));return i.a.createElement("section",{id:"resume",className:"pb-5"},i.a.createElement("div",{className:"col-md-12 mx-auto"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{className:"section-title",style:{color:"black"}},i.a.createElement("span",{className:"text-black",style:{textAlign:"center"}},e,i.a.createElement("a",{href:E.a,class:"navbar-item",target:"blank",style:{marginLeft:"45%",width:"fit-content",textDecoration:"inherit",color:"inherit"}},"Resume",i.a.createElement("i",{className:"fas fa-external-link-alt",style:{marginLeft:"10px"}})))))),i.a.createElement("div",{className:"col-md-8 mx-auto"},i.a.createElement(B.VerticalTimeline,null,a,i.a.createElement(B.VerticalTimelineElement,{iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:i.a.createElement("i",{className:"fas fa-hourglass-start mx-auto experience-icon"})}))))}}]),t}(n.Component),D=t(64),_=t(34),$=t.n(_),T=t(35),P=t.n(T),z=t(36),M=t.n(z),R=(t(58),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.technologies,a=this.props.data.images,t=this.props.data.title,n=this.props.data.description,r=this.props.data.url,s=this.props.data.gitHubUrl,l="GitHub",c="N/A Fullstack Academy Private Repo";if(this.props.data.technologies){var o=e.map((function(e,a){return i.a.createElement("li",{className:"list-inline-item mx-3",key:a},i.a.createElement("span",null,i.a.createElement("div",{className:"text-center"},i.a.createElement("i",{className:e.class,style:{fontSize:"300%"}},i.a.createElement("p",{className:"text-center",style:{fontSize:"30%"}},e.name)))))}));if(this.props.data.images)var m=a.map((function(e,a){return i.a.createElement("div",{key:a,"data-src":e})}))}}return i.a.createElement(D.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"modal-inside"}),i.a.createElement("span",{onClick:this.props.onHide,className:"modal-close"},i.a.createElement("i",{className:"fas fa-times fa-3x close-icon"})),i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"col-md-10 mx-auto",style:{paddingBottom:"50px"}},i.a.createElement("div",{className:"slider-tab"},i.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"emojione:red-circle","data-inline":"false",style:{marginLeft:"5px"}})," ","\xa0"," ",i.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:green-circle","data-inline":"false"})),i.a.createElement($.a,{cssModule:[P.a,M.a],animation:"scaleOutAnimation",className:"slider-image"},m)),i.a.createElement("div",{className:"col-md-10 mx-auto"},i.a.createElement("h3",{style:{padding:"5px 5px 0 5px"}},t,r?i.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"link-href"},i.a.createElement("i",{className:"fas fa-external-link-alt",style:{marginLeft:"10px"}})):null),i.a.createElement("p",{className:"modal-description"},n),i.a.createElement("div",{className:"col-md-12 text-center"},i.a.createElement("ul",{className:"list-inline mx-auto"},o)),i.a.createElement("h4",{style:{padding:"5px 5px 0 5px",float:"right"}},l,s?i.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"link-href"},i.a.createElement("i",{className:"fas fa-external-link-alt",style:{marginLeft:"10px"}})):i.a.createElement("h5",null,c)))))}}]),t}(n.Component)),W=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={deps:{},detailsModalShow:!1},n}return Object(c.a)(t,[{key:"render",value:function(){var e=this;if(this.props.resumeProjects&&this.props.resumeBasicInfo)var a=this.props.resumeBasicInfo.section_name.projects,t=this.props.resumeProjects.map((function(a){return i.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4",key:a.title,style:{cursor:"pointer"}},i.a.createElement("span",{className:"portfolio-item d-block"},i.a.createElement("div",{className:"foto",onClick:function(){return t=a,void e.setState({detailsModalShow:!0,deps:t});var t}},i.a.createElement("div",null,i.a.createElement("img",{src:a.images[0],alt:"projectImages",height:"230",style:{marginBottom:0,paddingBottom:0,position:"relative"}}),i.a.createElement("span",{className:"project-date"},a.startDate),i.a.createElement("br",null),i.a.createElement("p",{className:"project-title-settings mt-3"},a.title)))))}));return i.a.createElement("section",{id:"portfolio"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{className:"section-title",style:{color:"black"}},i.a.createElement("span",null,a)),i.a.createElement("div",{className:"col-md-12 mx-auto"},i.a.createElement("div",{className:"row mx-auto"},t)),i.a.createElement(R,{show:this.state.detailsModalShow,onHide:function(){return e.setState({detailsModalShow:!1})},data:this.state.deps})))}}]),t}(n.Component),H=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.sharedSkills&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.skills,a=this.props.sharedSkills.icons.map((function(e,a){return i.a.createElement("li",{className:"list-inline-item mx-3",key:a},i.a.createElement("span",null,i.a.createElement("div",{className:"text-center skills-tile"},i.a.createElement("i",{className:e.class,style:{fontSize:"220%"}},i.a.createElement("p",{className:"text-center",style:{fontSize:"30%",marginTop:"4px"}},e.name)))))}));return i.a.createElement("section",{id:"skills"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{className:"section-title"},i.a.createElement("span",{className:"text-white"},e))),i.a.createElement("div",{className:"col-md-12 text-center"},i.a.createElement("ul",{className:"list-inline mx-auto skill-icon"},a))))}}]),t}(n.Component),F=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this)).state={foo:"bar",resumeData:{},sharedData:{}},n}return Object(c.a)(t,[{key:"applyPickedLanguage",value:function(e,a){this.swapCurrentlyActiveLanguage(a),document.documentElement.lang=e;var t=document.documentElement.lang===window.$primaryLanguage?"res_primaryLanguage.json":"res_secondaryLanguage.json";this.loadResumeFromPath(t)}},{key:"swapCurrentlyActiveLanguage",value:function(e){var a=e===window.$primaryLanguageIconId?window.$secondaryLanguageIconId:window.$primaryLanguageIconId;document.getElementById(e).removeAttribute("filter","brightness(40%)"),document.getElementById(a).setAttribute("filter","brightness(40%)")}},{key:"componentDidMount",value:function(){this.loadSharedData(),this.applyPickedLanguage(window.$primaryLanguage,window.$secondaryLanguageIconId)}},{key:"loadResumeFromPath",value:function(e){u.a.ajax({url:e,dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){alert(t)}})}},{key:"loadSharedData",value:function(){u.a.ajax({url:"portfolio_shared_data.json",dataType:"json",cache:!1,success:function(e){this.setState({sharedData:e}),document.title="".concat(this.state.sharedData.basic_info.name)}.bind(this),error:function(e,a,t){alert(t)}})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(v,null),i.a.createElement(k,{sharedData:this.state.sharedData.basic_info}),i.a.createElement("div",{className:"col-md-12 mx-auto text-center language"},i.a.createElement("div",{onClick:function(){return e.applyPickedLanguage(window.$primaryLanguage,window.$secondaryLanguageIconId)},style:{display:"inline"}},i.a.createElement("span",{className:"iconify language-icon mr-5","data-icon":"emojione-v1:flag-for-united-kingdom","data-inline":"false",id:window.$primaryLanguageIconId})),i.a.createElement("div",{onClick:function(){return e.applyPickedLanguage(window.$secondaryLanguage,window.$primaryLanguageIconId)},style:{display:"inline"}},i.a.createElement("span",{className:"iconify language-icon","data-icon":"emojione-v1:flag-for-spain","data-inline":"false",id:window.$secondaryLanguageIconId}))),i.a.createElement(S,{resumeBasicInfo:this.state.resumeData.basic_info,sharedBasicInfo:this.state.sharedData.basic_info}),i.a.createElement(H,{sharedSkills:this.state.sharedData.skills,resumeBasicInfo:this.state.resumeData.basic_info}),i.a.createElement(W,{resumeProjects:this.state.resumeData.projects,resumeBasicInfo:this.state.resumeData.basic_info}),i.a.createElement(A,{resumeExperience:this.state.resumeData.experience,resumeBasicInfo:this.state.resumeData.basic_info}),i.a.createElement(w,{sharedBasicInfo:this.state.sharedData.basic_info}))}}]),t}(n.Component),U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(60);window.$primaryLanguage="en",window.$secondaryLanguage="pl",window.$primaryLanguageIconId="primary-lang-icon",window.$secondaryLanguageIconId="secondary-lang-icon",s.a.render(i.a.createElement(F,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");U?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Y(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Y(a,e)}))}}()}},[[41,1,2]]]);
//# sourceMappingURL=main.9a748629.chunk.js.map