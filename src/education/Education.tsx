import { Education, educationList } from "../data/education"
import "../styles/common.css"
import "../styles/Education.css"

export default function Educations() {
    return (
        <div className="edu-container appbar-adjusted-height">
            <ul id="edu-list">
                {
                    educationList.map(
                        (education, index) => <EducationItem key={index} education={education} />
                    )
                }
            </ul>
        </div>
    )
}

function EducationItem({education}: {education: Education}) {
    const keyName = education.marking == 'cgpa' ? "Cgpa" : "Percentage"
    let value = education.marking == "cgpa" ? `${education.cgpa}` : `${education.percentage} %`;
    if (education.ongoing) {
        value += " (till now)"
    }
    return (
        <div className="edu-item">
            <span className="edu-name">{education.degree}</span>
            <span className="edu-period">{`${education.start} - ${education.end}`}</span>
            <span className="edu-item-detail">
                <EducationItemDetail field="In" value={education.field} />
            </span>
            <span className="edu-item-detail">
                <EducationItemDetail field="From" value={education.institution}/>
            </span>
            <span className="edu-item-detail">
                <EducationItemDetail 
                    field={`With ${keyName}`}
                    value={value}
                    />
            </span>
        </div>
    )
}

function EducationItemDetail({field, value}: {field: string, value: string}) {
    return (
        <>
            <span className="edu-field">{field}</span>
            <span className="edu-value">{value}</span>
        </>
    )
}