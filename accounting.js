'use strict';

let retrievedArr,objArr;
function getData( ) {     //get the data from localstorage into array
  retrievedArr = localStorage.getItem("employees");
  objArr=JSON.parse(retrievedArr)
  }
  getData()
  console.log(objArr)

 let admEmployees=0, markEmployees=0,devEmployees=0,finEmployees =0;
  function numberOfEmployees(){   //function to calc number of employees in each department
    if(objArr !=null)
  for(let i=0;i<objArr.length;i++){
  switch (objArr[i].Department){
  case "Administration":
  admEmployees++;
  break;
  case "Marketing":
  markEmployees++;
  break;
  case "Development" :
  devEmployees++
  break;
  case "Finance" :
  finEmployees++;
  break;
  }
}}
numberOfEmployees()

let admSalary=0, markSalary=0,devSalary=0,finSalary =0;
function totalSalary(){  // function to calc total salary in each department
  if(objArr !=null)
  for(let i=0;i<objArr.length;i++){
    switch (objArr[i].Department){
      case "Administration":
      admSalary+=objArr[i].Salary;
      break;
      case "Marketing":
      markSalary+=objArr[i].Salary;
      break;
      case "Development" :
      devSalary+=objArr[i].Salary;
      break;
      case "Finance" :
      finSalary+=objArr[i].Salary;
      break;
      }
}}
totalSalary()


  function renderTable() {
    let tableEle=document.getElementById("table")
    let tr1El = document.createElement("tr");  //1st row (headings)

    let th1El = document.createElement("th");
    th1El.textContent="Depatrment";
    tr1El.appendChild(th1El)

    let th2El = document.createElement("th");
    th2El.textContent="Number of Employees";
    tr1El.appendChild(th2El)

    let th3El = document.createElement("th");
    th3El.textContent="Total Salary";
    tr1El.appendChild(th3El)

    let th4El = document.createElement("th");
    th4El.textContent="Average Salary";
    tr1El.appendChild(th4El)

    let tr2El = document.createElement("tr");  //2nd row

    let td1= document.createElement("th")
    td1.textContent="Administration"
    tr2El.appendChild(td1)

    let td2= document.createElement("td")       //total number of administration employees
    td2.textContent=Math.round(admEmployees)
    tr2El.appendChild(td2)

    let td3= document.createElement("td")      //total number of administration salaries
    td3.textContent=Math.round(admSalary)
    tr2El.appendChild(td3)

    let td4= document.createElement("td")     // administration avg salary
    td4.textContent=admEmployees>0 ? Math.round(admSalary/admEmployees) : 0;
    tr2El.appendChild(td4)

    let tr3El = document.createElement("tr");  //3rd row

    let td5= document.createElement("th")
    td5.textContent="Marketing"
    tr3El.appendChild(td5)

    let td6= document.createElement("td")       //total number of marketing employees
    td6.textContent=markEmployees
    tr3El.appendChild(td6)

    let td7= document.createElement("td")       //total number of marketing salaries
    td7.textContent=Math.round(markSalary)
    tr3El.appendChild(td7)

    let td8= document.createElement("td")       // avg salary of marketing
    td8.textContent=markEmployees>0?Math.round(markSalary/markEmployees):0;
    tr3El.appendChild(td8)

    let tr4El = document.createElement("tr");  //4th row

    let td9= document.createElement("th")
    td9.textContent="Development"
    tr4El.appendChild(td9)

    let td10= document.createElement("td")        //total number of develpoment employees
    td10.textContent=devEmployees
    tr4El.appendChild(td10)

    let td11= document.createElement("td")        //total number of develpoment salaries
    td11.textContent=Math.round(devSalary)
    tr4El.appendChild(td11)

    let td12= document.createElement("td")      //avg salary of development
    td12.textContent=devEmployees>0?Math.round(devSalary/devEmployees):0;
    tr4El.appendChild(td12)

    let tr5El = document.createElement("tr");  //5th row

    let td13= document.createElement("th")
    td13.textContent="Finance"
    tr5El.appendChild(td13)

    let td14= document.createElement("td")     //total number of finance employees
    td14.textContent=finEmployees
    tr5El.appendChild(td14)

    let td15= document.createElement("td")    //total number of finance salaries
    td15.textContent=Math.round(finSalary)
    tr5El.appendChild(td15)

    let td16= document.createElement("td")
    td16.textContent=finEmployees>0?Math.round(finSalary/finEmployees):0; //avg salary for finance
    tr5El.appendChild(td16)

    let tablefoot = document.createElement("tfoot") //table footer
    let tr6El = document.createElement("tr");  //6th row
    tablefoot.appendChild(tr6El)
    
    let td17= document.createElement("th")
    td17.textContent="Total"
    tr6El.appendChild(td17)

    let td18= document.createElement("td")
    td18.textContent=admEmployees+markEmployees+devEmployees+finEmployees; // total employees of all depatrments
    tr6El.appendChild(td18)

    let td19= document.createElement("td")
    td19.textContent=Math.round(admSalary+markSalary+devSalary+finSalary);    // total salary of all depatrments
    tr6El.appendChild(td19)

    let td20= document.createElement("td")
    td20.textContent=td18.textContent>0?Math.round(td19.textContent/td18.textContent):0;  //average salary for all departments=total salary for all departments/total employess
    tr6El.appendChild(td20)

    tableEle.appendChild(tr1El);
    tableEle.appendChild(tr2El);
    tableEle.appendChild(tr3El);
    tableEle.appendChild(tr4El);
    tableEle.appendChild(tr5El);
    tableEle.appendChild(tablefoot);
    }
    renderTable() 