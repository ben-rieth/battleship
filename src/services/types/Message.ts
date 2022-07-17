export type MessageSender = "Player 1" | "Player 2" | "Sys";

export type Message = {
    text: string;
    player: MessageSender;
}