export const obterDataAtualPorExtenso = (date: Date) => {

  
    // Array com os nomes dos meses
    const meses: string[] = [
      'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
      'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];
  
    // Array com os nomes dos dias da semana
    const diasDaSemana: string[] = [
      'domingo', 'segunda-feira', 'terça-feira', 'quarta-feira',
      'quinta-feira', 'sexta-feira', 'sábado'
    ];
  
    // Obtém o dia da semana, dia, mês e ano
    const diaDaSemana: string = diasDaSemana[date.getDay()];
    const dia: number = date.getDate();
    const mes: string = meses[date.getMonth()];
    const ano: number = date.getFullYear();
  
    // Formata a data por extenso
    const dataPorExtenso: string = `${diaDaSemana}, ${dia} de ${mes} de ${ano}`;
  
    return dataPorExtenso;
  }
   
