const getCommentDate = data => {
    const dateOptions = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }
    const newDate = new Intl.DateTimeFormat('ru', dateOptions)
    return newDate.format(data)
}

export default getCommentDate
