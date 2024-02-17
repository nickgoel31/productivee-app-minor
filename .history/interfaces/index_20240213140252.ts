export interface SetCardsProps{
    setCards: React.Dispatch<React.SetStateAction<{
        title: string;
        id: string;
        column: string;
    }[]>>
}