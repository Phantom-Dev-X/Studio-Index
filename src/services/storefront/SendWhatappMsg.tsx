

export function SendWhatappMsg(sessionId: string, phoneNumber: string, selected: string | null = null, selectedlga: string | null = null) {
    if (selected === 'Select State') {
        console.log('state empty')
        return
    }
    if (selectedlga === 'Select Local Govt / City') {
        console.log('lga empty')
        return
    }
    const rawMsg = `hello i wanna gt some things from your store, here's my sessionId: ${sessionId} `
    const encodedMsg = encodeURIComponent(rawMsg)
    const link = `https://wa.me/${phoneNumber}?text=${encodedMsg}`
    window.open(link, '_blank')

}