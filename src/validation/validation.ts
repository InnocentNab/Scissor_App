import Joi from "joi";
export const Validation = async (req: any, res: any, next: any) => {
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