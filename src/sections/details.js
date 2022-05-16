
import { Button, Checkbox, FormControl, FormLabel, GridItem, Heading, Input, Select, SimpleGrid, Text, VStack } from "@chakra-ui/react"

const Details = () => {
    return (
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
            <VStack spacing={3} alignItems="flex-start">
                <Heading size="2xl">
                    Your details
                </Heading>
                <Text>If you already have an account, click here to login</Text>
            </VStack>

            {/* Simple Grid to create a Grid functionality */}
            <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">

                {/* Grid Item, with colspan property */}
                <GridItem colSpan={1}>
                    {/* FormControl to contorl the form functionality */}
                    <FormControl>
                        {/* Label to add label for the form field */}
                        <FormLabel>First Name</FormLabel>
                        {/* Input Field with placeholder */}
                        <Input placeholder="John" />
                    </FormControl>
                </GridItem>

                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input placeholder="Doe" />
                    </FormControl>
                </GridItem>

                <GridItem colSpan={2}>
                    <FormControl>
                        <FormLabel>Address</FormLabel>
                        <Input placeholder="Blvd. Broken Dreams 21" />
                    </FormControl>
                </GridItem>

                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>City</FormLabel>
                        <Input placeholder="San Francisco" />
                    </FormControl>
                </GridItem>

                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>Country</FormLabel>
                        {/* Select Box */}
                        <Select>
                            <option value="usa">United States of Ameria</option>
                            <option value="uae">United Arab Emirates</option>
                            <option value="nmk">North Macedonia</option>
                            <option value="de">Germany</option>
                        </Select>
                    </FormControl>
                </GridItem>

                <GridItem colSpan={2}>
                    {/* CheckBox */}
                    <Checkbox defaultChecked>Ship to billing address.</Checkbox>
                </GridItem>

                <GridItem colSpan={2}>
                    {/* Button, bydefault have width="auto", so we have to use w="full" */}
                    <Button size="lg" w="full">Place Order</Button>
                </GridItem>
            </SimpleGrid>
        </VStack>
    );
}

export default Details;