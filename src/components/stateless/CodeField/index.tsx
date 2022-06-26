import React from 'react';
import { useField } from 'formik';
import { Props } from './interface';
import * as Styled from './style';

export function CodeField({ label, children, quantity, name, ...props }: Props) {
  const quantityArray = Array.from(Array(quantity).values());
  const [field, meta] = useField({ ...props, name });

  function handleInput(event: React.FormEvent<HTMLInputElement>) {
    const input = event?.nativeEvent.target as HTMLInputElement;
    const nextInput = input.nextElementSibling as HTMLInputElement;
    const isNumber = Number(input.value);

    if (!isNumber) input.value = input.value.replace(/.$/, '');

    if (isNumber && input.value.length > 1) input.value = input.value.replace(/^./, '');

    if (isNumber) nextInput?.focus();

    field.onChange(event);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    const input = event?.nativeEvent.target as HTMLInputElement;
    const previousInput = input.previousElementSibling as HTMLInputElement;

    if (input.value.length <= 1 && event.code === 'Backspace') previousInput?.focus();
  }

  return (
    <Styled.Container>
      <Styled.Label htmlFor='code0'>{label}</Styled.Label>
      <Styled.InputContainer>
        {quantityArray.map((_, index) => (
          <Styled.Input
            key={index}
            onInput={handleInput}
            onKeyDown={handleKeyDown}
            error={meta.error}
            touched={meta.touched}
            aria-label={name}
            name={name + index}
            autoFocus={index === 0}
            id={index === 0 ? 'code0' : ''}
            {...props}
          />
        ))}
      </Styled.InputContainer>
      {meta.error ? (
        <Styled.Error className='error' aria-label='Input error'>
          {meta.error}
        </Styled.Error>
      ) : null}
    </Styled.Container>
  );
}
