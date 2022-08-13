export const convertTypeToString = (value) => {
    switch (value) {
        case 1:
            return 'Film'
        case 2:
            return 'Serial'
        case 3:
            return 'Książka'
        default:
            return 'Inny'
    }
}