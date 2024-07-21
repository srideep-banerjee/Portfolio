import { useState } from "react"
import CategoryDisplay from "../common/CategoryDispaly"
import "../styles/common.css"
import "../styles/Projects.css"
import { projectsCategoryData } from "../data/projects"

export default function Projects() {
    const [category, setCategory] = useState(0)

    return (
        <div className="projects-container appbar-adjusted-height">
            <CategoryDisplay
                data={projectsCategoryData}
                selectedIndex={category}
                onSelectionChange={setCategory}/>
            <hr />
            <ul id='project-list'>
                
            </ul>
        </div>
    )
}