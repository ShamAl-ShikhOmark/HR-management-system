'use strict';

let employeeArr=[] // creating array to push employee's instances

function Employee(EmployeeID,FullName,Department,Level,ImageURL,Salary) {
    this.EmployeeID=EmployeeID;
    this.FullName=FullName;
    this.Department=Department;
    this.Level=Level;
    this.ImageURL=ImageURL;
    this.Salary=Salary;
    employeeArr.push(this);
    this.netSalary=function() {               
    this.Salary=this.Salary-this.Salary*0.075 }
    this.ronudSalary = function () {
      var factor = Math.pow(10, 3);
      return Math.round(this.Salary * factor) / factor;
  }
  }
    

// prototype function to calculate random salary based on level
Employee.prototype.randomSalary=function(){
    if(this.Level=="Junior")
    this.Salary=Math.floor(Math.random() * (1000 - 500+ 1) + 500)
    if(this.Level=="Mid-Senior")
    this.Salary=Math.floor(Math.random() * (1500 - 1000+ 1) + 1000)
    if(this.Level=="Senior")
    this.Salary=Math.floor(Math.random() * (2000 - 1500+ 1) + 1500)
}

// prototype function to render the employee card to the main page
Employee.prototype.renderEmoloyee=function() {
  let empData = document.getElementById("employeeData");
  let employeeCard = document.createElement("div");
  employeeCard.className = "employee-card"; // Add CSS class for styling each card
  let img = document.createElement("img");
  img.src = this.ImageURL;
  let empName = document.createElement("p");
  empName.textContent = this.FullName;
  let department_level = document.createElement("p");
  department_level.textContent =
    "Department: " + this.Department + " - Level: " + this.Level;
  let empId = document.createElement("p");
  empId.textContent = "ID - "+this.EmployeeID;
  let empSalary=document.createElement("p");
  empSalary.textContent="Salary: "+this.Salary;
  employeeCard.appendChild(img);
  employeeCard.appendChild(empName);
  employeeCard.appendChild(department_level);
  employeeCard.appendChild(empId);
  employeeCard.appendChild(empSalary);
  empData.appendChild(employeeCard);
};

// generate unique four digits
let num = 0;
num = localStorage.getItem("num")
function idGenerator(num) {
    let str=num.toString()
    let string ="0000"
    let id=string.substring(0,string.length-str.length)+str;
    return id
}

// access form by DOM
const myForm = document.getElementById("myForm");

// Adding an event listener for form submission
myForm.addEventListener("submit", submitHandler);

function submitHandler(event) {
event.preventDefault();
let fullname=event.target.Name.value;
let department=event.target.Department.value;
let level=event.target.Level.value;
let imageurl = event.target.image.value;   
num++
   // use this as url to determine image location: ./assets/employee.jpg
let x =new Employee(idGenerator(num),fullname,department,level,imageurl)
  x.randomSalary()
  x.netSalary()
  x.ronudSalary()
  x.renderEmoloyee()
  saveData()
}
// save all employees to localstorage
  function saveData() {
    let stringArr = JSON.stringify(employeeArr); // array of strings 
    localStorage.setItem("employees", stringArr);
    localStorage.setItem("num",num)
}
let objArr;
function gettoRender() {
  let RetrievedArr = localStorage.getItem("employees");
  objArr=JSON.parse(RetrievedArr)
  if(objArr !=null)
 for(let i =0; i<objArr.length;i++){
  new Employee(objArr[i].EmployeeID,objArr[i].FullName,objArr[i].Department,objArr[i].Level,objArr[i].ImageURL,objArr[i].Salary)
  }
  renderAll()
}
gettoRender()
console.log(objArr)


function renderAll(){
for(let i = 0 ; i < employeeArr.length ; i++){
  employeeArr[i].renderEmoloyee()
}}