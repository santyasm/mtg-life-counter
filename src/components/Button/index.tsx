import { FC } from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonText } from "./styles";

interface Props extends TouchableOpacityProps {
    title: string;
}

export const Button: FC<Props> = ({ title = "title", ...rest }) => {
    return (
        <ButtonContainer activeOpacity={0.7} {...rest}>
            <ButtonText>{title}</ButtonText>
        </ButtonContainer>
    );
};
