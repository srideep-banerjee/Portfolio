import { useState } from "react"
import CategoryDisplay from "../common/CategoryDispaly"
import "../styles/common.css"
import "../styles/Projects.css"
import { Project, projectsCategoryData, projectsData } from "../data/projects"

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
                {
                    projectsData.map((project)=>(<ProjectItem project={project} />))
                }
            </ul>
        </div>
    )
}

function ProjectItem({project}: {project: Project}) {
    return (
        <li className="project-item">
            {project.name}
            <pre className="project-item-description">{project.description}</pre>
            {project.skills.join(", ")}
        </li>
    )
}