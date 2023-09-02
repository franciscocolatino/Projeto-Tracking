const linechartService = {
    reqLine: async () => {
        const response = await fetch('/kanban_columns.json', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          }).then((res) => res.json())
          
          const concluida = response[response.length-1]
          console.log(concluida) 
          const responseTwo = await fetch('/tasks.json', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          }).then((res) => res.json())
          
          
          // TORNAR O POSITION = ao kanban_column_id NÃO!!
        
        const data = {};

        responseTwo.forEach((value) => {
          const year = new Date(value.updated_at).getFullYear()
          const anoAtual = new Date().getFullYear()
          if (value.kanban_column_id === concluida.id && year == anoAtual) {
            const month = new Date(value.updated_at).getMonth() + 1;
            if (!data[month]) {
            data[month] = 0;
            }

            data[month]++;
        }
        });
        // VERIFICAR PARA PEGAR DADOS SOMENTE DO ANO ATUAL
        const mesesEmPortugues = {
          1: 'Janeiro',
          2: 'Fevereiro',
          3: 'Março',
          4: 'Abril',
          5: 'Maio',
          6: 'Junho',
          7: 'Julho',
          8: 'Agosto',
          9: 'Setembro',
          10: 'Outubro',
          11: 'Novembro',
          12: 'Dezembro',
        };

        const months = Object.keys(data).map(month => mesesEmPortugues[month])
        const values = Object.values(data);

        return [concluida.name, months, values]
    },
}

export default linechartService;