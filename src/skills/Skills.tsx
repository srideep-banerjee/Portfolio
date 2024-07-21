import { useState } from 'react'
import '../styles/Skills.css'
import '../styles/common.css'
import { skillCategoryData, getDataByCategory } from '../data/skills'
import CategoryDisplay from '../common/CategoryDispaly'

export default function Skills() {
    
    const [category, setCategory] = useState(0)

    return (
        <div className="skills-container appbar-adjusted-height">
            <CategoryDisplay
                data={skillCategoryData}
                selectedIndex={category}
                onSelectionChange={setCategory}/>
            <hr />
            <ul id='skill-list'>
                {
                    getDataByCategory(skillCategoryData[category]).map((skillName, index)=>(
                        <SkillItem key={index} name={skillName} />
                    ))
                }
            </ul>
        </div>
    )
}

function SkillItem({name = ""}) {
    return (
        <li className='skill-item'>
            {name}
        </li>
    )
}