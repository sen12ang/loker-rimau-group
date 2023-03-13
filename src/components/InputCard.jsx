import { Button, FormControl, Icon, Textarea, Flex } from "@chakra-ui/react";
import { TbMinus } from "react-icons/tb";

export default function InputCard(props) {
    const { data, value, edit, del, index } = props

    const textChange = (newValue) => {
        edit(data, value.id, newValue, index)
    }

    return (
        <Flex gap={1}>
            <FormControl isRequired>
                {/* <Input type="text" defaultValue={value.value} onChange={(e)=>textChange(e.target.value)} /> */}
                <Textarea resize='vertical' defaultValue={value.value} onChange={(e)=>textChange(e.target.value)} ></Textarea>
            </FormControl>
            <Button colorScheme='red' onClick={()=>del(data, index)}>
                <Icon as={TbMinus} />
            </Button>
        </Flex>
    );
}
