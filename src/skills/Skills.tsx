import { useState } from 'react'
import '../styles/Skills.css'
import '../styles/common.css'
import right from '../assets/right.svg'
import { categoryData, skillData } from '../data/skills'

export default function Skills() {
    
    const [category, setCategory] = useState(0)

    const onCategoryClick = (index: number) => setCategory(index)

    return (
        <div className="skills-container">
            <ul id='skill-category-list'>
                {
                    categoryData.map((categoryName, index) => (
                        <SkillCategoryItem
                            key={index}
                            index={index}
                            name={categoryName}
                            onClick={onCategoryClick} />
                    ))
                }
            </ul>
            <hr></hr>
            <ul id='skill-list'>
                {
                    skillData.map((skillName, index)=>(
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
    onClick: (index: number, name: string) => void
}

function SkillCategoryItem({index, name, onClick}: SkillCategoryItemProp) {
    return (
        <li className='skill-category-item' onClick={()=>onClick(index, name)}>
            <span className='skill-category-name'>{name}</span>
            <img src={right}></img>
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