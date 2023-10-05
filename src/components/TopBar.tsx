import { SettingsIcon } from '@chakra-ui/icons'
import { Flex, Tooltip } from '@chakra-ui/react'

function TopBar() {
  return (
    <Flex flex={1} justifyContent="flex-end" p={4} gap={4} bg="blackAlpha.900">
      <Tooltip label="Comming soon!" hasArrow>
        <SettingsIcon />
      </Tooltip>
    </Flex>
  )
}

export default TopBar
