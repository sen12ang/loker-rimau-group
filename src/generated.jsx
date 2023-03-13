import { Box } from "@chakra-ui/react";
import { PDFViewer } from "@react-pdf/renderer";
import Satu from "./templates/satu";
import Dua from "./templates/dua";

export default function Test() {
    const templateNum = localStorage.getItem("templateNum");
    const title = localStorage.getItem("title").toUpperCase();
    const requirements = JSON.parse(localStorage.getItem("requirements"));
    const responsibilities = JSON.parse(
        localStorage.getItem("responsibilities")
    );

    const templateList = [
        <Satu
            title={title}
            requirements={requirements}
            responsibilities={responsibilities}
        />,
        <Dua
            title={title}
            requirements={requirements}
            responsibilities={responsibilities}
        />,
    ];

    return (
        <Box h="100vh">
            <PDFViewer width="100%" height="100%">
                {templateList[templateNum]}
            </PDFViewer>
        </Box>
    );
}
