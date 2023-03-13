import {
    Flex,
    Box,
    FormControl,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Icon,
    VStack,
    Image,
    useToast,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import InputCard from "./components/InputCard";
import { TbPlus } from "react-icons/tb";

export default function FormPDF() {
    const toast = useToast();
    // const kota = useRef();
    const lowongan = useRef();
    const [responsibilities, setResponsibilties] = useState([
        {
            value: "",
            id: 1,
        },
    ]);
    const [requirements, setRequirements] = useState([
        {
            value: "",
            id: 2,
        },
    ]);
    const [biggestKey, setBiggestKey] = useState(
        responsibilities.length + requirements.length + 1
    );

    const [templateNumber, setTemplateNumber] = useState(0);
    // nama template foto dan file template harus sama
    const templateList = [
        { name: "satu", format: ".png" },
        { name: "dua", format: ".png" },
    ];

    function generating() {
        localStorage.setItem("templateNum", templateNumber);
        localStorage.setItem("title", lowongan.current.value);
        localStorage.setItem(
            "responsibilities",
            JSON.stringify(responsibilities)
        );
        localStorage.setItem("requirements", JSON.stringify(requirements));

        window.open("/generated");
    }

    const edit = (data, id, newValue, index) => {
        if (data === "responsibilities") {
            const temp = [...responsibilities];
            temp.splice(index, 1, { value: newValue, id: id });
            setResponsibilties(temp);
        } else {
            const temp = [...requirements];
            temp.splice(index, 1, { value: newValue, id: id });
            setRequirements(temp);
        }
    };

    const add = (data) => {
        setBiggestKey(biggestKey + 1);
        if (data === "responsibilities") {
            setResponsibilties([
                ...responsibilities,
                { id: biggestKey, value: "" },
            ]);
        } else {
            setRequirements([...requirements, { id: biggestKey, value: "" }]);
        }
    };

    const del = (data, index) => {
        if (data === "responsibilities") {
            const temp = [...responsibilities];
            temp.splice(index, 1);
            setResponsibilties(temp);
        } else {
            const temp = [...requirements];
            temp.splice(index, 1);
            setRequirements(temp);
        }
    };

    const getLastInput = () => {
        const req = JSON.parse(localStorage.getItem("requirements"));
        const res = JSON.parse(localStorage.getItem("responsibilities"));
        const ttl = localStorage.getItem("title");

        if ((req.length > 0 && req[0].value) || (res.length > 0 && res[0].value) || ttl) {
            setRequirements(req);
            setResponsibilties(res);
            lowongan.current.value = ttl;
            setBiggestKey(requirements.length + responsibilities.length + 1);
            toast({
                title: "Success",
                description: "Data Restored",
                status: "success",
                duration: 3000,
                isClosable: true,
                position: 'top'
            });
        } else {
            toast({
                title: "Failed",
                description: "Data Not Found, Please Input Manually",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: 'top'
            });
        }
    };

    return (
        <Flex minH={"100vh"} bg={useColorModeValue("gray.50", "gray.800")}>
            {/* pilih template yang ingin di gunakan */}
            <VStack padding={10} bgColor="teal" gap={5} roundedRight={10}>
                <Heading fontSize={30} color="white" textAlign="center">
                    Select Template
                </Heading>
                {templateList.map((template, i) => {
                    return (
                        <Image
                            key={template.name}
                            alt=""
                            transition={"0.3s"}
                            w={200}
                            opacity={templateNumber === i ? "1" : "0.3"}
                            _hover={{ transform: "scale(1.1)" }}
                            src={
                                "/templates/" + template.name + template.format
                            }
                            onClick={() => setTemplateNumber(i)}
                        />
                    );
                })}
            </VStack>

            {/* form yang di input sebelum generate pdf */}
            <Stack spacing={8} w={"80vw"} py={12} px={6}>
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"} textAlign={"center"}>
                        Job Form
                    </Heading>
                    <Text fontSize={"lg"} color={"gray.600"}>
                        generating form to pdf
                    </Text>
                    <Button colorScheme="green" onClick={getLastInput}>
                        Get Last Input
                    </Button>
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    <Stack spacing={4}>
                        <Heading fontSize={20}>Nama Lowongan</Heading>
                        <FormControl isRequired>
                            <Input type="text" ref={lowongan} />
                        </FormControl>

                        {/* <Heading fontSize={20}>Kota tempat bekerja</Heading>
                        <FormControl isRequired>
                            <Input type="text" ref={kota} />
                        </FormControl> */}

                        <Flex gap={5} justifyContent="space-around">
                            <Box w="35%">
                                <Heading mb={2} fontSize={20}>
                                    Requirement
                                </Heading>
                                <Stack gap={1}>
                                    {requirements.map((require, index) => {
                                        return (
                                            <InputCard
                                                w="100%"
                                                data="requirements"
                                                del={del}
                                                value={require}
                                                edit={edit}
                                                key={require.id}
                                                index={index}
                                            />
                                        );
                                    })}
                                </Stack>
                                <Button
                                    mt={3}
                                    w="100%"
                                    colorScheme="teal"
                                    onClick={() => add("requirements")}
                                >
                                    <Icon as={TbPlus} />
                                </Button>
                            </Box>
                            <Box w="35%">
                                <Heading mb={2} fontSize={20}>
                                    Responsibilty
                                </Heading>
                                <Stack gap={1}>
                                    {responsibilities.map((respon, index) => {
                                        return (
                                            <InputCard
                                                data="responsibilities"
                                                del={del}
                                                value={respon}
                                                edit={edit}
                                                key={respon.id}
                                                index={index}
                                            />
                                        );
                                    })}
                                </Stack>
                                <Button
                                    mt={3}
                                    w="100%"
                                    colorScheme="teal"
                                    onClick={() => add("responsibilities")}
                                >
                                    <Icon as={TbPlus} />
                                </Button>
                            </Box>
                        </Flex>

                        <Stack spacing={10} pt={2}>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={"blue.400"}
                                color={"white"}
                                _hover={{
                                    bg: "blue.500",
                                }}
                                type="submit"
                                onClick={() => generating()}
                            >
                                Generate
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
