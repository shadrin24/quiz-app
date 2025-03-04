export interface SocialPostData {
    symbol: string;
    author: string;
    text?: string;
    likes?: number;
    comments?: number;
}

export const socialPostsData: SocialPostData[] = [
    {
        symbol: "$DOGE",
        author: "Robert M.",
        text: "The market is crashing",
        likes: 100,
        comments: 20,
    },
    {
        symbol: "$ETH",
        author: "John Doe",
        text: "To the moon 🚀",
        likes: 1000,
        comments: 500,
    },
    {
        symbol: "$ETH",
        author: "SETH",
    },
]; 