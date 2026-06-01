/**
 * Objeto Definido | Não alterar
 */
/**
 * Retorno isSuccess é automático : 200 == success != error
 * statusCode, userMessage, developerMessage, content, package
 */
export default function (statusCode: number, userMessage: string, developerMessage: string, content: any, pkg: string) {
    return {
        content: content,
        message: {
            developerMessage: developerMessage,
            userMessage: userMessage
        },
        package: pkg,
        isSuccess: statusCode == 200,
        statusCode: statusCode
    };
};