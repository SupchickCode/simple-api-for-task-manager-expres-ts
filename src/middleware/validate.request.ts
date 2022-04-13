import { AnySchema, object } from 'yup'
import express from "express";


const validate = (scheme: AnySchema) => async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    try {
        await scheme.validate({
            body: req.body,
            query: req.query,
            params: req.params,
        });

        next();
    } catch (error: any) {
        return res.status(400).send(error.message);
    }
}


export default validate;