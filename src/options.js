export default function getOptions() {
    const optionsObject = {
        workHomeOptions: ["Work", "Home"],
        whenOptions: ['Today', 'This Week', 'This Month', 'Later', 'Someday Maybe'],
        typeOptions: ["Repeated Tasks", "Other Tasks", "Projects", "Things to Buy", "People to Contact"],
        labels: ["Work/Home", "When", "Type", "Frequency"],
        frequencyOptions: ["Daily", "Weekly", "Monthly", "Yearly", "Custom"],
        selectionMenus: []
    }

    return optionsObject;
}