/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(array){
    return array.map(innerArray => createEmployeeRecord(innerArray))
}

function createTimeInEvent(dateStamp){
    this.timeInEvents.push({type: "TimeIn", hour: parseInt(dateStamp.split(" ")[1]), date: dateStamp.split(" ")[0]})
    return this
}

function createTimeOutEvent(dateStamp){
    this.timeOutEvents.push({type: "TimeOut", hour: parseInt(dateStamp.split(" ")[1]), date: dateStamp.split(" ")[0]})
    return this
}

function hoursWorkedOnDate(date){
    const timeIns = this.timeInEvents.filter(timeInEvent => timeInEvent.date === date )
    const timeOuts = this.timeOutEvents.filter(timeOutEvent =>timeOutEvent.date === date)
    let totalHours = 0
    timeOuts.forEach((timeOut, index) => totalHours += timeOut.hour/100 - timeIns[index].hour/100)
    return totalHours
}

function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function allWagesFor(){
    let dates = this.timeInEvents.map(timeIn => timeIn.date)
    let total = 0
    dates.forEach((date) => total += wagesEarnedOnDate.call(this,date))
    return total
}

function calculatePayroll(employees){
    let total = 0
     employees.forEach(employee => total+= allWagesFor.call(employee))
    return total
}

function findEmployeeByFirstName(employees, name){
    return employees.find(employee => employee.firstName === name)
}