import Joi from "joi";
export const registerValidation = async (req: any, res: any, next: any) => {
    try {
        const schema = Joi.object({
            password: Joi.string().min(8).required(),
            email: Joi.string().email().required(),
        });
        await schema.validateAsync(req.body);
        next()
    } catch (error: any) {
        return res.status(422).json({
            success: false,
            message: error.message,
        });
    }
}
export const ValidateUrl = async (req: any, res: any, next: any) => {
    try {
        const schema = Joi.object({
            originalUrl: Joi.string().min(5).required().uri({ scheme: ["http", "https"] })
        })
        await schema.validateAsync(req.body)
        next()
    } catch (error: any) {
        return res.status(422).json({
            status: error,
            message: "invalid url",
        });
    }
}
