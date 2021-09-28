import styled from "styled-components";

export const PageContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 100vh;
`;
export const FormWrapper = styled.form`
  display: flex;
  flex-basis: 100%;
  justify-content: center;
`;

export const InputWrapper = styled.div`
  max-width: 300px;
  padding: 10px;
`;

export const InputLabel = styled.label`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 900;
`;

export const FormInput = styled.input`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 12px;
  font-weight: 900;
  margin-left: 10px;
`;

export const ResponWrapper = styled.div`
  flex-basis: 100%;
`;

export const ResultText = styled.p`
  color: ${(p) => (p.isKmDone ? p.theme.colors.success : p.theme.colors.error)};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 900;
`;
