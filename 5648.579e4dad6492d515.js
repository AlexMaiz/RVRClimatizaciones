"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5648],{5648:(m,c,i)=>{i.r(c),i.d(c,{AirePageModule:()=>p});var u=i(6814),d=i(95),a=i(602),l=i(6958),e=i(6689);const A=function(){return["/home"]},g=[{path:"",component:(()=>{var o;class t{constructor(n,s){this.el=n,this.route=s,this.showMenu=!1,this.showMenu2=!1,this.showMenu3=!1}ngOnInit(){this.route.fragment.subscribe(n=>{"servicios"===n&&this.scrollToSection("servicios")})}toggleMenu(){this.showMenu=!this.showMenu}toggleMenu2(){this.showMenu2=!this.showMenu2}toggleMenu3(){this.showMenu3=!this.showMenu3}closeMenu2(){this.showMenu2=!1}closeMenu3(){this.showMenu3=!1}opcionSeleccionada(n){console.log("Opci\xf3n seleccionada:",n)}opcionSeleccionada2(n){console.log("Opci\xf3n seleccionada:",n)}opcionSeleccionada3(n){console.log("Opci\xf3n seleccionada:",n)}scrollToSection(n){const s=this.el.nativeElement.querySelector("."+n);s&&s.scrollIntoView({behavior:"smooth"})}}return(o=t).\u0275fac=function(n){return new(n||o)(e.Y36(e.SBq),e.Y36(l.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-aire"]],decls:100,vars:2,consts:[[1,"ion-content-full-screen",2,"background-color","white"],[1,"rectangulo"],["size","1"],[1,"ion-text-start",2,"color","white"],[1,"ion-text-center",2,"color","white"],["name","call"],[1,"ion-text-end",2,"color","white"],["name","logo-instagram"],[1,"rectangulo2"],["fill","clear"],["src","./../../assets/imagenes/logo-sin-fondo.png","alt","","height","150px","width","200px"],["fill","clear",2,"color","#498B87","font-size","large"],[1,"rectangulo3"],[2,"margin","0"],[1,"titulo",2,"font-weight","bold","font-size","29px"],[1,"barra-uno"],[2,"color","#696B6D","text-align","justify"],["width","100%","height","860px","src","data:image/jpeg;base64,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jO9XHE2sPiRPP4Spb4/sZ3qV9Zm47a7VCYAzk2k2LTVmlZbJiCPMTcVL7SI0yTpIqX2kxmkRap6zoHmto7ZpsKk4Z5nNA6Mqk362t/BObow2sdLaAeMyGmQ8mhmg5B18PLe0s+1lbm8Z07SUTGqyNiagKEG4Fhtr+k0NScaz3Ui9tpBpk8GB5LW2J0PQ+3xnfDXVFB0tm/UyEUPt5baeydaDco/N84Gc2sj0UIa5t16zbNOVMawNqaWvqO6RpeAoykZvDofGaop19hgKbH3QOiWy7nc9Jsh2t4HeclGk2XpA7q9luP5vMGs3jOR2mCZUdS01ZpreLyKyGjP5TW8zeBhpgGZmIGwebBpygGB2DTYNOIaZvA7BpnPOOaM0DvnmrG+k5ZozQMlPA9LTIJ0v5zXNGaBreaqTNzaa5YGq/tMAaTaIADSBECBsTpNQYiBm8TEQMxMRAzExEBERATN5iIGbxeYiBm8XmIgZvF5iIGbxeYiBm8xEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA/9k="],["expand","full",1,"custom-button",3,"routerLink"]],template:function(n,s){1&n&&(e.TgZ(0,"ion-content",0)(1,"ion-grid")(2,"ion-row",1),e._UZ(3,"ion-col",2),e.TgZ(4,"ion-col",3),e._uU(5,"CLIMATIZA TU ESPACIO"),e.qZA(),e.TgZ(6,"ion-col",4),e._UZ(7,"ion-icon",5),e._uU(8,"+569 00000000"),e.qZA(),e.TgZ(9,"ion-col",6),e._UZ(10,"ion-icon",7),e.qZA(),e._UZ(11,"ion-col",2),e.qZA(),e.TgZ(12,"ion-row",8),e._UZ(13,"ion-col",2),e.TgZ(14,"ion-col")(15,"ion-button",9),e._UZ(16,"img",10),e.qZA()(),e.TgZ(17,"ion-col")(18,"ion-button",11),e._uU(19,"INICIO"),e.qZA()(),e._UZ(20,"ion-col",2),e.qZA(),e._UZ(21,"br")(22,"br")(23,"br")(24,"br")(25,"br")(26,"br")(27,"br")(28,"br")(29,"br"),e.TgZ(30,"ion-row",12),e._UZ(31,"ion-col",2),e.TgZ(32,"ion-col",13)(33,"h1",14),e._uU(34,"AIRES ACONDICIONADOS INDUSTRIALES"),e.qZA()(),e._UZ(35,"ion-row")(36,"ion-col",2),e.qZA(),e.TgZ(37,"ion-row"),e._UZ(38,"ion-col",2)(39,"ion-col",15)(40,"ion-col",2)(41,"ion-col",2)(42,"ion-col",2)(43,"ion-col",2)(44,"ion-col",2)(45,"ion-col",2)(46,"ion-col",2),e.qZA(),e.TgZ(47,"ion-row"),e._UZ(48,"ion-col",2),e.TgZ(49,"ion-col",16)(50,"p"),e._UZ(51,"br"),e._uU(52," El uso de aire acondicionado a nivel industrial conlleva una serie de ventajas significativas que son cruciales para mantener un entorno de trabajo \xf3ptimo en instalaciones comerciales, f\xe1bricas y otros lugares de gran envergadura. "),e._UZ(53,"br")(54,"br"),e._uU(55," Estas ventajas incluyen: "),e._UZ(56,"br")(57,"br"),e._uU(58," Control de la temperatura: Un sistema de aire acondicionado industrial permite mantener una temperatura constante y c\xf3moda en el interior, lo que es esencial para la productividad de los trabajadores y la calidad de los productos. Adem\xe1s, en ciertos procesos industriales, controlar la temperatura es cr\xedtico para mantener la integridad de los productos. "),e._UZ(59,"br")(60,"br"),e._uU(61," Mejora de la calidad del aire: Los sistemas de aire acondicionado industrial est\xe1n equipados con filtros de alta eficiencia que eliminan part\xedculas, polvo y contaminantes del aire, lo que resulta en un ambiente m\xe1s saludable y seguro para los empleados. "),e._UZ(62,"br")(63,"br"),e._uU(64," Regulaci\xf3n de la humedad: Estos sistemas pueden controlar la humedad relativa, lo que es esencial en ciertas industrias donde la humedad puede afectar la producci\xf3n o la calidad de los productos, como en la fabricaci\xf3n de productos farmac\xe9uticos o alimentos. "),e._UZ(65,"br")(66,"br"),e._uU(67," Aumento de la eficiencia y productividad: Un entorno de trabajo con temperaturas controladas y un a buena calidad del aire puede aumentar la eficiencia y la productividad de los empleados. Los trabajadores se sienten m\xe1s c\xf3modos y, por lo tanto, son m\xe1s propensos a realizar sus tareas de manera efectiva. "),e._UZ(68,"br")(69,"br"),e._uU(70," Conservaci\xf3n de equipos y maquinaria: El aire acondicionado industrial ayuda a mantener una temperatura constante, lo que es esencial para la conservaci\xf3n de equipos sensibles al calor, como servidores, maquinaria industrial y equipos de laboratorio. "),e._UZ(71,"br")(72,"br"),e._uU(73," Reducci\xf3n de riesgos de seguridad: En industrias donde los procesos qu\xedmicos o la maquinaria pesada son comunes, mantener una temperatura y humedad controladas puede reducir el riesgo de accidentes laborales. "),e._UZ(74,"br")(75,"br"),e._uU(76," Cumplimiento normativo: En ciertas industrias, el control de la temperatura y la calidad del aire es esencial para cumplir con regulaciones y est\xe1ndares de seguridad y calidad. "),e._UZ(77,"br")(78,"br"),e._uU(79," Mejora del bienestar de los empleados: Un ambiente de trabajo c\xf3modo y seguro mejora la satisfacci\xf3n de los empleados y puede ayudar a retener y atraer talento. "),e._UZ(80,"br")(81,"br"),e._uU(82," Reducci\xf3n de costos a largo plazo: A pesar de la inversi\xf3n inicial, un sistema de aire acondicionado industrial bien dise\xf1ado y mantenido puede resultar en ahorros a largo plazo al aumentar la eficiencia energ\xe9tica y reducir el desgaste de los equipos. "),e._UZ(83,"br")(84,"br"),e._uU(85," En resumen, el aire acondicionado a nivel industrial aporta una serie de ventajas que van m\xe1s all\xe1 de la comodidad, ya que influye en la eficiencia, la seguridad y la calidad de los procesos y productos en el entorno industrial. Estas ventajas hacen que sea una inversi\xf3n esencial en muchas industrias. "),e._UZ(86,"br")(87,"br"),e.qZA()(),e._UZ(88,"ion-col",2),e.TgZ(89,"ion-col"),e._UZ(90,"img",17),e.qZA(),e._UZ(91,"ion-col",2),e.qZA(),e.TgZ(92,"ion-row"),e._UZ(93,"ion-col",2),e.TgZ(94,"ion-col")(95,"ion-button",18),e._uU(96," ATRAS "),e.qZA()(),e._UZ(97,"ion-col")(98,"ion-col")(99,"ion-col",2),e.qZA()()()),2&n&&(e.xp6(95),e.Q6J("routerLink",e.DdM(1,A)))},dependencies:[a.YG,a.wI,a.W2,a.jY,a.gu,a.Nd,a.YI,l.rH],styles:['@charset "UTF-8";.ion-content-full-screen[_ngcontent-%COMP%]{--ion-padding-start: 0;--ion-padding-end: 0;padding-left:50px;padding-right:50px}.rectangulo[_ngcontent-%COMP%]{width:100%;height:35px;background-color:#74bfbb;display:flex;align-items:center;justify-content:center}.rectangulo2[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;z-index:3;width:100%;height:160px;background-color:#efeeee;display:flex;align-items:center;justify-content:center}.rectangulo3[_ngcontent-%COMP%]{width:100%;height:100px;background-color:#fff;display:flex;align-items:center;justify-content:center}.barra-uno[_ngcontent-%COMP%]{width:10px;height:10px;background-color:#76b8b4;display:flex;top:0;justify-content:center;margin:0}.rectangulo4[_ngcontent-%COMP%]{width:100%;height:auto;background-color:#c43939;display:flex;align-items:center;justify-content:center}.rectangulo5[_ngcontent-%COMP%]{width:100%;height:100px;background-color:#2b1414;display:flex;position:relative}.rectangulo6[_ngcontent-%COMP%]{width:100%;height:60px;background-color:#fff;display:flex;align-items:center;left:0}.rectangulo7[_ngcontent-%COMP%]{width:100%;height:50px;background-color:#efeeee;display:flex;justify-content:center}.rectangulo8[_ngcontent-%COMP%]{width:100%;height:auto;background-color:#efeeee;display:flex;justify-content:center}.rectangulo9[_ngcontent-%COMP%]{width:100%;height:auto;background-color:#fff;display:flex;justify-content:center}.rectangulo10[_ngcontent-%COMP%]{width:100%;height:auto;background-color:#fff;display:flex;align-items:center;justify-content:center}.rectangulo11[_ngcontent-%COMP%]{width:100%;height:280;background-color:#fff;display:flex;justify-content:center}.rectangulo12[_ngcontent-%COMP%]{width:100%;height:auto;background-color:#efeeee;display:flex;align-items:center;justify-content:center;position:relative}.custom-button[_ngcontent-%COMP%]{--background: #498B87;--color: white;--box-shadow: none;--ion-box-shadow: none;box-shadow:none}.boton-con-imagen[_ngcontent-%COMP%]{background-image:url(logo-sin-fondo.4c4c7c019fa6610a.png);background-repeat:no-repeat;text-align:center;color:#fff}.titulo[_ngcontent-%COMP%]{color:#498b97;font-size:40px;margin:0;left:0}.menu-desplegable[_ngcontent-%COMP%]{display:none;position:absolute;top:100%;left:0;background-color:#efeeee;border:1px solid #EFEEEE;z-index:1;color:#498b87}ion-col[_ngcontent-%COMP%]:hover   .menu-desplegable[_ngcontent-%COMP%]{display:block}.lista-sin-lineas[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{height:auto;--inner-border-width: 0 ;--border-width: 0 ;font-size:14px;padding:2px}']}),t})()}];let E=(()=>{var o;class t{}return(o=t).\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[l.Bz.forChild(g),l.Bz]}),t})(),p=(()=>{var o;class t{}return(o=t).\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.ez,d.u5,a.Pc,E]}),t})()}}]);