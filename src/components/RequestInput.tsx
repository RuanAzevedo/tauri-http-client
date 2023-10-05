import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Button,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { useSnapshot } from 'valtio'
import state from '../store'
import { useForm } from 'react-hook-form'

type FormData = {
  url: string
}

function RequestInput() {
  const snap = useSnapshot(state)
  const { register, handleSubmit } = useForm<FormData>()

  const handleMethodSelected = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const selectedOption = (e.target as HTMLButtonElement).textContent

    /**
     * @TODO remove this if statement when we have more methods supported
     */
    if (selectedOption !== 'GET') {
      return
    }

    state.httpMethod = selectedOption
  }

  const onSubmit = async ({ url }: FormData) => {
    if (!url) return

    state.isSubmitting = true

    const response = await fetch(url)
    const responseJson = await response.json()

    state.isSubmitting = false
    state.responseData = responseJson
  }

  return (
    <Flex flex={1} bg="gray.900" gap={1} p={2}>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          bg="transparent"
        >
          {snap.httpMethod}
        </MenuButton>
        <MenuList onClick={handleMethodSelected}>
          <MenuItem>GET</MenuItem>
          <MenuItem>POST (comming soon!)</MenuItem>
          <MenuItem>PUT (comming soon!)</MenuItem>
          <MenuItem>PATCH (comming soon!)</MenuItem>
          <MenuItem>DELETE (comming soon!)</MenuItem>
        </MenuList>
      </Menu>

      <Flex as="form" flex={1} gap={1} onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="https://api.myproduct.com/v1/users"
          variant="filled"
          {...register('url')}
        />
        <Button type="submit">Send</Button>
      </Flex>
    </Flex>
  )
}

export default RequestInput
