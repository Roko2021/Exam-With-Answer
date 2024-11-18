//اختيار الازرار

let answer11 = document.getElementById('answer11');
let answer12 = document.getElementById('answer12');
let answer13 = document.getElementById('answer13');
let answer21 = document.getElementById('answer21');
let answer22 = document.getElementById('answer22');
let answer23 = document.getElementById('answer23');
let answer31 = document.getElementById('answer31');
let answer32 = document.getElementById('answer32');
let answer33 = document.getElementById('answer33');
let answer41 = document.getElementById('answer41');
let answer42 = document.getElementById('answer42');
let answer43 = document.getElementById('answer43');
let answer51 = document.getElementById('answer51');
let answer52 = document.getElementById('answer52');
let answer53 = document.getElementById('answer53');
let answer61 = document.getElementById('answer61');
let answer62 = document.getElementById('answer62');
let answer63 = document.getElementById('answer63');


let correct1 = document.getElementById('correct1');
let correct2 = document.getElementById('correct2');
let correct3 = document.getElementById('correct3');
let correct4 = document.getElementById('correct4');
let correct5 = document.getElementById('correct5');
let correct6 = document.getElementById('correct6');

//الدرجات

let natg = document.getElementById('natg');

let natg1 = 0;
let natg2 = 0;
let natg3 = 0;
let natg4 = 0;
let natg5 = 0;
let natg6 = 0;

let natg7 = 0;
let natg8 = 0;
let natg9 = 0;
let natg10 = 0;
let natg11 = 0;
let natg12 = 0;


let natg13 = 0;
let natg14 = 0;
let natg15 = 0;
let natg16 = 0;
let natg17 = 0;
let natg18 = 0;
let natg19 = 0;
let natg20 = 0;
let natg21 = 0;
let natg22 = 0;
let natg23 = 0;
let natg24 = 0;
let natg25 = 0;
let natg26 = 0;
let natg27 = 0;
let natg28 = 0;



//تنفيذ الاختيار الصحيح

function test(){
    answer11.classList.remove('answer',);
    answer12.classList.remove('answer');
    answer13.classList.remove('answer');
    correct1.classList.remove('answer');
}
function test2(){
    answer21.classList.remove('answer');
    answer22.classList.remove('answer');
    answer23.classList.remove('answer');
    correct2.classList.remove('answer');
}
function test3(){
    answer31.classList.remove('answer');
    answer32.classList.remove('answer');
    answer33.classList.remove('answer');
    correct3.classList.remove('answer');
}
function test4(){
    answer41.classList.remove('answer');
    answer42.classList.remove('answer');
    answer43.classList.remove('answer');
    correct4.classList.remove('answer');
}
function test5(){
    answer51.classList.remove('answer');
    answer52.classList.remove('answer');
    answer53.classList.remove('answer');
    correct5.classList.remove('answer');
}
function test6(){
    answer61.classList.remove('answer');
    answer62.classList.remove('answer');
    answer63.classList.remove('answer');
    correct6.classList.remove('answer');
}

// تغيير شكل الزر مع حساب الدرجات

answer11.addEventListener('click', (e)=>{
    test();
    e.currentTarget.classList.add('answer');
    if(natg1 <= 0){
        return
    }
    natg1--;
})
answer12.addEventListener('click', (e)=>{
    test();
    e.currentTarget.classList.add('answer');
    if(natg1 <= 0){
        return
    }
    natg1--;
})
answer13.addEventListener('click', (e)=>{
    test();
    e.currentTarget.classList.add('answer');
    if(natg1 <= 0){
        return
    }
    natg1--;
})
answer21.addEventListener('click', (e)=>{
    test2();
    e.currentTarget.classList.add('answer');
    if(natg2 <= 0){
        return
    }
    natg2--;
})
answer22.addEventListener('click', (e)=>{
    test2();
    e.currentTarget.classList.add('answer');
    if(natg2 <= 0){
        return
    }
    natg2--;
})
answer23.addEventListener('click', (e)=>{
    test2();
    e.currentTarget.classList.add('answer');
    if(natg2 <= 0){
        return
    }
    natg2--;
})
answer31.addEventListener('click', (e)=>{
    test3();
    e.currentTarget.classList.add('answer');
    if(natg3 <= 0){
        return
    }
    natg3--;
})
answer32.addEventListener('click', (e)=>{
    test3();
    e.currentTarget.classList.add('answer');
    if(natg3 <= 0){
        return
    }
    natg3--;
})
answer33.addEventListener('click', (e)=>{
    test3();
    e.currentTarget.classList.add('answer');
    if(natg3 <= 0){
        return
    }
    natg3--;
})
answer41.addEventListener('click', (e)=>{
    test4();
    e.currentTarget.classList.add('answer');
    if(natg4 <= 0){
        return
    }
    natg4--;
})
answer42.addEventListener('click', (e)=>{
    test4();
    e.currentTarget.classList.add('answer');
    if(natg4 <= 0){
        return
    }
    natg4--;
})
answer43.addEventListener('click', (e)=>{
    test4();
    e.currentTarget.classList.add('answer');
    if(natg4 <= 0){
        return
    }
    natg4--;
})
answer51.addEventListener('click', (e)=>{
    test5();
    e.currentTarget.classList.add('answer');
    if(natg5 <= 0){
        return
    }
    natg5--;
})
answer52.addEventListener('click', (e)=>{
    test5();
    e.currentTarget.classList.add('answer');
    if(natg5 <= 0){
        return
    }
    natg5--;
})
answer53.addEventListener('click', (e)=>{
    test5();
    e.currentTarget.classList.add('answer');
    if(natg5 <= 0){
        return
    }
    natg5--;
})
answer61.addEventListener('click', (e)=>{
    test6();
    e.currentTarget.classList.add('answer');
    if(natg6 <= 0){
        return
    }
    natg6--;
})
answer62.addEventListener('click', (e)=>{
    test6();
    e.currentTarget.classList.add('answer');
    if(natg6 <= 0){
        return
    }
    natg6--;
})
answer63.addEventListener('click', (e)=>{
    test6();
    e.currentTarget.classList.add('answer');
    if(natg6 <= 0){
        return
    }
    natg6--;
})

