function getDOB(){
    //get the values from the input fields
    const inpDOB = document.querySelector("#inputDob").value;
    const currentDateInput = document.querySelector("#cdate").value; 
    
    //validate if both dates are provided
    if(!inpDOB || !currentDateInput){
        alert("Please enter the both Date of Birth and Current Date");
        return;
    }

    //convert input values into Date objects
    const dob = new Date(inpDOB);
    const currentDate = new Date(currentDateInput);

    //calculate age
    let age = currentDate.getFullYear() - dob.getFullYear();
    let monthDifference = currentDate.getMonth() - dob.getMonth();
    let days = currentDate.getDate() - dob.getDate();

    //adjust age if the birthday has'nt occur this year
    if((monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < dob.getDate())) && age != 0){
        age--;
    }
    
    if(monthDifference < 0){
        monthDifference = 12 - dob.getMonth() + currentDate.getMonth();
    }

    let monthNum = currentDate.getMonth();
    let year = currentDate.getFullYear();
    let noOfDays;

    //adjust the number of days in current month
    if(monthNum==4 || monthNum==6 || monthNum==9 || monthNum==11){
        noOfDays =30;
    }else if(monthNum==2){
        if(year % 4 == 0 && year % 100 != 0 || year % 400 ==0){
            noOfDays = 29;
        }else{
            noOfDays =28;
        }   
    }else{
        noOfDays = 31;
    }

    if(days < 0 && monthDifference != 0){
        monthDifference--;
    }

    if(days < 0){
        days = noOfDays - dob.getDate() + currentDate.getDate();
    }

    //display the result
    let h3=document.querySelector('h3');
    h3.innerText= `Your age is ${age} years ${monthDifference} months & ${days} days.`;
}