import { PlayerCounter } from "../PlayerCounter";
import { Container } from "./styles";

export const LifeCounterApp = () => {
    return (
        <Container>
            <PlayerCounter player={
                {
                    id: 1,
                    name: 'Player 2',
                    life: 20,
                    color: 'red'
                }
            } />

            <PlayerCounter player={
                {
                    id: 1,
                    name: 'Player 1',
                    life: 20,
                    color: 'black'
                }
            } />
        </Container>
    );
};