correct1.addEventListener('click', (e)=>{
    test();
    e.currentTarget.classList.add('answer');
    if(natg1 >= 1){
        return
    }
    natg1++;
})
correct2.addEventListener('click', (e)=>{
    test2();
    e.currentTarget.classList.add('answer');
    if(natg2 >= 1){
        return
    }
    natg2++;
})
correct3.addEventListener('click', (e)=>{
    test3();
    e.currentTarget.classList.add('answer');
    if(natg3 >= 1){
        return
    }
    natg3++;
})
correct4.addEventListener('click', (e)=>{
    test4();
    e.currentTarget.classList.add('answer');
    if(natg4 >= 1){
        return
    }
    natg4++;
})
correct5.addEventListener('click', (e)=>{
    test5();
    e.currentTarget.classList.add('answer');
    if(natg5 >= 1){
        return
    }
    natg5++;
})
correct6.addEventListener('click', (e)=>{
    test6();
    e.currentTarget.classList.add('answer');
    if(natg6 >= 1){
        return
    }
    natg6++;
    
})

//السؤال الثانى

let answer71 = document.getElementById('answer71');
let answer72 = document.getElementById('answer72');
let answer73 = document.getElementById('answer73');
let answer74 = document.getElementById('answer74');

//تقييم الاجابه الصحيحه

function test7(){
    if(answer71.value.indexOf('160') != -1){
        if(natg7 >= 1.5){
            return
        }
        natg7 = 1.5;;
    }
    if(answer71.value.indexOf('160')){
        if(natg7 <= -1.5){
            return
        }
        natg7 = 0;;
    }
}
function test8(){
    if(answer72.value.indexOf('الضلع الواصل بين') != -1){
        if(natg8 >= 1){
            return
        }
        natg8 = 1.5;
    }
    if(answer72.value.indexOf('الضلع الواصل بين')){
        if(natg8 <= 0){
            return
        }
        natg8 = 0;
    }
}
function test9(){
    if(answer73.value.indexOf('متواز') != -1){
        if(natg9 >= 1){
            return
        }
        natg9 = 1.5;
    }
    if(answer73.value.indexOf('متواز')){
        if(natg9 <= 0){
            return
        }
        natg9 = 0;
    }
}
function test10(){
    if(answer74.value.indexOf('عدد لا') != -1){
        if(natg10 >= 1){
            return
        }
        natg10 = 1.5;
    }
    if(answer74.value.indexOf('عدد لا')){
        if(natg10 <= 0){
            return
        }
        natg10 = 0;
    }
}

//اختير ازرار السؤال الثالث

let answer81 = document.getElementById('answer81');
let answer82 = document.getElementById('answer82');
let answer83 = document.getElementById('answer83');
let answer84 = document.getElementById('answer84');
let answer85 = document.getElementById('answer85');
let answer86 = document.getElementById('answer86');
let answer87 = document.getElementById('answer87');

