

   let wb = document.querySelector("#header");
   function animatewb(){
   TweenMax.to("#header", 0.5, {scale:1.2, transformOrigin: "50% 50%",});
   TweenMax.to("#st7", 0.5, {transformOrigin: "50% 50%",opacity:0,});
   }
   function unanimatewb(){
   TweenMax.to("#header", 0.5, {scale:1, transformOrigin: "50% 50%"});
   TweenMax.to("#st7", 0.5, { transformOrigin: "50% 50%", opacity:1});

   }

    wb.addEventListener("mouseover", animatewb);
    wb.addEventListener("mouseout", unanimatewb);




/*circle no.1*/
TweenMax.to("#darkredCircle", 0.001, {opacity:1});
function show(){
TweenMax.to("#darkredCircle", 0.5, {opacity:1,delay:0});
}
document.querySelector("#darkredCircle").addEventListener("mouseover", show)

TweenMax.to("#inside", 0.001, {opacity:0});
function show(){
TweenMax.to("#inside", 0.5, {opacity:1  ,delay:0});
}
document.querySelector("#inside").addEventListener("mouseout", show)

TweenMax.to("#outer", 0.001, {opacity:0});
function show_1_(){
TweenMax.to("#outer", 0.8, {opacity:1  ,delay:0});
}
document.querySelector("#outer").addEventListener("mouseover", show_1_)


/*circle no.2*/
TweenMax.to("#blackCircle", 0.001, {opacity:1});
function show2(){
TweenMax.to("#blackCircle", 0.5, {opacity:1,delay:0});
}
document.querySelector("#blackCircle").addEventListener("mouseover", show2)

TweenMax.to("#inside-2", 0.001, {opacity:0});
function show2(){
TweenMax.to("#inside-2", 0.5, {opacity:1  ,delay:0});
}
document.querySelector("#inside-2").addEventListener("mouseout", show2)

TweenMax.to("#outer-2", 0.001, {opacity:0});
function show2_1_(){
TweenMax.to("#outer-2", 0.5, {opacity:1  ,delay:0});
}
document.querySelector("#outer-2").addEventListener("mouseover", show2_1_)


/*circle no.3*/
TweenMax.to("#skyblueCircle", 0.001, {opacity:1});
function show3(){
TweenMax.to("#skyblueCircle", 0.5, {opacity:1,delay:0});
}
document.querySelector("#skyblueCircle").addEventListener("mouseover", show3)

TweenMax.to("#inside-3", 0.001, {opacity:0});
function show3(){
TweenMax.to("#inside-3", 0.5, {opacity:1  ,delay:0});
}
document.querySelector("#inside-3").addEventListener("mouseout", show3)

TweenMax.to("#outer-3", 0.001, {opacity:0});
function show3_1_(){
TweenMax.to("#outer-3", 0.5, {opacity:1  ,delay:0});
}
document.querySelector("#outer-3").addEventListener("mouseover", show3_1_)


/*circle no.4*/
TweenMax.to("#redCircle", 0.001, {opacity:1});
function show4(){
TweenMax.to("#redCircle", 0.5, {opacity:1,delay:0});
}
document.querySelector("#redCircle").addEventListener("mouseover", show4)

TweenMax.to("#inside-4", 0.001, {opacity:0});
function show4(){
TweenMax.to("#inside-4", 0.5, {opacity:1  ,delay:0});
}
document.querySelector("#inside-4").addEventListener("mouseout", show4)

TweenMax.to("#outer-4", 0.001, {opacity:0});
function show4_1_(){
TweenMax.to("#outer-4", 0.8, {opacity:1  ,delay:0});
}
document.querySelector("#outer-4").addEventListener("mouseover", show4_1_)


/*circle no.5*/
TweenMax.to("#silverCircle", 0.001, {opacity:1});
function show5(){
TweenMax.to("#silverCircle", 0.5, {opacity:1,delay:0});
}
document.querySelector("#silverCircle").addEventListener("mouseover", show5)

TweenMax.to("#inside-5", 0.001, {opacity:0});
function show5(){
TweenMax.to("#inside-5", 0.5, {opacity:1  ,delay:0});
}
document.querySelector("#inside-5").addEventListener("mouseout", show5)

TweenMax.to("#outer-5", 0.001, {opacity:0});
function show5_1_(){
TweenMax.to("#outer-5", 0.8, {opacity:1  ,delay:0});
}
document.querySelector("#outer-5").addEventListener("mouseover", show5_1_)


/*circle no.6*/
TweenMax.to("#yellowCircle", 0.001, {opacity:1});
function show6(){
TweenMax.to("#yellowCircle", 0.5, {opacity:1,delay:0});
}
document.querySelector("#yellowCircle").addEventListener("mouseover", show6)

TweenMax.to("#inside-6", 0.001, {opacity:0});
function show6(){
TweenMax.to("#inside-6", 0.5, {opacity:1  ,delay:0});
}
document.querySelector("#inside-6").addEventListener("mouseout", show6)

TweenMax.to("#outer-6", 0.001, {opacity:0});
function show6_1_(){
TweenMax.to("#outer-6", 0.8, {opacity:1  ,delay:0});
}
document.querySelector("#outer-6").addEventListener("mouseover", show6_1_)


/*circle no.7*/
TweenMax.to("#blueCircle", 0.001, {opacity:1});
function show7(){
TweenMax.to("#blueCircle", 0.5, {opacity:1,delay:0});
}
document.querySelector("#blueCircle").addEventListener("mouseover", show7)

TweenMax.to("#inside-7", 0.001, {opacity:0});
function show7(){
TweenMax.to("#inside-7", 0.5, {opacity:1  ,delay:0});
}
document.querySelector("#inside-7").addEventListener("mouseout", show7)

TweenMax.to("#outer-7", 0.001, {opacity:0});
function show7_1_(){
TweenMax.to("#outer-7", 0.8, {opacity:1  ,delay:0});
}
document.querySelector("#outer-7").addEventListener("mouseover", show7_1_)


/*circle no.8*/
TweenMax.to("#orangeCircle", 0.001, {opacity:1});
function show8(){
TweenMax.to("#orangeCircle", 0.5, {opacity:1,delay:0});
}
document.querySelector("#orangeCircle").addEventListener("mouseover", show8)

TweenMax.to("#inside-8", 0.001, {opacity:0});
function show8(){
TweenMax.to("#inside-8", 0.5, {opacity:1  ,delay:0});
}
document.querySelector("#inside-8").addEventListener("mouseout", show8)

TweenMax.to("#outer-8", 0.001, {opacity:0});
function show8_1_(){
TweenMax.to("#outer-8", 0.8, {opacity:1  ,delay:0});
}
document.querySelector("#outer-8").addEventListener("mouseover", show8_1_)

    

//barchart
TweenMax.to("#bar", 0.001, {opacity:1});
function showall(){
TweenMax.to("#bar", 0.5, {opacity:1,delay:0});
}
document.querySelector("#bar").addEventListener("mouseover", showall)
