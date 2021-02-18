import React from 'react';
import { Flex, Spacer,Box, Heading, Button } from "@chakra-ui/react";
// import { Link } from '@chakra-ui/core';

const Header = (props) => {
    const headingStyle = {
        padding: '50px 40px',
    }

    return (
        <header style={headingStyle}>
            <Flex>
                <Box p="2">
                    <Heading size="md">Teamwork</Heading>
                </Box>
                <Spacer />
                <Box>
                    
                </Box>
                <Box>
                    <Button colorScheme="teal" mr="4">
                        Signup
                    </Button>
                    <Button colorScheme="teal">Log in</Button>
                </Box>
            </Flex>
        </header>
    ); 
}

export default Header;
