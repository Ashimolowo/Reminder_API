// import { ZodError } from "zod";

// export function validateData(schema) {
//     return (req, res, next) => {
//         try {
//             schema.parse(req.body);
//             next();
//         } catch (error) {
//             if (error instanceof ZodError) {
//                 const errorMessages = error.errors.map((issue) => ({
//                     message: `${issue.path.join('.')} is ${issue.message}`,
//                 }))
//                 res.status(400).json({ error: 'Invalid data', details: errorMessages});
//             } else {
//                 res.status(500).json({error: 'Internal Server Error'})
//             }
//         }
//     }
// }

// export function validateData(schema) {
//   return (req, res, next) => {
//     try {
//       const bodyToValidate = req.body || {};
//       schema.parse(bodyToValidate);
//       next();
//     } catch (error) {
//       console.error("Validation error:", error);

//       if (
//         error instanceof ZodError &&
//         error.errors &&
//         Array.isArray(error.errors)
//       ) {
//         const errorMessages = error.errors.map((issue) => ({
//           field: issue.path.join(".") || "unknown",
//           message: issue.message,
//         }));

//         return res.status(400).json({
//           error: "Validation failed",
//           details: errorMessages,
//         });
//       }

//       // Fallback for any other error
//       return res.status(400).json({
//         error: "Invalid request data",
//         message: error?.message || "Unknown validation error",
//       });
//     }
//   };
// }
import { ZodError } from "zod";

export function validateData(schema) {
  return (req, res, next) => {
    try {
      const bodyToValidate = req.body || {};
      console.log("Body to validate:", bodyToValidate);

      schema.parse(bodyToValidate);
      next();
    } catch (error) {
      console.log("Error type:", error.constructor.name);
      console.log("Is ZodError:", error instanceof ZodError);
      console.log("Error object:", error);

      if (
        error instanceof ZodError &&
        error.errors &&
        Array.isArray(error.errors)
      ) {
        const details = error.errors.map((issue) => {
          const field = issue.path.join(".") || "unknown";
          const message = `${field}: ${issue.message}`;
          return { message };
        });

        console.log("Details:", details);
        return res.status(400).json({
          error: "Invalid data",
          details,
        });
      }

      console.log("Falling back to generic error");
      return res.status(400).json({
        error: "Invalid data",
        details: [
          {
            message: "Request validation failed",
          },
        ],
      });
    }
  };
}