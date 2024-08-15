
export const getSkills = () => {

    const languages = ["Java Script", "Type Script", "Java"]
    const frameworks = ["NodeJs", "NextJs", "React"]
    const devops = ["Docker", "Kubernets", "AWS"]
    const databases = ["Postgres", "MySQL", "OrcleSql",]
    const messageBrokers = ["Kafka", "Redis"]
    const terminals = ["bash", "git"]

    return {languages, devops, frameworks, databases, terminals, messageBrokers}
}