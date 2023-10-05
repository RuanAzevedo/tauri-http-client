import { proxy } from 'valtio'

type State = {
  httpMethod: string
  isSubmitting: boolean
  responseData?: JSON
}

const state = proxy({
  httpMethod: 'GET',
  isSubmitting: false,
} as State)

export default state