function test11(){
    if(answer81.value.indexOf(90) !=-1){
        if(natg11 >= 1){
            return
        }
        natg11 = 1;
    }
    if(answer81.value.indexOf(90)){
        if(natg11 <= 0){
            return
        }
        natg11 = 0;
    }
}
function test12(){
    if(answer82.value.indexOf(140) != -1){
        if(natg12 >= 1){
            return
        }
        natg12 = 1;
    }
    if(answer82.value.indexOf(140)){
        if(natg12 <= 0){
            return
        }
        natg12 = 0;
    }
}
function test13(){
    if(answer83.value.indexOf(230) != -1){
        if(natg13 >= 1){
            return
        }
        natg13 = 1;
    }
    if(answer83.value.indexOf(230)){
        if(natg13 <= 0){
            return
        }
        natg13 = 0;
    }
}
function test14(){
    if(answer84.value.indexOf(130) != -1){
        if(natg14 >= 1){
            return
        }
        natg14 = 1;
    }
    if(answer84.value.indexOf(130)){
        if(natg14 <= 0){
            return
        }
        natg14 = 0;
    }
}
function test15(){
    if(answer85.value.indexOf(140) != -1){
        if(natg15 >= 1){
            return
        }
        natg15 = 1;
    }
    if(answer85.value.indexOf(140)){
        if(natg15 <= 0){
            return
        }
        natg15 = 0;
    }
}
function test16(){
    if(answer86.value.indexOf(40) != -1){
        if(natg16 >= 1){
            return
        }
        natg16 = 1;
    }
    if(answer86.value.indexOf(40)){
        if(natg15 <= 0){
            return
        }
        natg16 = 0;
    }
}
function test17(){
    if(answer87.value.indexOf(40) != -1){
        if(natg17 >= 1){
            return
        }
        natg17 = 1;
    }
    if(answer87.value.indexOf(40)){
        if(natg17 <= 0){
            return
        }
        natg17 = 0;
    }
}
function test18(){
    if(answer88.value.indexOf(20) != -1){
        if(natg18 >= 1){
            return
        }
        natg18 = 1;
    }
    if(answer88.value.indexOf(20)){
        if(natg18 <= 0){
            return
        }
        natg18 = 0;
    }
}

//اختيار ازرار السؤال الرابع

let answer91 = document.getElementById('answer91')
let answer92 = document.getElementById('answer92')
let answer93 = document.getElementById('answer93')
let answer94 = document.getElementById('answer94')
let answer95 = document.getElementById('answer95')
let answer96 = document.getElementById('answer96')
let answer97 = document.getElementById('answer97')
// let answer100 = answer91.value.split(' ')

function test19(){
    
    if( answer91.value.indexOf('ادج') != -1 || answer91.value.indexOf('ا د ج') != -1 || answer91.value.indexOf('أدج') != -1 || answer91.value.indexOf('أ د ج') != -1){
        if(natg19 >= 1){
            return
        }
        natg19 = 1;
    }else{
        natg19 = 0;
    }
}

function test20(){
    if( answer92.value.indexOf('ادج') != -1 || answer92.value.indexOf('ا د ج') != -1 || answer92.value.indexOf('أدج') != -1 || answer92.value.indexOf('أ د ج') != -1){
        if(natg20 >= 1){
            return
        }
        natg20 = 1;
    }else{
        natg20 = 0;
    }
}
function test21(){
    if(answer93.value.indexOf(70) != -1){
        if(natg21 >= 1){
            return
        }
        natg21 = 1;
    }else{
        natg21 = 0;
    }
}
function test22(){
    if(answer94.value.indexOf(5) != -1){
        if(natg22 >= 1){
            return
        }
        natg22 = 1;
    }else{
        natg22 = 0;
    }
}
function test23(){
    if(answer95.value.indexOf('ا') != -1 ||answer95.value.indexOf('أ') != -1){
        if(natg23 >= 1){
            return
        }
        natg23 = 1;
    }else{
        natg23 = 0;
    }
}
function test24(){
    if(answer96.value.indexOf(40) != -1 ){
        if(natg24 >= 1){
            return
        }
        natg24 = 1;
    }else{
        natg24 = 0;
    }
}
function test25(){
    if(answer97.value.indexOf('تبادل') != -1 || answer97.value.indexOf('تبأدل') != -1 ){
        if(natg25 >= 1){
            return
        }
        natg25 = 1;
    }else{
        natg25 = 0;
    }
}
function test26(){
    if(answer101.value.indexOf('هج') != -1 || answer101.value.indexOf('ه ج') != -1 ){
        if(natg26 >= 1){
            return
        }
        natg26 = 1;
    }else{
        natg26 = 0;
    }
}
function test27(){
    if(answer102.value.indexOf(2) != -1 ){
        if(natg27 >= 1){
            return
        }
        natg27 = 1;
    }else{
        natg27 = 0;
    }
}
function test28(){
    if(answer103.value.indexOf(4) != -1 ){
        if(natg28 >= 1){
            return
        }
        natg28 = 1;
    }else{
        natg28 = 0;
    }
}

let daraga = natg1 + natg2 + natg3 +natg4 +natg5 +natg6 +natg7 + natg8 +natg9 +natg10 +natg11 +natg12 +natg13 +natg14 + natg15+ natg16+ natg17+ natg18+ natg19+ natg20+ natg21+ natg22+ natg23+ natg24+ natg25+ natg26+ natg27+ natg28;

let nateg = document.getElementById('nateg');
nateg.addEventListener('click', ()=>{
    console.log(answer95.value);
    test7();
    test8();
    test9();
    test10();
    test11();
    test12();
    test13();
    test14();
    test15();
    test16();
    test17();
    test18();
    test19();
    test20();
    test21();
    test22();
    test23();
    test24();
    test25();
    test26();
    test27();
    test28();
    natg.textContent = natg1 + natg2 + natg3 +natg4 +natg5 +natg6 +natg7 + natg8 +natg9 +natg10 +natg11 +natg12 +natg13 +natg14 + natg15+ natg16+ natg17+ natg18+ natg19+ natg20+ natg21+ natg22+ natg23+ natg24+ natg25+ natg26+ natg27+ natg28;
})

