import { useState } from 'react'
import '../styles/Skills.css'
import '../styles/common.css'
import RightSvg from '../assets/right.svg?react'
import { categoryData, getDataByCategory } from '../data/skills'

export default function Skills() {
    
    const [category, setCategory] = useState(0)

    const onCategoryClick = (index: number) => setCategory(index)

    return (
        <div className="skills-container appbar-adjusted-height">
            <ul id='skill-category-list'>
                {
                    categoryData.map((categoryName, index) => (
                        <SkillCategoryItem
                            key={index}
                            index={index}
                            name={categoryName}
                            selected={category == index}
                            onClick={onCategoryClick} />
                    ))
                }
            </ul>
            <hr />
            <ul id='skill-list'>
                {
                    getDataByCategory(categoryData[category]).map((skillName)=>(
                        <SkillItem name={skillName} />
                    ))
                }
            </ul>
        </div>
    )
}

type SkillCategoryItemProp = {
    index: number,
    name: string,
    selected: boolean,
    onClick: (index: number, name: string) => void
}

function SkillCategoryItem({index, name, selected, onClick}: SkillCategoryItemProp) {
    const className = "skill-category-item" + (selected ? " selected" : "")
    const svgClassName = "right-svg" + (selected ? " selected" : "")
    return (
        <li className={className} onClick={()=>onClick(index, name)}>
            <span className='skill-category-name'>{name}</span>
            <RightSvg className={svgClassName} />
        </li>
    )
}

function SkillItem({name = ""}) {
    return (
        <li className='skill-item'>
            {name}
        </li>
    )
}