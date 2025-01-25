import { useState } from "react"
import CategoryDisplay from "../common/CategoryDispaly"
import "../styles/common.css"
import "../styles/Projects.css"
import LinkSvg from "../assets/link.svg?react"
import AndroidSvg from "../assets/android.svg?react"
import GitHubSvg from "../assets/github.svg?react"
import { getProjectDataByCategory, Project, projectsCategoryData } from "../data/projects"

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
                    getProjectDataByCategory(projectsCategoryData[category]).map(
                        (project)=>(<ProjectItem key={project.name} project={project} />)
                    )
                }
            </ul>
        </div>
    )
}

function ProjectItem({project}: {project: Project}) {
    const links = []
    if (project.link != undefined) {
        links.push((
            <a key={"link"} className="project-link" href={project.link}>
                <LinkSvg className="project-link-icon" />
                Link
            </a>
        ))
    }

    if (project.apk != undefined) {
        links.push((
            <a key={"apk"} className="project-link" href={project.apk}>
                <AndroidSvg className="project-link-icon" />
                Apk
            </a>
        ))
    }

    if (project.github != undefined) {
        links.push((
            <a key={"github"} className="project-link" href={project.github}>
                <GitHubSvg className="project-link-icon" />
                GitHub
            </a>
        ))
    }
    
    return (
        <div className="project-item">
            <span className="project-name">{project.name}</span>
            <pre className="project-description">{project.description}</pre>
            <section className="project-links-container">
                {links}
            </section>
            <span>
                Skills: {[...project.skills.values()].join(", ")}
            </span>
        </div>
    )
}