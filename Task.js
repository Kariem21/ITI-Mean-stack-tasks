// 

const sum = (a,b)=>{
    return a + b ;
}

document.getElementById("sumNums").addEventListener("click", function() {
    // Prompt the user for two numbers
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));

    // Check if the user entered valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Call the addNumbers function and store the result
        var result = sum(num1, num2);

        document.body.innerHTML= `<h2> The Sum is ${result} </h2>`;

        // Display the result in the console
        console.log("The sum of " + num1 + " and " + num2 + " is: " + result);
    } else {
        // Handle the case where the user entered invalid input
        console.error("Invalid input. Please enter valid numbers.");
    }
});

const BiggerthanZero = (agr)=>{
    document.body.innerHTML = `<h2> It is True Because ${agr} is Bigger Than Zero</h2>`;
    console.log(true);
    return true;
}
const LowerrthanOrEqualZero = (agr)=>{
    document.body.innerHTML = `<h2> It is False Because ${agr} is Lower Than Or Equal to Zero</h2>`;
    console.log(false);
    return false;
}
const CheckFun = (agr)=>{
    agr > 0 ?  BiggerthanZero(agr) :  LowerrthanOrEqualZero(agr)
    
    // if(agr>0){
    //     document.body.innerHTML = "<h2> The Number is bigger than Zero </h2>";
    //     console.log("The Number is bigger than Zero ");
    //     return true;
    // }
    // else if(agr === 0){
    //     document.body.innerHTML = "<h2> The Number Equal to Zero </h2>";
    //     console.log("The Number is equal than Zero");
    //     return false;
    // }
    // else if(agr < 0){
    //     document.body.innerHTML = "<h2> The Number is Lower than Zero </h2>";
    //     console.log("The Number is Lower than Zero");
    //     return false;
    // }

}

document.getElementById("CheckZero").addEventListener("click", function () {
    // Prompt the user for two numbers
    var num = parseFloat(prompt("Enter the number:"));

    if (!isNaN(num)) {
        CheckFun(num);  
    }
    else{
        document.body.innerHTML = "<h2> Not A Number</h2>";
        console.log("Not A Number");
    }

        
});


document.getElementById("checkFaculty").addEventListener("click",function(){
    var studentFacultyName = prompt("Enter Your Faculty Name");
    StudentFaculty(studentFacultyName);
})
const StudentFaculty = (studentFaculty) => {
    switch (studentFaculty) {
        case "FCI":
            document.body.innerHTML =
                "<h2>You’re eligible to Programing tracks </h2>";
        case "Engineering":
            document.body.innerHTML =
                "<h2>You are eligible to Network and Embedded tracks</h2>";
        case "Commerce":
            document.body.innerHTML =
                "<h2>You’re eligible to ERP and Social media tracks</h2>";
        default:
            document.body.innerHTML =
                "<h2>You’re eligible to SW fundamentals track</h2>";
    }

}
//Readability,Efficiency: optimized by JavaScript engines,Default Case,Structured

document.getElementById("calcArea").addEventListener("click",function(){
    var base = parseFloat(prompt("Enter Your The Base"));
    var height = parseFloat(prompt("Enter Your The height"));

    calcArea(base, height);
})

const calcArea = (base,height)=>{
    var result = Math.abs((base * height)/2);
    document.body.innerHTML = "<h2> The Area of traingle is: " + result + "</h2>";
    console.log("the Area is ", result);
    return result;
}

document.getElementById("WelcomeMessage").addEventListener("click",function(){
    for (var i = 1; i <= 6; i++) {
        document.write("<h" + i + ">Welcome to my page</h" + i + ">");
    }
    
})


function createStudentInfoTable(name, birthYear, age) {
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");

    // Create rows and cells for the table
    var rows = ["Name", "Birth year", "Age"];
    var data = [name, birthYear, age];

    for (var i = 0; i < rows.length; i++) {
        var row = document.createElement("tr");
        var cell1 = document.createElement("td");
        var cell2 = document.createElement("td");

        cell1.textContent = rows[i];
        cell2.textContent = data[i];

        row.appendChild(cell1);
        row.appendChild(cell2);
        tbody.appendChild(row);
    }

    table.appendChild(tbody);

    // Append the table to the document
    document.body.appendChild(table);
}


document.getElementById("MakeYourTableData").addEventListener("click",function(){
    var studentName = prompt("Enter Your Name");
    var birthYear = parseFloat(prompt("Enter Birth Year"));
    var currentYear = new Date().getFullYear();
    var studentAge = currentYear - birthYear;

    createStudentInfoTable(studentName, birthYear, studentAge);
})
// Example usage:


