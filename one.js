let employees = [{ id: 101, name: "Rahul", sal: 45000 },
{ id: 102, name: "Sonia", sal: 55000 }]
let createEmployee = (emp) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = true;
            flag ? resolve("Data Inserted") : reject("Not Inserted")
            employees.push(emp)
        }, 4000)
    });
}
let getEmployees = () => {
    

    setTimeout(() => {
        let rows = ""
        for (emp of employees) {
            rows = rows + `<tr>
              <td>${emp.id}</td>            
              <td>${emp.name}</td>            
              <td>${emp.sal}</td>            
            </tr>`
        }
        document.getElementById('abc').innerHTML = rows
    }, 1000)
}

createEmployee({ id: 103, name: "Priyanka", sal: 450000 })
    .then((msg) => {
        console.log(msg)
        getEmployees()
    })
    .catch((err) => {
        console.log(err)
    })