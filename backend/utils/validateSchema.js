
export const validateSchema=(schema)=>(req,res,next)=>{
    try {
      console.log(req.body)
        const validatedData = schema.parse(req.body);
        req.validatedData = validatedData;
        next();
      } catch (err) {
        
        const errorMessages = Array.isArray(err.errors)
      ? err.errors.map((error) => error.message)
      : [];
    const errorMessage = errorMessages.join(', ');
    return res.status(400).json({ error: errorMessage || 'Error de validación' });
      }


};