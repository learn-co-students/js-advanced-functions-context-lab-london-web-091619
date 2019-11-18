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

const createEmployeeRecord = (employee) => {
  return {
    firstName: employee[0],
    familyName: employee[1],
    title: employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

const createEmployeeRecords = function(employees) {
  return employees.map(employee => createEmployeeRecord(employee))
}

const createTimeInEvent = function(date) {
  this.timeInEvents.push({
    type: 'TimeIn',
    date: date.split(' ')[0],
    hour: Number(date.split(' ')[1])
  })

  return this
}

const createTimeOutEvent = function(date) {
  this.timeOutEvents.push({
    type: 'TimeOut',
    date: date.split(' ')[0],
    hour: Number(date.split(' ')[1])
  })

  return this
}

const hoursWorkedOnDate = function(date) {
  const timeIn = this.timeInEvents.find(e => e.date === date).hour
  const timeOut = this.timeOutEvents.find(e => e.date === date).hour
  return (timeOut - timeIn) / 100
}

const wagesEarnedOnDate = function(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

const findEmployeeByFirstName = function(employees, firstName) {
  return employees.find(employee => employee.firstName === firstName)
}

const calculatePayroll = function(employees) {
  return employees.reduce((total, employee) => {
    return total + allWagesFor.call(employee)
  }, 0)
}
