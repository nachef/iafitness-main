import styled from 'styled-components'

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 768px) {
    padding: 0 16px;
    gap: 40px;
  }

  @media (max-width: 425px) {
    padding: 0 8px;
    gap: 40px;
  }
`

export const InputsWrapperInline = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1023px) {
    flex-direction: column;
    gap: 40px;
  }

  @media (max-width: 425px) {
    gap: 40px;
  }
`

export const RadioInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }

  @media (max-width: 425px) {
    gap: 40px;
  }
`
