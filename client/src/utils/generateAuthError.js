/* eslint-disable n/handle-callback-err */

function generateAuthError(message) {
    switch (message) {
        case 'INVALID_PASSWORD':
            return `Неверный пароль ${String.fromCodePoint(0x1f914)}`

        case 'EMAIL_EXISTS':
            return `Пользователь с такой электронной почтой уже существует ${String.fromCodePoint(
                0x1f914
            )}`

        case 'EMAIL_NOT_FOUND':
            return `Пользователь с такой электронной почтой не найден ${String.fromCodePoint(
                0x1f914
            )}`

        default:
            return 'Слишком много попыток авторизации. Попробуйте позже...'
    }
}

export default generateAuthError
