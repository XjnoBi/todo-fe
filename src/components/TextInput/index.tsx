import styled from 'styled-components'

import Text from 'components/Text'
import Flexbox from 'components/Flexbox'
import Box from 'components/Box'

type Props = {
  disabled?: boolean
  error?: string
  label?: string
  hint?: string
  max?: number
  maxLength?: number
  min?: number
  name?: string
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  required?: boolean
  type?: 'text' | 'number' | 'password' | 'email' | 'tel'
  value?: string | number
}

const TextInput: React.FC<Props> = ({
  error,
  label,
  hint,
  name,
  required,
  ...props
}) => (
  <Flexbox flexDirection='column'>
    {label && (
      <LabelWrapper>
        <Text variant='label' htmlFor={name}>
          {label}
        </Text>
        {required && <RequiredMarker>*</RequiredMarker>}
      </LabelWrapper>
    )}
    <StyledInput {...props} name={name} />
    {error && <Text variant='error'>{error}</Text>}
    {!error && hint && (
      <Text fontStyle='italic' variant='label'>
        {hint}
      </Text>
    )}
  </Flexbox>
)

const LabelWrapper = styled(Box)`
  line-height: 0.8;
`

const RequiredMarker = styled.span`
  color: red;
  font-size: 0.6rem;
  margin-left: 4px;
`

const StyledInput = styled.input`
  font-family: 'Roboto', sans-serif;
  font-size: 0.8rem;
  padding: 8px;
  min-width: 350px;

  ::placeholder {
    font-size: 0.8rem;
    font-style: italic;
  }
`

export default TextInput
