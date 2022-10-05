import { authenticate } from "../middleware/auth.middleware";

const routesInit = (app, passport) => {
    app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));
    app.get(
        "/auth/google/callback",
        passport.authenticate("google", {
            failureRedirect: "/login",
            successRedirect: "/user",
        }),
        (req, res) => {
            console.log("User authenticated");
        }
    );
    app.get("/test", authenticate, (req, res) => {
        res.send("<h3>User is authenticated</h3>");
    });
    
     app.get("/check", authenticate, (req, res) => {
        res.send("<h3>Server is Running</h3>");
    });
};

export { routesInit };
