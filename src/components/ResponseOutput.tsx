import { Center, Code, Flex, Text } from '@chakra-ui/react'
import { useSnapshot } from 'valtio'
import state from '../store'
import { useEffect } from 'react'
import ReactJson from 'react-json-view'

function ResponseOutput() {
  const snap = useSnapshot(state)

  useEffect(() => {
    console.log('snap.responseData', snap.responseData)
  }, [snap])

  return (
    <Flex flexDirection="column" flex={1}>
      <Flex />
      <Flex>
        {snap.isSubmitting ? (
          <Center>
            <Text color="white">Loading...</Text>
          </Center>
        ) : (
          snap.responseData && (
            <Flex bg="white" minHeight="100vh" h="100%" w="100%" p={4}>
              <ReactJson src={snap.responseData} />
            </Flex>
          )
        )}
      </Flex>
    </Flex>
  )
}

export default ResponseOutput
