import { useState } from "react"
import CategoryDisplay from "../common/CategoryDispaly"
import "../styles/common.css"
import "../styles/Projects.css"
import LinkSvg from "../assets/link.svg?react"
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
    const links = []
    if (project.link != undefined) {
        links.push((
            <a className="project-link" href={project.link}>
                <LinkSvg className="project-link-icon" />
                Link
            </a>
        ))
    }

    if (project.apk != undefined) {
        links.push((
            <a className="project-link" href={project.apk}>
                <LinkSvg className="project-link-icon" />
                Apk
            </a>
        ))
    }

    if (project.github != undefined) {
        links.push((
            <a className="project-link" href={project.github}>
                <LinkSvg className="project-link-icon" />
                GitHub
            </a>
        ))
    }
    
    return (
        <li className="project-item">
            <span className="project-name">{project.name}</span>
            <pre className="project-description">{project.description}</pre>
            <section className="project-links-container">
                {links}
            </section>
            {project.skills.join(", ")}
        </li>
    )
}