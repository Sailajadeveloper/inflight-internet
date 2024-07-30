const responseObj = (status = false, statusCode = "500", message = messages.SomethingWentWrong, data = {}) => {
    return { status, statusCode, message, data }
}

const messages = {
    systemError : "System error. Please contact your administrator",
    SomethingWentWrong: "Something Went Wrong",
}

const successMsg = {
    plansFound: "Plan(s) Data Fetched Successfully!",
    planActivated: "Plan Activated Successfully!",
};
const errorMsg = {
    plansNotFound: "Plan(s) Data Not Found!",
    planIDNotFound: "Invalid Plan ID!",
};
module.exports = {
    messages, responseObj, successMsg, errorMsg,
}

