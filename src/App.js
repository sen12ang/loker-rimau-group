import "./App.css";
import FormPDF from "./formPDF";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Test from "./test";
import Test from "./generated";

function App() {
    return (
        // <Test />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FormPDF />} />
                <Route path="generated" _blank element={<Test />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
