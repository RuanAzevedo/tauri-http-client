import { Flex } from '@chakra-ui/react'

import TopBar from './components/TopBar'
import RequestInput from './components/RequestInput'
import ResponseOutput from './components/ResponseOutput'
import LeftBar from './components/layout/LeftBar'

function App() {
  return (
    <Flex flexDirection="column">
      <TopBar />

      <Flex>
        <LeftBar />
        <RequestInput />
        <ResponseOutput />
      </Flex>
    </Flex>
  )
}

export default App
