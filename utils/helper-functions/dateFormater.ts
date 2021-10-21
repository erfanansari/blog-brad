export function dateFormater(date: string) {
    return new Intl.DateTimeFormat('en-Us', { month: 'short', day: 'numeric', year: '2-digit' }).format(
        Date.parse(date),
    )
}
