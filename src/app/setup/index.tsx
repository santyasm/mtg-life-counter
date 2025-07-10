import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

import { CancelButton, Container, Header, LogoContainer } from "./styles";

import Logo from "@/assets/svgs/logo.svg";
import { View } from "react-native";

const Setup = () => {
    const cancel = () => {
        router.back();
    };

    return (
        <Container>
            <Header>
                <CancelButton onPress={cancel}>
                    <AntDesign name="back" size={24} color="white" />
                </CancelButton>

                <LogoContainer>
                    <Logo width={69} height={79.18} />
                </LogoContainer>

                <View />
            </Header>
        </Container>
    );
};

export default Setup;
