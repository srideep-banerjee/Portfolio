export type Education = {
    degree: string,
    field: string,
    institution: string,
    start: string,
    end: string,
    ongoing?: boolean
} & ({marking: "cgpa", cgpa: number} | {marking: "percentage", percentage: number})

export const educationList: Array<Education> = [
    {
        degree: "Bachelor of Technology (B Tech)",
        field: "Computer Science and Engineering",
        institution: "Bengal College of Engineering and Technology, Durgapur",
        start: "2021",
        end: "2025",
        ongoing: true,
        marking: "cgpa",
        cgpa: 8.23
    },
    {
        degree: "Senior Secondary, XII (CBSE)",
        field: "Computer Science",
        institution: "D.A.V. Model School, Durgapur",
        start: "2019",
        end: "2021",
        marking: "percentage",
        percentage: 83.8
    },
    {
        degree: "Secondary, X (ICSE)",
        field: "Science",
        institution: "St. Xavier's School, Durgapur",
        start: "2018",
        end: "2019",
        marking: "percentage",
        percentage: 87.8
    }
]