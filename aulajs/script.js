/*Fazendo a média entre duas notas e colocando as datas de prova*/
function prova(){
    return Math.floor(Math.random() * 10 + 1);
}

function verificarProva(){
    let nota1 = prova();
    let nota2 = prova();
    let total = ((nota1 + nota2) / 2);



const data = new Date('2024-04-23');
data.setDate(data.getDate()+8)
console.log(`${data} você fará o chekpoint2 e sua nota será  ${nota1}`);
data.setDate(data.getDate()+58)
console.log(`${data} você fará o sprint1 e sua nota será  ${nota2}`);
console.log(`Sua média será de ${total}`)
}
verificarProva();