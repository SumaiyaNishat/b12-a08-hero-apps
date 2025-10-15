export const loadInstallation = () => {
    try {
        const data = localStorage.getItem('installation')
        return data ? JSON.parse(data) : []
    } catch (err) {
        console.log(err)
        return []
    }
}

export const updateData = card => {
    const installation = loadInstallation()

    try {
        const isSameData = installation.some(c => c.id === card.id)
        const updatedInstallation = [...installation, card]
    localStorage.setItem('installation', JSON.stringify(updatedInstallation))
    }catch (err) {
        console.log(err)
        return []
    }
}

export const uninstallApp = id => {
    const installation = loadInstallation()
    try {
        const updatedInstallation = installation.filter(c => c.id !== id)
        localStorage.setItem('installation',JSON.stringify(updatedInstallation))
    } catch (err) {
        console.log(err)
    }
}