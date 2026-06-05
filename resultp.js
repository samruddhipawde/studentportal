// Function to check student record
function checkStudentRecord() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Checking Student Record...");
            resolve();
        }, 2000);
    });
}

// Function to calculate marks
function calculateMarks() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Calculating Marks...");
            resolve();
        }, 2000);
    });
}

// Function to generate result
function generateResult() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Generating Result...");
            resolve();
        }, 2000);
    });
}

// Function to display final result
function displayResult() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Result Generated Successfully!");
            console.log("----------------------------");
            console.log("Student Name: Rahul");
            console.log("Total Marks: 450");
            console.log("Percentage: 90%");
            console.log("Grade: A");
            resolve();
        }, 2000);
    });
}

// Async function to execute all steps sequentially
async function studentResultPortal() {
    console.log("Student Result Generation Started...");

    await checkStudentRecord();
    await calculateMarks();
    await generateResult();
    await displayResult();
}

// Start the process
studentResultPortal();