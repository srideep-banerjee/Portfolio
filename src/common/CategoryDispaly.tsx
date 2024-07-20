import RightSvg from '../assets/right.svg?react'

type CategoryDisplayProp = {
    data: Array<string>,
    selectedIndex: number,
    onSelectionChange: (index: number, name: string) => void
}

export default function CategoryDisplay({data, selectedIndex, onSelectionChange}: CategoryDisplayProp) {

    return (
        <ul id='category-list'>
            {
                data.map((categoryName, index) => (
                        <CategoryItem
                            key={index}
                            index={index}
                            name={categoryName}
                            selected={selectedIndex == index}
                            onClick={onSelectionChange} />
                    ))
                }
            </ul>
    )
}

type CategoryItemProp = {
    index: number,
    name: string,
    selected: boolean,
    onClick: (index: number, name: string) => void
}

function CategoryItem({index, name, selected, onClick}: CategoryItemProp) {
    const className = "category-item" + (selected ? " selected" : "")
    const svgClassName = "right-svg" + (selected ? " selected" : "")

    return (
        <li className={className} onClick={()=>onClick(index, name)}>
            <span className='category-name'>{name}</span>
            <RightSvg className={svgClassName} />
        </li>
    )
}