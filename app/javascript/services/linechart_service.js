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
        if (value.kanban_column_id === concluida.id) {
            const month = new Date(value.updated_at).getMonth() + 1; // +1 para ajustar o mês (0 a 11 para 1 a 12)

            if (!data[month]) {
            data[month] = 0;
            }

            data[month]++;
        }
        });
        console.log(data)
        /*responseTwo.map(value => {
            if (value.kanban_column_id == concluida.id) {
                const month = new Date(value.updated_at).getMonth() + 1
                data.push(month)
            }
        })*/
        console.log(data)
          /*response.forEach((value, index) => {
            data.push(responseTwo.reduce((accum, task) => {
              if (value.position == task.kanban_column_id) {
                accum += 1
              }
              return accum
            }, 0)) 
          })*/
        return [concluida.name, data]
    },
}

export default linechartService;