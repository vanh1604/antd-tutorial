import styled from "styled-components";
import { Button, Typography } from "antd";
const { Text } = Typography;
const StyledButton = styled(Button)`
  color: red;
  width: 400px;
  font-size: 24px;
`;
const StyledText = styled(Text)`
  font-size: 24px;
  color: white;
`;
export { StyledButton, StyledText };
