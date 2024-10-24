     function calcularSalario(){
        var calcularINSS = 0;
        var calcularIRPF = 0;
        var salario = 0;
        var qtdeHora = 0;
        var outrasDeducoes=0 ;
        var descontoINSS = 0;
        var descontoIRPF = 0;
        var descontoVT = 0;
        var salarioLiquido = 0;
        var respostaVT;

         var qtdeHora  = parseFloat (document.getElementById("horaid").value);
         var valorhora = parseFloat (document.getElementById("vhid").value);
         var respostaVT = document.getElementById("SNid").value;
         var outrasDeducoes = parseFloat(document.getElementById("deduçoesid").value);
         var res = document.getElementById("resul");

         salario = valorhora * qtdeHora;
         
         if(qtdeHora == 0){
             res.innerHTML = "Por favor, preencha todos os campos corretamente.";
             return;
         }

         if (salario <= 1320) {
             calcularINSS = salario * 0.075;
         }
         else if (salario <= 2571.29) {
             calcularINSS = (salario - 1320) * 0.09 + 99;
         }
         else if (salario <= 3856.94) {
             calcularINSS = (salario - 2571.29) * 0.12 + 225.11;
         }
         else {
             calcularINSS = (salario - 3856.94) * 0.14 + 387.63;
         }
 
        
         if (salario <= 2112) {
             calcularIRPF = 0;
         }
         else if (salario <= 2826.65) {
             calcularIRPF = 0.075 * (salario - 2112);
         }
         else if (salario <= 3751.05) {
             calcularIRPF = 0.15 * (salario - 2826.65) + 53.75;
         }
         else if (salario <= 4664.68) {
             calcularIRPF = 0.225 * (salario - 3751.06) + 158.95;
         }
         else {
             calcularIRPF = 0.275 * (salario - 4664.68) + 345.98;
         }

         descontoINSS = calcularINSS;
         descontoIRPF = calcularIRPF;

         if (respostaVT == "S")  {
             descontoVT = salario * 0.06;
         }

         salarioLiquido = (salario - descontoINSS - descontoIRPF - descontoVT - outrasDeducoes);


         res.innerHTML = (`Salário Bruto: R$ ${salario.toFixed(2)} || Desconto INSS: -R$ ${descontoINSS.toFixed(2)} || Desconto IRPF: -R$ ${descontoIRPF.toFixed(2)} || Desconto Vale Transporte: -R$ ${descontoVT.toFixed(2)} || Outras Deduções: -R$ ${outrasDeducoes.toFixed(2)} || Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`);
         
         
     }