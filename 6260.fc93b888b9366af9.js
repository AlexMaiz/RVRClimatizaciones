"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6260],{6260:(b,u,a)=>{a.r(u),a.d(u,{HomePageModule:()=>h});var g=a(6814),t=a(602),d=a(95),s=a(6958),o=a(6689);function Z(e,l){if(1&e){const c=o.EpF();o.TgZ(0,"div",87)(1,"ion-list",88)(2,"ion-item",89),o.NdJ("click",function(){o.CHM(c);const i=o.oxw();return i.scrollToSection("rectangulo4"),o.KtG(i.showMenu=!1)}),o._uU(3,"QUIENES SOMOS?"),o.qZA()()()}}function m(e,l){if(1&e){const c=o.EpF();o.TgZ(0,"div",87)(1,"ion-list",88)(2,"ion-item",89),o.NdJ("click",function(){o.CHM(c);const i=o.oxw();return i.scrollToSection("rectangulo6"),o.KtG(i.showMenu2=!1)}),o._uU(3,"NUESTROS SERVICIOS?"),o.qZA()()()}}function p(e,l){if(1&e){const c=o.EpF();o.TgZ(0,"div",87)(1,"ion-list",88)(2,"ion-item",89),o.NdJ("click",function(){o.CHM(c);const i=o.oxw();return i.scrollToSection("rectangulo14"),o.KtG(i.showMenu3=!1)}),o._uU(3,"CONSULTAS"),o.qZA()()()}}const _=[{path:"",component:(()=>{var e;class l{constructor(n,i,r){this.el=n,this.formBuilder=i,this.route=r,this.showMenu=!1,this.showMenu2=!1,this.showMenu3=!1,this.formulario=this.formBuilder.group({nombreApellido:"",email:"",telefono:"",asunto:"",mensaje:""})}ngOnInit(){this.route.fragment.subscribe(n=>{"servicios"===n&&this.scrollToSection("servicios")})}toggleMenu(){this.showMenu=!this.showMenu}toggleMenu2(){this.showMenu2=!this.showMenu2}toggleMenu3(){this.showMenu3=!this.showMenu3}closeMenu2(){this.showMenu2=!1}closeMenu3(){this.showMenu3=!1}opcionSeleccionada(n){console.log("Opci\xf3n seleccionada:",n)}opcionSeleccionada2(n){console.log("Opci\xf3n seleccionada:",n)}opcionSeleccionada3(n){console.log("Opci\xf3n seleccionada:",n)}scrollToSection(n){const i=this.el.nativeElement.querySelector("."+n);i&&i.scrollIntoView({behavior:"smooth"})}enviarFormulario(){const n=this.formulario.value;console.log("Nombre y Apellido:",n.nombreApellido),console.log("Email:",n.email),console.log("Tel\xe9fono:",n.telefono),console.log("Asunto:",n.asunto),console.log("Mensaje:",n.mensaje)}}return(e=l).\u0275fac=function(n){return new(n||e)(o.Y36(o.SBq),o.Y36(d.qu),o.Y36(s.gz))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-home"]],decls:344,vars:3,consts:[[1,"ion-content-full-screen",2,"background-color","white"],[1,"rectangulo"],["size","1"],[1,"ion-text-start",2,"color","white"],[1,"ion-text-center",2,"color","white"],["name","call"],[1,"ion-text-end",2,"color","white"],["name","logo-instagram"],[1,"rectangulo2"],["fill","clear"],["src","./../../assets/imagenes/logo-sin-fondo.png","alt","","height","150px","width","200px"],["fill","clear",2,"color","#498B87","font-size","large"],["fill","clear",2,"color","#498B87","font-size","large",3,"mouseenter"],["class","menu-desplegable",4,"ngIf"],["expand","full",1,"custom-button"],[1,"rectangulo3"],[2,"font-weight","bold","font-size","29px"],[1,"custom-button",3,"click"],[1,"barra-uno"],[1,"rectangulo4"],[1,"imagen-centrada"],["src","./../../assets/imagenes/logo-sin-fondo.png","height","300px","width","350px"],[2,"text-align","justify","color","#696B6D"],[1,"custom-button"],["src","https://static.wixstatic.com/media/0b8a58_1e52c1335e554947980d0272f746c8b1~mv2.jpg/v1/fill/w_608,h_1000,al_c,q_85,enc_auto/0b8a58_1e52c1335e554947980d0272f746c8b1~mv2.jpg","height","auto","width","auto"],[1,"rectangulo6"],[1,"rectangulo7"],[1,"titulo",2,"font-weight","bold","font-size","29px","text-align","center"],[1,"rectangulo8"],[1,"rectangulo9"],[1,"ion-padding"],["href","../aire/"],["src","./../../assets/imagenes/AiresDeEmpresa.jpg"],["href","../oficinas/"],["src","./../../assets/imagenes/Oficina.jpg"],["href","../mantencion/"],["src","./../../assets/imagenes/Instalador.jpg"],["href","../reparacion/"],["src","./../../assets/imagenes/Instalador2.jpg"],[1,"rectangulo14"],[1,"rectangulo10"],[1,"rectangulo11"],[1,"colordefondo",2,"text-align","center","width","100%"],["name","checkmark-circle-sharp",2,"font-size","50px","display","block","margin","0 auto","color","#498B87"],[2,"color","#498B87","text-align","center"],["name","create-sharp",2,"font-size","50px","margin","0 auto","color","#498B87"],["name","calendar-sharp",2,"font-size","50px","display","block","margin","0 auto","color","#498B87"],["name","build-sharp",2,"font-size","50px","display","block","margin","0 auto","color","#498B87"],[1,"rectangulo12"],[1,"centered-p"],[1,"rectangulo13"],[2,"justify-content","center","align-items","center"],[2,"width","300px","height","220px"],[2,"color","#498B87"],["name","chevron-forward-outline",2,"color","#498b87","font-size","1.5rem"],[2,"color","#498b87","font-weight","bold","text-align","center"],[2,"color","#498b87","text-align","justify"],[2,"color","#498b87"],[1,"rectangulo13",2,"justify-content","center","align-items","center"],[1,"rectangulo15"],[2,"color","#F6E440","font-size","30px","font-weight","bold"],[2,"color","white","font-size","40px","font-weight","bold"],[1,"rectangulo17"],[2,"text-align","left"],[2,"margin","15px"],[2,"color","#74BFBB","font-weight","bold","font-size","35px","margin","0"],[2,"color","#498B87","font-weight","bold","font-size","50px","margin","0"],[2,"background-color","#EFEEEE"],[2,"margin","20px"],["position","floating",2,"color","#498B87"],["type","text","name","nombreApellido"],["type","email","name","email"],["type","tel","name","telefono"],["type","text","name","asunto"],["name","mensaje",2,"min-height","207px","min-width","100%"],["expand","full",1,"custom-button",3,"click"],[1,"rectangulo16"],[2,"margin","0px"],[2,"color","#74BFBB","font-weight","bold","font-size","35PX","margin","0"],[2,"color","#498B87","font-weight","bold","font-size","30px","margin","0"],[1,"rectangulo18"],[1,"barra-tres"],["name","time-outline",2,"color","#498B87"],["name","phone-portrait-outline",2,"color","#498B87"],["name","logo-whatsapp",2,"color","#498B87"],["name","mail-outline",2,"color","#498B87"],["name","logo-instagram",2,"color","#498B87"],[1,"menu-desplegable"],[1,"lista-sin-lineas"],[1,"menu-item",2,"color","#498B87",3,"click"]],template:function(n,i){1&n&&(o.TgZ(0,"ion-content",0)(1,"ion-grid")(2,"ion-row",1),o._UZ(3,"ion-col",2),o.TgZ(4,"ion-col",3),o._uU(5,"CLIMATIZA TU ESPACIO"),o.qZA(),o.TgZ(6,"ion-col",4),o._UZ(7,"ion-icon",5),o._uU(8,"+569 00000000"),o.qZA(),o.TgZ(9,"ion-col",6),o._UZ(10,"ion-icon",7),o.qZA(),o._UZ(11,"ion-col",2),o.qZA(),o.TgZ(12,"ion-row",8),o._UZ(13,"ion-col",2),o.TgZ(14,"ion-col")(15,"ion-button",9),o._UZ(16,"img",10),o.qZA()(),o.TgZ(17,"ion-col")(18,"ion-button",11),o._uU(19,"INICIO"),o.qZA()(),o.TgZ(20,"ion-col")(21,"ion-button",12),o.NdJ("mouseenter",function(){return i.showMenu=!0}),o._uU(22,"NOSOTROS"),o.qZA(),o.YNc(23,Z,4,0,"div",13),o.qZA(),o.TgZ(24,"ion-col")(25,"ion-button",12),o.NdJ("mouseenter",function(){return i.showMenu2=!0}),o._uU(26,"SERVICIOS"),o.qZA(),o.YNc(27,m,4,0,"div",13),o.qZA(),o.TgZ(28,"ion-col")(29,"ion-button",12),o.NdJ("mouseenter",function(){return i.showMenu3=!0}),o._uU(30,"FAQ"),o.qZA(),o.YNc(31,p,4,0,"div",13),o.qZA(),o.TgZ(32,"ion-col")(33,"ion-button",14),o._uU(34," CONTACTANOS "),o.qZA()(),o._UZ(35,"ion-col",2),o.qZA(),o.TgZ(36,"ion-row",15),o._UZ(37,"ion-col",2),o.TgZ(38,"ion-col")(39,"h1",16),o._uU(40,"VENTA E INSTALACION DE CALEFACCION EN TODA LA REGION METROPOLITANA"),o.qZA(),o.TgZ(41,"h3"),o._uU(42,"Contamos con Personal capacitado y certificado"),o.qZA(),o.TgZ(43,"ion-button",17),o.NdJ("click",function(){return i.scrollToSection("rectangulo6")}),o._uU(44,"VER SERVICIOS"),o.qZA()(),o._UZ(45,"ion-col",2),o.qZA(),o._UZ(46,"br"),o.TgZ(47,"ion-row"),o._UZ(48,"ion-col",2)(49,"ion-col",2)(50,"ion-col",2)(51,"ion-col",2)(52,"ion-col",18)(53,"ion-col",2)(54,"ion-col",2)(55,"ion-col",2)(56,"ion-col",2),o.qZA(),o._UZ(57,"br")(58,"br"),o.TgZ(59,"ion-row",19),o._UZ(60,"ion-col",2),o.TgZ(61,"ion-col")(62,"ion-row")(63,"ion-col",20),o._UZ(64,"img",21),o.qZA()(),o.TgZ(65,"ion-row")(66,"ion-col",22)(67,"h4"),o._uU(68," En Climatizaci\xf3n, somos una emh4resa nacional con m\xe1s de 5 a\xf1os de experiencia en el \xe1rea de Climatizaci\xf3n de Ambientes. Disponemos de las mejores marcas reconocidas a nivel nacional e internacionalidad a precios muy competitivos. "),o.qZA(),o._UZ(69,"br"),o.TgZ(70,"h4"),o._uU(71," Ofrecemos instalaci\xf3n de aire acondicionado, sistemas de calefacci\xf3n central, venta e instalaci\xf3n de ablandador de agua. Adem\xe1s de ser r\xe1pido y garantizado, es realizado por profesionales certificados para que disfrutes del mejor ambiente. "),o.qZA(),o._UZ(72,"br"),o.TgZ(73,"h4"),o._uU(74," Garantizamos todos nuestros equipos e instalaciones y disponemos de servicio t\xe9cnico si ocurriera algo en el funcionamiento de los mismos, nos comprometemos a dar soluciones inmediatas en tu hogar. "),o.qZA()()(),o._UZ(75,"br"),o.TgZ(76,"ion-row")(77,"ion-col",20)(78,"ion-button",23),o._uU(79," CONTACTANOS "),o.qZA()()()(),o._UZ(80,"ion-col",2),o.TgZ(81,"ion-col"),o._UZ(82,"img",24),o.qZA(),o._UZ(83,"ion-col",2),o.qZA(),o.TgZ(84,"ion-row",25),o._UZ(85,"ion-col",2)(86,"ion-col",2)(87,"ion-col",2)(88,"ion-col",2)(89,"ion-col",18)(90,"ion-col",2)(91,"ion-col",2)(92,"ion-col",2)(93,"ion-col",2),o.qZA(),o.TgZ(94,"ion-row",26),o._UZ(95,"ion-col",2),o.TgZ(96,"ion-col")(97,"h1",27),o._uU(98,"NUESTRAS ACTIVIDADES"),o.qZA()(),o._UZ(99,"ion-col",2),o.qZA(),o.TgZ(100,"ion-row",28),o._UZ(101,"ion-col",2),o.TgZ(102,"ion-col")(103,"ion-card",29)(104,"ion-grid")(105,"ion-row")(106,"ion-col",30)(107,"a",31),o._UZ(108,"ion-img",32),o.qZA()(),o.TgZ(109,"ion-col",30)(110,"a",33),o._UZ(111,"ion-img",34),o.qZA()(),o.TgZ(112,"ion-col",30)(113,"a",35),o._UZ(114,"ion-img",36),o.qZA()(),o.TgZ(115,"ion-col",30)(116,"a",37),o._UZ(117,"ion-img",38),o.qZA()()()()(),o._UZ(118,"br")(119,"br"),o.qZA(),o._UZ(120,"ion-col",2),o.qZA(),o.TgZ(121,"ion-row",39),o._UZ(122,"ion-col",2)(123,"ion-col",2)(124,"ion-col",2)(125,"ion-col",2)(126,"ion-col",18)(127,"ion-col",2)(128,"ion-col",2)(129,"ion-col",2)(130,"ion-col",2),o.qZA(),o.TgZ(131,"ion-row",40),o._UZ(132,"ion-col",2),o.TgZ(133,"ion-col")(134,"h1",27),o._uU(135,"\xbfCOMO TRABAJAMOS?"),o.qZA()(),o._UZ(136,"ion-col",2),o.qZA(),o.TgZ(137,"ion-row",41),o._UZ(138,"ion-col",2),o.TgZ(139,"ion-col")(140,"ion-card",41)(141,"ion-grid")(142,"ion-row")(143,"ion-col")(144,"ion-card",42)(145,"ion-card-header"),o._UZ(146,"ion-icon",43),o.qZA(),o.TgZ(147,"ion-card-content",44),o._uU(148," Evaluaci\xf3n t\xe9cnica presencial, donde evaluamos las distintas variables de acuerdo a lo que necesita nuestr@ cliente. "),o.qZA()()(),o.TgZ(149,"ion-col")(150,"ion-card",42)(151,"ion-card-header"),o._UZ(152,"ion-icon",45),o.qZA(),o.TgZ(153,"ion-card-content",44),o._uU(154," Exponemos las distintas alternativas de climatizaci\xf3n factibles para su domicilio o empresa. "),o.qZA()()(),o.TgZ(155,"ion-col")(156,"ion-card",42)(157,"ion-card-header"),o._UZ(158,"ion-icon",46),o.qZA(),o.TgZ(159,"ion-card-content",44),o._uU(160," Agendamos la instalaci\xf3n o el mantenimiento en un horario disponible y conveniente para usted. "),o.qZA()()(),o.TgZ(161,"ion-col")(162,"ion-card",42)(163,"ion-card-header"),o._UZ(164,"ion-icon",47),o.qZA(),o.TgZ(165,"ion-card-content",44),o._uU(166," Puede realizar con nuestro equipo todos los mantenimientos preventivos a sus equipos de climatizaci\xf3n. "),o.qZA()()()()()(),o._UZ(167,"br")(168,"br"),o.qZA(),o._UZ(169,"ion-col",2),o.qZA(),o.TgZ(170,"ion-row",48),o._UZ(171,"ion-col",2),o.TgZ(172,"ion-col")(173,"div"),o._UZ(174,"br")(175,"br"),o.TgZ(176,"h1",27),o._uU(177,"CONSULTAS"),o.qZA(),o.TgZ(178,"p",49),o._uU(179,"En nuestra secci\xf3n de preguntas frecuentes respondemos las principales consultas de nuestros clientes"),o.qZA()()(),o._UZ(180,"ion-col",2),o.qZA(),o.TgZ(181,"ion-row",50)(182,"ion-row",51)(183,"ion-card",52)(184,"ion-card-header",53),o._UZ(185,"ion-icon",54),o.TgZ(186,"ion-card-title",55),o._uU(187,"\xbfEN QU\xc9 COMUNAS TRABAJAN?"),o.qZA(),o.TgZ(188,"ion-card-subtitle",56),o._uU(189,"Actualmente trabajamos en todas las comunas de la Regi\xf3n Metropolitana."),o.qZA()()(),o.TgZ(190,"ion-card",52)(191,"ion-card-header",57),o._UZ(192,"ion-icon",54),o.TgZ(193,"ion-card-title",55),o._uU(194,"\xbfQU\xc9 MEDIOS DE PAGO RECIBEN?"),o.qZA(),o.TgZ(195,"ion-card-subtitle",56),o._uU(196,"Puedes pagar a trav\xe9s de:Efectivo Transferencia electr\xf3nica "),o.qZA()()()()(),o.TgZ(197,"ion-row",58)(198,"ion-card",52)(199,"ion-card-header",57),o._UZ(200,"ion-icon",54),o.TgZ(201,"ion-card-title",55),o._uU(202,"\xbfREALIZAN INSTALACI\xd3N DE CALDERAS PARA AGUA CALIENTE SANITARIA?"),o.qZA(),o.TgZ(203,"ion-card-subtitle",56),o._uU(204,"S\xed, trabajamos con calderas mixtas que permiten la producci\xf3n de agua caliente para vivienda o empresa."),o.qZA()()(),o.TgZ(205,"ion-card",52)(206,"ion-card-header",57),o._UZ(207,"ion-icon",54),o.TgZ(208,"ion-card-title",55),o._uU(209,"\xbfLAS INSTALACIONES DE EQUIPOS REALIZADAS TIENEN GARANT\xcdA?"),o.qZA(),o.TgZ(210,"ion-card-subtitle",56),o._uU(211,"S\xed, todas nuestras instalaciones de equipos de climatizaci\xf3n cuentan con un tiempo determinado de garant\xeda."),o.qZA()()()(),o.TgZ(212,"ion-row",26),o._UZ(213,"ion-col",2)(214,"ion-col",2)(215,"ion-col",2)(216,"ion-col",2)(217,"ion-col",18)(218,"ion-col",2)(219,"ion-col",2)(220,"ion-col",2)(221,"ion-col",2),o.qZA(),o.TgZ(222,"ion-row",59),o._UZ(223,"ion-col",2),o.TgZ(224,"ion-col")(225,"h3",60),o._uU(226,"QUIERES COTIZAR?"),o.qZA(),o.TgZ(227,"h1",61),o._uU(228,"OBTEN LA MEJOR SOLUCION A LA CLIMATIZACION DE AMBIENTES"),o.qZA(),o._UZ(229,"br")(230,"br")(231,"br")(232,"br"),o.TgZ(233,"ion-row",62),o._UZ(234,"ion-col",2),o.TgZ(235,"ion-col")(236,"ion-row")(237,"ion-col",63)(238,"div",64)(239,"p",65),o._uU(240,"CONTACTANOS"),o.qZA(),o.TgZ(241,"p",66),o._uU(242,"Formulario de contacto"),o.qZA()()()(),o.TgZ(243,"ion-row")(244,"ion-col")(245,"ion-list",67)(246,"ion-grid")(247,"ion-row",68)(248,"ion-col")(249,"ion-item")(250,"ion-label",69),o._uU(251,"Nombre y Apellido"),o.qZA(),o._UZ(252,"ion-input",70),o.qZA()()(),o.TgZ(253,"ion-row",68)(254,"ion-col")(255,"ion-item")(256,"ion-label",69),o._uU(257,"Email"),o.qZA(),o._UZ(258,"ion-input",71),o.qZA()()(),o.TgZ(259,"ion-row",68)(260,"ion-col")(261,"ion-item")(262,"ion-label",69),o._uU(263,"Tel\xe9fono"),o.qZA(),o._UZ(264,"ion-input",72),o.qZA()()(),o.TgZ(265,"ion-row",68)(266,"ion-col")(267,"ion-item")(268,"ion-label",69),o._uU(269,"Asunto"),o.qZA(),o._UZ(270,"ion-input",73),o.qZA()()()()()(),o.TgZ(271,"ion-col")(272,"ion-list",67)(273,"ion-grid")(274,"ion-row",68)(275,"ion-col")(276,"ion-item")(277,"ion-label",69),o._uU(278,"Mensaje"),o.qZA(),o._UZ(279,"ion-textarea",74),o.qZA()()()()(),o.TgZ(280,"ion-button",75),o.NdJ("click",function(){return i.enviarFormulario()}),o._uU(281,"Enviar"),o.qZA()()()(),o._UZ(282,"ion-col",2),o.qZA(),o._UZ(283,"br")(284,"br")(285,"br")(286,"br")(287,"br")(288,"br")(289,"br")(290,"br")(291,"br")(292,"br")(293,"br")(294,"br")(295,"br")(296,"br")(297,"br")(298,"br"),o.qZA(),o._UZ(299,"ion-col",2),o.qZA(),o.TgZ(300,"ion-row",76),o._UZ(301,"ion-col",2),o.TgZ(302,"ion-col",63)(303,"div",77)(304,"p",78),o._uU(305,"CONTACTANOS"),o.qZA(),o.TgZ(306,"p",79),o._uU(307,"Formulario de contacto"),o.qZA()(),o.TgZ(308,"ion-row",80),o._UZ(309,"ion-col",2)(310,"ion-col",2)(311,"ion-col",2)(312,"ion-col",2)(313,"ion-col",81)(314,"ion-col",2)(315,"ion-col",2)(316,"ion-col",2)(317,"ion-col",2),o.qZA(),o.TgZ(318,"ion-list",67),o._UZ(319,"ion-icon",82),o.TgZ(320,"ion-label",53),o._uU(321,"Lunes a viernes 09:00 a 18:00"),o.qZA(),o._UZ(322,"br")(323,"br")(324,"ion-icon",83),o.TgZ(325,"ion-label",53),o._uU(326,"+56 9 58280310"),o.qZA(),o._UZ(327,"br")(328,"br")(329,"ion-icon",84),o.TgZ(330,"ion-label",53),o._uU(331,"+56 9 58280310"),o.qZA(),o._UZ(332,"br")(333,"br")(334,"ion-icon",85),o.TgZ(335,"ion-label",53),o._uU(336,"correoEjemplo@gmail.com"),o.qZA(),o._UZ(337,"br")(338,"br")(339,"ion-icon",86),o.TgZ(340,"ion-label",53),o._uU(341,"@InstaEjemplo"),o.qZA()()(),o._UZ(342,"ion-col",2),o.qZA(),o._UZ(343,"ion-col",2),o.qZA()()),2&n&&(o.xp6(23),o.Q6J("ngIf",i.showMenu),o.xp6(4),o.Q6J("ngIf",i.showMenu2),o.xp6(4),o.Q6J("ngIf",i.showMenu3))},dependencies:[g.O5,t.YG,t.PM,t.FN,t.Zi,t.tO,t.Dq,t.wI,t.W2,t.jY,t.gu,t.Xz,t.pK,t.Ie,t.Q$,t.q_,t.Nd,t.g2,t.j9],styles:['@charset "UTF-8";.ion-content-full-screen[_ngcontent-%COMP%]{--ion-padding-start: 0;--ion-padding-end: 0;padding-left:50px;padding-right:50px}.rectangulo[_ngcontent-%COMP%]{width:100%;height:35px;background-color:#74bfbb;display:flex;align-items:center;justify-content:center}.rectangulo2[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;z-index:3;width:100%;height:auto;background-color:#efeeee;display:flex;align-items:center;justify-content:center}.rectangulo3[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;background-image:url(fondololo.e14e46d7411442b3.jpg);background-size:cover;background-position:center;padding:20px;color:#498b87;font-size:30px;text-align:center;height:600px}.rectangulo4[_ngcontent-%COMP%]{width:100%;height:1100px;background-color:#fff;display:flex;align-items:center;justify-content:center}.rectangulo5[_ngcontent-%COMP%]{width:100%;height:500px;background-color:#efeeee;display:flex;align-items:center;justify-content:center;position:relative}.rectangulo6[_ngcontent-%COMP%]{width:100%;height:60px;background-color:#efeeee;display:flex;align-items:center;justify-content:center}.rectangulo7[_ngcontent-%COMP%]{width:100%;height:50px;background-color:#efeeee;display:flex;justify-content:center}.rectangulo8[_ngcontent-%COMP%]{width:100%;height:auto;background-color:#efeeee;display:flex;justify-content:center}.rectangulo9[_ngcontent-%COMP%]{width:100%;height:auto;background-color:#fff;display:flex;justify-content:center}.rectangulo10[_ngcontent-%COMP%]{width:100%;height:auto;background-color:#fff;display:flex;align-items:center;justify-content:center}.rectangulo11[_ngcontent-%COMP%]{width:100%;height:280;background-color:#fff;display:flex;justify-content:center}.rectangulo12[_ngcontent-%COMP%]{width:100%;height:auto;background-color:#efeeee;display:flex;align-items:center;justify-content:center;position:relative}.rectangulo13[_ngcontent-%COMP%]{width:100%;height:300px;background-color:#efeeee;display:flex;align-items:center;justify-content:center;position:relative}.rectangulo14[_ngcontent-%COMP%]{width:100%;height:60px;background-color:#fff;display:flex;align-items:center;justify-content:center}.custom-button[_ngcontent-%COMP%]{--background: #498B87;--color: white;--box-shadow: none;--ion-box-shadow: none;box-shadow:none}.lista-sin-lineas[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--inner-border-width: 0;--border-width: 0}.barra-uno[_ngcontent-%COMP%]{width:50px;height:10px;background-color:#76b8b4;display:flex;top:0;justify-content:center}.barra-dos[_ngcontent-%COMP%]{width:50px;height:10px;background-color:#76b8b4;position:absolute;top:0;left:0;right:0}.boton-con-imagen[_ngcontent-%COMP%]{background-image:url(logo-sin-fondo.4c4c7c019fa6610a.png);background-repeat:no-repeat;text-align:center;color:#fff}.imagen-centrada[_ngcontent-%COMP%]{display:flex;justify-content:center;width:200px}.titulo[_ngcontent-%COMP%]{color:#498b97;font-size:40px;margin:0}ion-card[_ngcontent-%COMP%]{border:none;box-shadow:none}p[_ngcontent-%COMP%]{color:#498b87}.container[_ngcontent-%COMP%]{--background: #efeded}.centered-p[_ngcontent-%COMP%]{text-align:center}.menu-desplegable[_ngcontent-%COMP%]{display:none;position:absolute;top:100%;left:0;background-color:#efeeee;border:1px solid #EFEEEE;z-index:1;color:#498b87}ion-col[_ngcontent-%COMP%]:hover   .menu-desplegable[_ngcontent-%COMP%]{display:block}.lista-sin-lineas[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{height:auto;--inner-border-width: 0 ;--border-width: 0 ;font-size:14px;padding:2px}.menu-item[_ngcontent-%COMP%]{font-size:12px}.rectangulo15[_ngcontent-%COMP%]{display:flex;justify-content:center;background-image:url(fondoweno.c0f8b64d1eb07277.jpg);background-size:cover;background-position:center;height:600px;width:100%;align-items:center;text-align:center}.rectangulo16[_ngcontent-%COMP%]{display:flex;justify-content:center;background-color:#efeeee;background-size:cover;background-position:center;text-align:center;height:600px;width:100%}.rectangulo17[_ngcontent-%COMP%]{width:50%;height:550px;background-color:#efeeee;display:flex;position:absolute;right:0;z-index:2}.rectangulo18[_ngcontent-%COMP%]{width:100%;height:50px;background-color:#efeeee;display:flex;justify-content:center;margin-top:10px}.barra-tres[_ngcontent-%COMP%]{width:100px;height:10px;background-color:#76b8b4;left:0;position:absolute}']}),l})()}];let f=(()=>{var e;class l{}return(e=l).\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[s.Bz.forChild(_),s.Bz]}),l})(),h=(()=>{var e;class l{}return(e=l).\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[g.ez,d.u5,t.Pc,f]}),l})()}}]);