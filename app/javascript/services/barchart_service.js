const barchartService = {
    reqBar: async () => {
        const response = await fetch('/kanban_columns.json', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          }).then((res) => res.json())
          const responseFormated = response.map(column => column.name)
          const responseTwo = await fetch('/tasks.json', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          }).then((res) => res.json())
      
          // TORNAR O POSITION = ao kanban_column_id
          const data = []
          response.forEach((value, index) => {
            data.push(responseTwo.reduce((accum, task) => {
              if (value.id == task.kanban_column_id) {
                accum += 1
              }
              return accum
            }, 0))
          })
        return [responseFormated, data]
    },
}

export default barchartService;