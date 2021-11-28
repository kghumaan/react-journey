import React from "react"
import EmployeeHeadshot from "./components/digital_business_card/EmployeeHeadshot"
import EmployeeSummary from "./components/digital_business_card/EmployeeSummary"
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
