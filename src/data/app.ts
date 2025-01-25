import * as React from 'react'
import Home from '../home/Home'
import Skills from '../skills/Skills'
import Projects from '../projects/Projects'
import Educations from '../education/Education'

export const appData: Map<string, React.FunctionComponent | null> = new Map([
    ["Profile", Home],
    ["Skills", Skills],
    ["Projects", Projects],
    ["Education", Educations]
])