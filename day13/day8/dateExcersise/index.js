const calculateAge = () => {
    const dob = document.getElementById("user-date");
    const output = document.getElementById("output");
    
    const userDob = new Date(dob.value);
    const current = new Date();

    const userDobYear = userDob.getFullYear();
    const userDobMonth = userDob.getMonth();
    const userDobDate = userDob.getDate();

    let ageinYear = current.getFullYear() - userDobYear;
    let ageinMonth = current.getMonth() - userDobMonth;

  
    const hasBirthdayPassed =
        current.getMonth() > userDobMonth ||
        (current.getMonth() === userDobMonth && current.getDate() >= userDobDate);

    if (!hasBirthdayPassed) {
        age--;
    }

    output.innerText = `User's Current Age is ${ageinYear}Year and ${ageinMonth}Month`;

}
