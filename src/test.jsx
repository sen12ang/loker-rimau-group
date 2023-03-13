import { Box, Button, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function Test() {
    const [currentId, setCurrentId] = useState(3);
    const [allData, setAllData] = useState([
        {
            value: "1",
            id: 1,
        },
        {
            value: "2",
            id: 2,
        },
        {
            value: "3",
            id: 3,
        },
    ]);

    const add = () => {
        setAllData([...allData, ""]);
    };

    const del = (index) => {
        const temp = [...allData];
        temp.splice(index, 1);
        setAllData([...allData.slice(0, index), ...allData.slice(index + 1)]);
    };

    return (
        <div>
            {allData.map((data, index) => {
                return (
                    <Component
                        key={data.id}
                        data={data}
                        index={index}
                        del={del}
                    />
                );
            })}
            <Button onClick={add}>tambah</Button>
        </div>
    );
}

const Component = (props) => {
    const { index, data, del } = props;

    return (
        <HStack>
            <Input type="text" defaultValue={data.value} />
            <Button onClick={() => del(index)}>remove</Button>
        </HStack>
    );
};
