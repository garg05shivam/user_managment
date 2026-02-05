import app from "./app.js";
import figlet from "figlet";
import chalk from "chalk";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    figlet("Server Started", (err, data) => {
        if (err) {
            console.log(chalk.red("❌ Figlet error"));
            return;
        }

        console.log(chalk.green(data));
        console.log(
            chalk.blue.bold(`🚀 Running on: http://localhost:${PORT}`)
        );
    });
});
