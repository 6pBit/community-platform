import React from 'react'
import { FieldContainer, ErrorMessage } from './elements'
import ReactFlagsSelect from 'react-flags-select'
import { Flex } from 'rebass'
import { IFieldProps } from './Fields'

export const FlagSelectField = ({ input, meta, ...rest }: IFieldProps) => (
  <Flex p={0} flexWrap="wrap">
    <FieldContainer invalid={meta.error && meta.touched}>
      <ReactFlagsSelect
        data-cy="flag-select"
        defaultCountry={'input.value'}
        onSelect={v => {
          input.onChange(v)
          input.onBlur()
        }}
      />
    </FieldContainer>
    {meta.error && meta.touched && (
      <ErrorMessage style={{ bottom: '-10px' }}>{meta.error}</ErrorMessage>
    )}
  </Flex>
)
