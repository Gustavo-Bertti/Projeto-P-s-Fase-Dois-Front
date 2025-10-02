import * as yup from 'yup';
const envSchema = yup.object({
    NEXT_PUBLIC_API_URL: yup.string().url().required(),

});
const envVars = {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
};
try {
    envSchema.validateSync(envVars, { abortEarly: false });
} catch (error) {
    throw new Error(`Invalid environment variables: ${error}`);
}

export const env = envVars;

