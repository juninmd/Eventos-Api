/**
 * Módulo de validações para a request message
 */
export default {
    returnError: function (rm: any, statusCode: number, userMessage: string, developerMessage: string) {
        rm.content = null;
        rm.message = {
            developerMessage: developerMessage,
            userMessage: userMessage
        };
        rm.isSuccess = statusCode == 200;
        rm.statusCode = statusCode;
        return rm;
    }
};