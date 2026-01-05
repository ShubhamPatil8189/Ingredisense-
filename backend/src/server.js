import app from "./app.js";
import env from "./config/env.js";
import cors from "cors";



app.use(cors());

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
