import styled from 'styled-components'

export const InputsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  position: relative;
`

export const TabButton = styled.button<{ selected: boolean }>`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  color: ${({ selected, theme }) => (selected ? theme.colors.basics.primary : theme.colors.basics.secondary)};
  position: relative;
  z-index: 1;

  &:focus {
    outline: none;
  }
`

export const TabIndicator = styled.div<{ selectedTab: 'pix' | 'cartao' }>`
  position: absolute;
  bottom: 0;
  left: ${({ selectedTab }) => (selectedTab === 'pix' ? '0' : '50%')};
  width: 50%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.basics.primary};
  transition: left 0.3s ease;
`

export const QRCodeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
`
