let employees = [{ id: 101, name: "Rahul Gandhi", salary: 45000 },
{ id: 102, name: "Sonia Gandhi", salary: 55000 }]

let createEmployee = (emp, rajnikanth) => {
    setTimeout(() => {
        employees.push(emp)
        rajnikanth()
    }, 3000);
}
let getEmployee = () => {
    setTimeout(() => {
        let rows = ""
        employees.forEach((employee) => {
            rows += `<tr>
                      <td>${employee.id}</td>   
                      <td>${employee.name}</td>   
                      <td>${employee.salary}</td>   
                    </tr>`
        })
        document.getElementById('data').innerHTML = rows
    }, 1000)
}
createEmployee({ id: 103, name: "Priyanka Gandhi", salary: 65000 }, getEmployee);
// while invoking a function, passing a function as argument to another function - callback
//Promise   - then().catch()
//async & await 


//(()=>{})();