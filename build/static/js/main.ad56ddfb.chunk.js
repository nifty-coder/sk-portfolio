(this["webpackJsonpportfolio-public"]=this["webpackJsonpportfolio-public"]||[]).push([[0],{14:function(e,t,c){e.exports={Image:"BasicInfo_Image__3MoKz",Icon:"BasicInfo_Icon__r9lAY",AboutMe:"BasicInfo_AboutMe__Ceclp",BasicInfo:"BasicInfo_BasicInfo__1Y49I"}},33:function(e,t,c){e.exports={Icon:"Certificates_Icon__3yr-U",Certificates:"Certificates_Certificates__2dTzR",Line:"Certificates_Line__26wRh"}},34:function(e,t,c){},36:function(e,t,c){e.exports={Packages:"Packages_Packages__1bPw0",Line:"Packages_Line__7MvKU",Icon:"Packages_Icon__2YTVR"}},39:function(e,t,c){},40:function(e,t,c){},42:function(e,t,c){e.exports={Card:"Card_Card__3QR8n"}},56:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var r=c(41),a=c(35),n=c(6),s=c(5),o=c(3),i=c.n(o),l=c(1),j=c.n(l),b=c(4),d=c(42),u=c.n(d),h=c(0),O=function(e){return Object(h.jsx)("div",{className:u.a.Card,children:e.children})},p=c(14),m=c.n(p),x=c.p+"static/media/myself.0926009b.jpeg",f=c.p+"static/media/mail.6cd1b25e.png",g=c.p+"static/media/education.2be0f704.jpg",I=c.p+"static/media/location.2289fdf6.png",v=c.p+"static/media/info.d3756e22.png",T=function(){var e=Object(n.a)(i.a.mark((function e(t){var c,r,a,n,s,o=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=o.length>1&&void 0!==o[1]?o[1]:"GET",r=o.length>2&&void 0!==o[2]?o[2]:null,a=o.length>3&&void 0!==o[3]?o[3]:{},e.prev=3,e.next=6,fetch("https://sk-portfolio-api.onrender.com/api"+t,{method:c,body:r,headers:a});case 6:return n=e.sent,e.next=9,n.json();case 9:if(s=e.sent,n.ok){e.next=12;break}throw new Error(s.message);case 12:return e.abrupt("return",s);case 15:return e.prev=15,e.t0=e.catch(3),e.abrupt("return",e.t0);case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){},C=c(43),N=c(10),A=c.n(N),k=c(58),Q=(c(56),function(e){return A.a.createPortal(Object(h.jsx)("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}),B=(c(39),function(e){var t=Object(h.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[Object(h.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:Object(h.jsx)("h2",{children:e.header})}),Object(h.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()},children:[Object(h.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),Object(h.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return A.a.createPortal(t,document.getElementById("modal-hook"))}),P=function(e){return Object(h.jsxs)(j.a.Fragment,{children:[e.show&&Object(h.jsx)(Q,{onClick:e.onCancel}),Object(h.jsx)(k.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:Object(h.jsx)(B,Object(C.a)({},e))})]})},S=function(e){return Object(h.jsx)(P,{onCancel:e.onClear,header:"An Error Occurred!",show:e.show,footer:Object(h.jsx)("button",{onClick:e.onClear,children:"Okay"}),children:Object(h.jsx)("p",{children:e.error})})},E=function(){var e=Object(n.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t("/status");case 3:return c=e.sent,e.abrupt("return",c.status);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(n.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t("/basicInfo");case 3:return c=e.sent,e.abrupt("return",c.basicInfo);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(n.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t("/techStacks");case 3:return c=e.sent,e.abrupt("return",c.techs);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(n.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t("/toolsOrDbs");case 3:return c=e.sent,e.abrupt("return",c.toolsDbs);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(n.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t("/projects");case 3:return c=e.sent,e.abrupt("return",c.projects);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(n.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t("/certificates");case 3:return c=e.sent,e.abrupt("return",c.certificates);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(n.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t("/packages");case 3:return c=e.sent,e.abrupt("return",c.packages);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(l.useState)(),t=Object(s.a)(e,2),c=t[0],r=t[1],a=Object(l.useState)(!1),o=Object(s.a)(a,2),j=o[0],b=o[1];return Object(l.useEffect)((function(){Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(T);case 2:void 0!==(t=e.sent)&&t||b(!0),r(t);case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(h.jsxs)("div",{className:m.a.BasicInfo,children:[Object(h.jsx)(S,{show:j,error:"Failed to fetch basic info",onClear:w}),Object(h.jsx)(O,{children:c&&c.map((function(e){return Object(h.jsxs)(l.Fragment,{children:[Object(h.jsx)("img",{src:x,alt:"Me",className:m.a.Image}),Object(h.jsx)("h2",{children:e.name}),Object(h.jsxs)("h4",{children:[Object(h.jsx)("img",{src:I,alt:"Location",className:m.a.Icon})," ",e.location]}),Object(h.jsxs)("h4",{children:[Object(h.jsx)("a",{href:"mailto: ".concat(e.email),target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)("img",{src:f,alt:"Mail ID",className:m.a.Icon})})," ",e.email]}),Object(h.jsxs)("h4",{children:[Object(h.jsx)("img",{src:g,alt:"Education",className:m.a.Icon})," ",e.educationOrProfession]}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{href:e.githubProfile,target:"_blank",rel:"noopener noreferrer",children:"Follow me on GitHub!"})}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{href:e.ytChannelCoding,target:"_blank",rel:"noopener noreferrer",children:"Visit my coding YouTube channel!"})}),Object(h.jsxs)("h4",{children:[Object(h.jsx)("img",{src:v,alt:"About Me and my Dream Company",className:m.a.Icon})," About Me and my Dream Company:"]}),Object(h.jsx)("p",{className:m.a.AboutMe,children:e.description})]},e)}))})]})},M=c(7),U=c.n(M),z=c.p+"static/media/projects.ee06ce5f.png",G=c(32),q=function(){var e=Object(l.useState)(),t=Object(s.a)(e,2),c=t[0],r=t[1],a=Object(l.useState)(!1),o=Object(s.a)(a,2),j=o[0],b=o[1];return Object(l.useEffect)((function(){Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(T);case 2:void 0!==(t=e.sent)&&t||b(!0),r(t);case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)(S,{show:j,error:"Failed to fetch projects",onClear:w}),Object(h.jsxs)(O,{children:[Object(h.jsxs)("h2",{className:U.a.TableTitle,children:[Object(h.jsx)("img",{src:z,alt:"",className:U.a.Icon})," Projects"]}),Object(h.jsx)("span",{children:Object(h.jsx)("a",{href:"/certificates-packages",target:"_blank",rel:"noopener noreferrer",children:"My achievements"})}),Object(h.jsxs)(G.a,{component:"div",className:U.a.Projects,children:[Object(h.jsxs)("table",{className:U.a.OverallTable,children:[Object(h.jsx)("thead",{className:U.a.TableHeading,children:Object(h.jsxs)("tr",{className:U.a.Table,children:[Object(h.jsx)("td",{className:U.a.Table,children:"Type"}),Object(h.jsx)("td",{className:U.a.Table,children:"Project Name"}),Object(h.jsx)("td",{className:U.a.Table,children:"Status"}),Object(h.jsx)("td",{className:U.a.Table,children:"Published"}),Object(h.jsx)("td",{className:U.a.Table,children:"Project Description"}),Object(h.jsx)("td",{className:U.a.Table,children:"Technologies Used"}),Object(h.jsx)("td",{className:U.a.Table,children:"App Link"}),Object(h.jsx)("td",{className:U.a.Table,children:"GitHub Link"})]})}),c&&c.map((function(e){return Object(h.jsx)("tbody",{className:U.a.Table,children:Object(h.jsxs)("tr",{className:U.a.Table,children:[Object(h.jsx)("td",{className:U.a.Table,children:e.webOrMobile.toString()}),Object(h.jsx)("td",{className:U.a.Table,children:e.name.toString()}),Object(h.jsx)("td",{className:U.a.Table,children:e.status.toString()}),Object(h.jsx)("td",{className:U.a.Table,children:e.date.toString()}),Object(h.jsx)("td",{className:U.a.Table,children:e.description.toString()}),Object(h.jsx)("td",{className:U.a.Table,children:Object(h.jsx)("p",{className:U.a.Languages,children:e.technologies.toString()})}),Object(h.jsx)("td",{className:U.a.Table,children:Object(h.jsx)("a",{href:e.appUrl,target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)("img",{src:e.appLogo,alt:"App's Logo",className:U.a.Icon})})}),Object(h.jsx)("td",{className:U.a.Table,children:Object(h.jsx)("a",{href:e.githubUrl,target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)("img",{src:"data:image/png;base64,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",alt:"GitHub's Logo",className:U.a.Icon})})})]})},e.id.toString())}))]}),Object(h.jsx)("p",{className:U.a.TableFooter,children:"and more to come..."})]})]})]})},V=c.p+"static/media/star.3038b28e.png",W=(c(34),function(){var e=Object(l.useState)(),t=Object(s.a)(e,2),c=t[0],r=t[1],a=Object(l.useState)(!1),o=Object(s.a)(a,2),j=o[0],b=o[1];return Object(l.useEffect)((function(){Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(T);case 2:void 0!==(t=e.sent)&&t||b(!0),r(t);case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)(S,{show:j,error:"Failed to fetch the tech stacks",onClear:w}),Object(h.jsx)("h4",{children:Object(h.jsx)("u",{children:"Programming"})}),Object(h.jsxs)(G.a,{component:"table",children:[Object(h.jsx)("thead",{className:"TableInfo",children:Object(h.jsxs)("tr",{className:"TableInfo",children:[Object(h.jsx)("td",{className:"TableInfo",children:"Language/Framework"}),Object(h.jsx)("td",{className:"TableInfo",children:"Beginner"}),Object(h.jsx)("td",{className:"TableInfo",children:"Intermediate"}),Object(h.jsx)("td",{className:"TableInfo",children:"Expert"})]})}),c&&c.map((function(e){return Object(h.jsx)("tbody",{className:"TableInfo",children:Object(h.jsxs)("tr",{className:"TableInfo",children:[Object(h.jsx)("td",{className:"TableInfo",children:e.techLang.toString()}),Object(h.jsx)("td",{className:"TableInfo",children:"Beginner"===e.expertiseLevel.toString()?Object(h.jsx)("img",{src:V,alt:"Beginner",className:"Icon"}):""}),Object(h.jsx)("td",{className:"TableInfo",children:"Intermediate"===e.expertiseLevel.toString()?Object(h.jsx)("img",{src:V,alt:"Intermediate",className:"Icon"}):""}),Object(h.jsx)("td",{className:"TableInfo",children:"Expert"===e.expertiseLevel.toString()?Object(h.jsx)("img",{src:V,alt:"Expert",className:"Icon"}):""})]})},e.id.toString())}))]})]})}),Y=function(){var e=Object(l.useState)(),t=Object(s.a)(e,2),c=t[0],r=t[1],a=Object(l.useState)(!1),o=Object(s.a)(a,2),j=o[0],b=o[1];return Object(l.useEffect)((function(){Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K(T);case 2:void 0!==(t=e.sent)&&t||b(!0),r(t);case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)(S,{show:j,error:"Failed to fetch the tools/db experience",onClear:w}),Object(h.jsx)("h4",{children:Object(h.jsx)("u",{children:"Tools"})}),Object(h.jsxs)(G.a,{component:"table",children:[Object(h.jsx)("thead",{className:"TableInfo",children:Object(h.jsxs)("tr",{className:"TableInfo",children:[Object(h.jsx)("td",{className:"TableInfo",children:"Tool/DB"}),Object(h.jsx)("td",{className:"TableInfo",children:"Beginner"}),Object(h.jsx)("td",{className:"TableInfo",children:"Intermediate"}),Object(h.jsx)("td",{className:"TableInfo",children:"Expert"})]})}),c&&c.map((function(e){return Object(h.jsx)("tbody",{className:"TableInfo",children:Object(h.jsxs)("tr",{className:"TableInfo",children:[Object(h.jsx)("td",{className:"TableInfo",children:e.toolOrDb.toString()}),Object(h.jsx)("td",{className:"TableInfo",children:"Beginner"===e.expertiseLevel.toString()?Object(h.jsx)("img",{src:V,alt:"Beginner",className:"Icon"}):""}),Object(h.jsx)("td",{className:"TableInfo",children:"Intermediate"===e.expertiseLevel.toString()?Object(h.jsx)("img",{src:V,alt:"Intermediate",className:"Icon"}):""}),Object(h.jsx)("td",{className:"TableInfo",children:"Expert"===e.expertiseLevel.toString()?Object(h.jsx)("img",{src:V,alt:"Expert",className:"Icon"}):""})]})},e.id.toString())}))]})]})},Z=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(O,{children:[Object(h.jsxs)("h2",{children:[Object(h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAtFBMVEX///8AgAAAfgAAewAAfAAAeQAAgQD9//0AgwD5/fkAdwDz+vMAhQDr9uuYyZgAhwDh8OHZ7NnS6NLo9OjJ48m93L3g7+CgzKCLv4t9uH1GnUaz17MejB5OoE6gwqDw+fCo0Kg5lzlsr2waixpAm0Ct1K1apVqBvIGYxpgpjymPv49jqmNzsnO62bpXo1dNn01io2J5r3lGlUa/2b8yljIsjCxWnlZ4uHg8mzy63Lpssmyuzq6mI/W8AAANwUlEQVR4nN1dfX+iuhIuk6Cg2AqCUl+OUO2La2vPOXXvbvd+/+91sV2rQAiZEBL3Pn/2RyGPeZ95ZubqygBct2vis/rwTG42r3//E0/exqO+6ca0gcS2LACghNh2Z/Pv9tubb7pJahFQ6xwZU5taE9OtQsEdv3CmWb8DVgngDPS1ryGWb7cp6d1VT68FKRO0LBJrbGMDuC/blU2yPiLpqOKRbzaLoAWrpdaWSiGjR+3jHKNeyHzohdmDh0580txcLLr+o9c7X0KAshaPocOYhL878aL3jeVkSkudYz+7xee6+yqCWScmBhouinBls1pOpsUF8pk9CX93opG2C2HkVfRMcTImHIJZn98ban89vlWtHtnJJTl7LuDxyx5OL/aw+rN6clnk8avZ/TnnuQ+KUcUH/BdNTCow8rhjb3Hc6HaVXX1kuGC+P8g2oWmgj08ZEb/lZPV5ro65k/CTImMPDR8OeyzYz1VHCA2Ia/oGnFn21AvlP3UALXZiN9pRevyhJqXNRxemNdPLguzQOa5ab/NP5gdjNCWn3wXI2tBQ7a/q225vUxGCFn04vded7Qu7LJAfRg6vvlDnCBE868R+UuR3AJlXLbdtIqlbIjGg2493Dp42hPmbADWw4vwQWELE0ck60b912PwOICvdRx+3dqFBgT7MXm3uqIDew1grw9FKJcHDzlf7i5G91n0jUtqFQoBUK8NrlQvNRTJ8ULrQiDFct3IJce9DlplhKbDfK2c4bYPh6NWG+d0kKLIMtfM73EFaYBisyGG7tXvO4jEank2Dif5paMFOPcPwdG4GYnfWd5Nw9PmVhf5pmO2ZyhlGBRtg1pkwz2hGw+GNfoLHo51CvLM8DQePCrW41/u2oJzhzNK/XHJB79QSfL80ghZ5VkuQOUSNgtyqJBhdHkGLPCokGAqZVzRDpa9xbOBMVg/yTRnBZWpgP6+HQlfjnYEjmQCIMllD9/USx6hKhldPF9qHiTKG4WX2IVXHcDk3TYYJqtCeuLvIToT7br/fXy4Hg+HQD4IwjKLZ7D5JZKw31d5do9in+81mvlpZluN0OtanSo72ZA4CUb3PzwTgA6U/EwmnxuAid/wqwBzv0+DpXy4QZIs3b9yp60TIQ9l7zyGxU06UTEQgYDmbdP26yDBdr7OFYr7yPv6ulil4QyxDv/FimrFYLeIkGC1/i7u7rvux1I/8KIl3c6vakSYB8lDHqIhBM88S2M46jgbVs6O7DOOfnXp3kzDsdyzFBns+EG8xERk1/mTBcYkiPzrHio0fZYcphfRafFL4cQpqFjW0EWcmx5B0fkU4vWg/2lpqTlBITUqN2q6Cn7WVkb6ED6CAI53ivjrYoD8B1i/Z+Al/q2D76CWob6Lv+UCmbIW3GKJp4zUHK4p/xg0ccjNpptd2JzdNhypyscEJgsgCfagoYbho2I0YKa7rJxi5DDjXSjx7E6/RzmHPxD7T95PnFLUT002TGXgOf91gpMJG4LI/Cq+3+w7FjRYybT5Cj1j+kqdo1xgb+8H9r/0NIRQ7F8gPpSqXa1mnHqw47XDD68XKstHkPl58rZJfhpmkU4jXhcHaIpJTHFoIICyqBwRbMq/eDX35FQysRDlBSdcezzG1lZ7cYAmuz0j4Es69VfXtadiRJWhZbYlaAzRFnvdU3iQD7QXxRtiBChyDopiangGqehU9xwzXFp5MI+hJEmw5ghcpnOMIpJF3iBNB9SKzPH4gGsZV2jhyBOm+7TDzPjv4mwngmBYkfTDgtB+pM9qIrhCUZy2VNN9rCd4VFsvznE99OW8v3sQsBUGTJlfhHkoNUljpCdHpi7nAbJ7ORnIlRZvQJRGKnbc4Fij3u8x2T39pInh1dSvQA5ByGI6lBqmnL63MSOSACpvqMFMpaZCtUgRZB6FTM1SH0srIu/QmshD0t2ccn5hj9UlilCpUl4ngXnCYZRxj1gqPVyHqTijjCosmgHi3ZaufO8WeaUibdyYWEkQLCdyVVsHK7B1VP5Smzf6EpfDx9JPjtmieDnHjlCrVywsB6Y6msCtwxFkxWAkeWoaPNSRRus63UuTc8EXQRKaVBXpPg97b+QvcV/G5bOteZw6QsJUVTCwD8dWmYyIPID9NDBOwy79CWJYAPw0QvLraoa/p8L1w8BI9OBjKkCeToKK4qT0KDnX9K+kBPt5cZpemk5Bhi+ffaRPuGr2alj3efZGTg+oQR2HUpTMqgzGffAGvHTWV4/Ad3Yf0n/JbKnM3nlCZdqxtDNH7BfyH8Zr6EATPVN4tQaPbOcMN4/A1qluxIDWWphIvd3XKZo2wLjVeC/HwwsCb5nslhpN6lYfaSGMUMLeD3wwLM6p7J+BG1H69PwG/XfTyrqOxkNqKmEvDiWdo57JKvojpTfB6eGXAZzTKHWpiwagA28ypVI4h+evrn5evohdM21yqTTzD3hfDjxw7/38MTxKpBCHX+3MYgnW003TvMCaQP4bhKTP8eIP6xz+Fof2lPXlBilX/jLUUTioK9C5qm7o8YRiSkw4mQcu9SDtaS6UM7d3p/nOPtrNq9hxKMIScjvYFz9DcyVuMIfVy8wgvpVGaxQgHoTWDrPM3pjF6HhoztYkxLAkUXTTDiuzwOlB/A2aI6l20vltzhtRz1FoxYFU+jnRr7TIlcPTwLaPehcgyA/6LF9OYqrFVb5FnqoT/wfusTF3yx/WuGdZmLeEMMGXVn4mo28qnZrzzmKs2bhMicgxwSnKhNzRDmJsxertCMSG0ZJIf4z2rBrQmBwh6SEnxRFLrp2C8w8y5TTS6pCiHlhAIMz067UNYUEMKi71M/hITO+IQMdjy0UESMnYjYoxr8SUR9rnV5qWDV5du9K+mXUx0Hcl7AEePHpYj1W+rwWVxtAujbBQjOWqMRDgC6R0t6UyWGUfMj4TPqtUQAmfSPKC0GrqTOYKj9i0RfXxmpYzqJ6k4R80y6AE+rpvsGDd1dybMUfOGgb8BZVORLTiIpoJZt250itsGMkUYYF3xtnDrCBntdEoyREWT+RZW32P9W5GISw0Rsl8NkgpTLksvzyByjNd4Ed7KBPHyD15CJyTQ5aKZSUUpU17seiRkJtYVODPAGzwPsHkFWgVvYkSPwk02pRLHrBuKjgot8ihRfX0B3GVCuNQYOO1fhX3ZdEqcQYpIB0nXbe/7fUQoTx4c7wom3rL1qShbgoK3ko4bXTUVA2G6yKPHOY8g7Ta56uKqgczAc9aqtPqlQ2ziIqe9jR+dRekLvLRt6NTB4LRltAnkSxU51YcRCRM4WO1QDG6kCfK0BjIVH8BrY6CG8rWYoFftWZEruwlOopzgu1RWwUPpQsubxtVuB8m0baA8M2SCr4cGQIi33yalWqLn6KKi3s9Bfqg0g7vY9Q4Itea7OKo1copdm9gUFeQQPmL0gCGYsfP2z5NA6ADZpHaOuiy74QZxFqU308f3sajEZ9goRTFArEJL5MaYvOVwjTr7Jw0rdpBpc+tUMEVNQaTHvXFxIOrEzRacZezgxhFW+iKdAfP0xbSJnmi2R/v5kNc3ZIoTFoAsJIdqN/qJL1eCdtaqqHlIrQeJVdWNFlKVETrI33OspIgxtXYz3E+7TNaSVUrQwnpFRQ+BzB/FrVTBI8Z3WWCILQ/sYmoF8DnCzye/foN0/aef0KAcAqyxm3CgrmAekI9qSJyPDaJ43bRQUIeTWpeNHyor5mW9M1/c3of+cDganGE49MPJ7WLVpPd+Ax/TKpQbA4HDpcaGjufdnMFzwCZqqjxJODKFk75eBipdvRzgw96NAvB2d3z+CaPoSRjC/OJLWi1b2BRSspCkRw7FCTuO4zmr1Wqz2Xz/nqbT1DQZJuBVgmE3iqIwDIMg8MfZOr9c9t0MV++mybChMMRFJBzAABTqzi+UocIAkPvLLJ8L6nQvmDSpGoGvXFnN8DKPAmShzBqNrKehCTRVp+tRdD1WC4kqwH8WQ/BUKghldKwtAzylQVgXyFBxgYbLu1ZRxbozMwyrrzSgvFyYwmry4oDNd4ddkLGFgm9mGAauH8UPG1qszAgtSHil1MhNCW4+v708FEaF3sl6BW1UgTHBMBeds4ziDwtkRpPOW4jV7TZxgsuilA92ED7tNtBL0YZgEYb4xO/NwcwHOwiSVlJXdFX5NBCAqc6YYxMM9QbJiYX8qwXozSUa13oaCN5PzYcGrXwOETeBJBDnMVTr1ylEZWsAR48F9uZpoNoeZyAtc3fSYW77YKfJ58+tdEsxkjptPC3PtYzf7OhsFg0rF/KCEDNJRpLCbKR0cX7wEKu0Aa8iAsQbQ/nfh3dniyqFgnwmEArt84ZXcW1eWNibIZjhLf3t7SdkW7IEicRNkUNY0kud0pnoz2zwBXdyiBZm1f8S6kT7M3fjsEbHZpvLHZ5h9AzOLfuAXzsTybGIT59f0t1IUaIzBFUXmLeaTjyv48KzwcLeSKofEdRUhMkVX46qtw1DRYlEEHHHnp3kHh6nFU9T7RX6EOAFJ9tFrV1/y5JhZadAczmZ68EJ3mXtcXGJIiGv98ZqoYjArexE6LCG3iyXcpvYXqw7AQ4alc5U8sZ83j+mTQdC5s+XPDyPqNL/2d8q/mG5sw/0evPnt4senSew9zlSnaK3+9jrpTE3LOuysGQFgMKKJ+gNjSW3lcPTHOySQ8XwKUwx+uOX+O/Us3u2TT7RM3qQbguuOw5nyV8f+K+B7/8PD6n6VkhseqIAAAAASUVORK5CYII=",alt:"My Skills",className:"Icon"})," Skills"]}),Object(h.jsx)(W,{}),Object(h.jsx)(Y,{}),Object(h.jsx)("h4",{className:"SoftSkillsHeading",children:Object(h.jsx)("u",{children:"Soft Skills"})}),Object(h.jsx)("div",{className:"SoftSkills",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"Active Listening"}),Object(h.jsx)("li",{children:"Communication"}),Object(h.jsx)("li",{children:"Creativity"})]})})]})})},H=(c(40),function(){return Object(h.jsxs)("div",{className:"Container",children:[Object(h.jsx)(L,{}),Object(h.jsx)(Z,{}),Object(h.jsx)(q,{})]})}),X=c(33),_=c.n(X),$=c.p+"static/media/trophy.1a39854b.png",ee=function(){var e=Object(l.useState)(),t=Object(s.a)(e,2),c=t[0],r=t[1],a=Object(l.useState)(!1),o=Object(s.a)(a,2),j=o[0],b=o[1];return Object(l.useEffect)((function(){Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(T);case 2:void 0!==(t=e.sent)&&t||b(!0),r(t);case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)(S,{show:j,error:"Failed to fetch Certificates",onClear:w}),Object(h.jsxs)(O,{children:[Object(h.jsxs)("h2",{children:[Object(h.jsx)("img",{src:$,alt:"My Certificates",className:_.a.Icon})," Certificates"]}),c&&c.map((function(e,t){return Object(h.jsxs)("div",{className:_.a.Certificates,children:[Object(h.jsxs)("h4",{children:["Certificate #",t+1]}),Object(h.jsxs)("h4",{children:["Course Name: ",e.course]}),Object(h.jsxs)("p",{children:["On ",e.platform]}),Object(h.jsx)("p",{children:e.otherInfo&&"Other Information: "+e.otherInfo}),Object(h.jsx)("a",{href:e.file,target:"_blank",rel:"noopener noreferrer",children:"Certificate Link"}),Object(h.jsx)("div",{className:_.a.Line,children:Object(h.jsx)("hr",{})})]},e.id.toString())}))]})]})},te=c(36),ce=c.n(te),re=function(){var e=Object(l.useState)(),t=Object(s.a)(e,2),c=t[0],r=t[1],a=Object(l.useState)(!1),o=Object(s.a)(a,2),j=o[0],b=o[1];return Object(l.useEffect)((function(){Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(T);case 2:void 0!==(t=e.sent)&&t||b(!0),r(t);case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)(S,{show:j,error:"Failed to fetch packages",onClear:w}),Object(h.jsxs)(O,{children:[Object(h.jsx)("h2",{children:"My Packages"}),c&&c.map((function(e,t){return Object(h.jsxs)("div",{className:ce.a.Packages,children:[Object(h.jsxs)("h4",{children:["Package #",t+1]}),Object(h.jsxs)("h4",{children:["Package Name: ",e.package.toString()]}),Object(h.jsx)("p",{children:e.description.toString()}),Object(h.jsx)("a",{href:e.npmLink,target:"_blank",rel:"noopener noreferrer",children:"Check this package out on npm.js!"}),Object(h.jsx)("br",{}),e.githubRepo&&Object(h.jsx)("a",{href:e.githubRepo,target:"_blank",rel:"noopener noreferrer",children:"If you are interested about the code for this, click here to see my GitHub repo."}),Object(h.jsx)("div",{className:ce.a.Line,children:Object(h.jsx)("hr",{})})]},t)}))]})]})},ae=function(){return Object(h.jsxs)("div",{className:"OtherPageGrid",children:[Object(h.jsx)(ee,{}),Object(h.jsx)(re,{})]})},ne=function(){var e=Object(l.useState)(),t=Object(s.a)(e,2),c=t[0],r=t[1],a=Object(l.useState)(!1),o=Object(s.a)(a,2),j=o[0],d=o[1];return Object(l.useEffect)((function(){Object(n.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(T);case 2:void 0!==(t=e.sent)&&t||d(!0),r(t);case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(S,{show:j,error:"Failed to fetch",onClear:w}),c&&c.map((function(e){return 200!==e.statusCode?Object(h.jsxs)("h4",{id:"status",children:[200!==e.statusCode&&e.status," ",200!==e.statusCode&&"as of ".concat(e.date,".")]},e.statusCode):null})),Object(h.jsxs)(b.d,{children:[Object(h.jsx)(b.b,{path:"/",element:Object(h.jsx)(H,{})}),Object(h.jsx)(b.b,{path:"/certificates-packages",element:Object(h.jsx)(ae,{})}),Object(h.jsx)(b.b,{path:"*",element:Object(h.jsx)(b.a,{replace:!0,to:"/"})})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(r.createRoot)(document.getElementById("mainDivPortfolio")).render(Object(h.jsx)(a.a,{children:Object(h.jsx)(ne,{})})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,c){e.exports={Icon:"Projects_Icon__sJGq2",Languages:"Projects_Languages__2qyKO",Projects:"Projects_Projects___WIeY",showProjects:"Projects_showProjects__D3jLn",Table:"Projects_Table__3ozUW",OverallTable:"Projects_OverallTable__6UKNF",TableHeading:"Projects_TableHeading__cNCqc",TableTitle:"Projects_TableTitle__LdpVg",TableFooter:"Projects_TableFooter__2rhZ1"}}},[[57,1,2]]]);
//# sourceMappingURL=main.ad56ddfb.chunk.js.map