var cont = 0;
while(cont<4){
    switch(cont){
        case 0:
            var  num1=20 ,num2 = 5
            console.log("\n 1- Los numeros Son " + num1 + " Y " +num2);
            console.log("SUMA : "+(num1+num2));
            console.log("RESTA : "+(num1-num2));
            console.log("MULTIPLICACIÓn : "+(num1*num2));
            console.log("DIVISIÓN : "+(num1/num2));
            break;
        case 1:
            let st1 = 'HOLA', st2=" MUNDO"
            console.log("\n2- El texto concatenado es:")
            console.log(st1 + st2)
            break;
        case 2:
            const pi=3.14, st3= "Hola"
            console.log("\n3- Las  Constante son pi= 3.14 y st3= hola");
            console.log("pi : "+ typeof(pi));
            console.log("st3 : "+ typeof(st3));

            break;
        case 3:
            var obj={ent:29,str4:"Mundo",boo:"true",objv:{}}
            console.log("\n4- EL Objeto esta coformado por:")
            console.log ("I- El valor es "+obj.ent);
            console.log ("II- El valor es "+obj.str4);
            console.log ("III- El valor es "+obj.boo);
            console.log ("IV- El valor es "+obj.objv);
            break;
    }
    cont++;    
}
console.log("\nLaboratorio Culminado...")