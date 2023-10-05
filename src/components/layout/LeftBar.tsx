import { Flex, Text } from '@chakra-ui/react'

function LeftBar() {
  return (
    <Flex
      flex={0.5}
      flexDirection="column"
      bg="gray.800"
      height="100vh"
      borderRight="1px solid"
      borderRightColor="gray.700"
      p={4}
    >
      <Text>Save Requests</Text>
    </Flex>
  )
}

export default LeftBar
