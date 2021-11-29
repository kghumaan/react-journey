import React from "react"
import EmployeeHeadshot from "./EmployeeHeadshot"
import EmployeeSummary from "./EmployeeSummary"
// import EmployeeDetails from "./components/digital_business_card/EmployeeDetails"

export default function DigitalBusinessCard() {
    return (
        <div className="businessCardContainer">
            <EmployeeHeadshot />
            <EmployeeSummary />
            {/* <EmployeeDetails /> */}
        </div>
    )
}
