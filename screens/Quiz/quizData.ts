export interface QuizQuestion {
    id: number;
    type: 'question' | 'intro';
    question: string;
    options: string[];
    text?: string;
    textBold?: number;
    textRegular?: number;
    rowGap?: string;
}

export const quizQuestions: QuizQuestion[] = [
    {
        id: 1,
        type: 'question',
        question: "Have you ever invested in stocks?",
        options: ["Yes", "No"],
        rowGap: "21%",
    },
    {
        id: 2,
        type: 'question',
        question: "How do you decide on your investments?",
        options: [
            "I do detailed research (charts, models, earnings, etc.)",
            "I do some research (recent performance and basic news)",
            "I only glance at headlines",
            "I trust my gut"
        ],
        rowGap: "13%",
    },
    {
        id: 3,
        type: 'intro',
        question: "You're Off to a Great Start!",
        text: "Fantastic job taking the first steps toward boosting your income. Keep going to discover your personalized path to quick wealth!",
        options: ["Next"],
    },
    {
        id: 4,
        type: 'question',
        question: "What's your biggest investing challenge?",
        options: [
            "Not enough knowledge",
            "Lack of time to research",
            "Finding the best opportunities",
            "Feeling overwhelmed by the market",
            "Other"
        ],
        rowGap: "12%",
    },
    {
        id: 5,
        type: 'question',
        question: "What would boost your investing confidence?",
        options: [
            "Clear and simple insights",
            "Access to top investment opportunities",
            "Expert-managed portfolios",
            "Other"
        ],
        rowGap: "14%",
    },
    {
        id: 6,
        type: 'intro',
        question: "Success Is Within Reach",
        text: "You're making great progress! Continue to unlock tips that can accelerate your journey to financial success.",
        options: ["Next"],
    },
    {
        id: 7,
        type: 'question',
        question: "How do you feel about risk?",
        options: [
            "Love risk",
            "Okay with it",
            "Cautious",
            "Prefer safety",
            "Avoid risk"
        ],
        rowGap: "13%",
    },
    {
        id: 8,
        type: 'question',
        question: "Do you want personalized tips that match your goals?",
        options: [
            "Yes, tell me more!",
            "Maybe",
            "No"
        ],
        rowGap: "18%",
    },
    {
        id: 9,
        type: 'intro',
        question: "Imagine a world where…",
        text: "You can invest with more confidence, see which stocks and trends the experts are following, and potentially earn more money.",
        options: ["Continue"],
        textBold: 31,
        textRegular: 28,
    },
    {
        id: 10,
        type: 'intro',
        question: "Meet TradeGenius",
        text: "TradeGenius is a platform where top analysts help you spot promising investment opportunities. Every day, millions of busy professionals use TradeGenius to find undervalued trends in the market.",
        options: ["Continue"],
        textBold: 31,
        textRegular: 28,
        rowGap: "19%",
    },
    {
        id: 11,
        type: 'question',
        question: "Overall, how satisfied are you with your current investments?",
        options: [
            "Very satisfied",
            "Somewhat satisfied",
            "Not satisfied",
            "I don't track my returns",
        ],
        rowGap: "13%",
    },
    // {
    //     id: 12,
    //     type: 'intro',
    //     question: "Thanks for taking the survey!",
    //     text: "",
    //     options: ["Claim & Download App"],
    //     textBold: 31,
    //     textRegular: 28,
    //     rowGap: "20%",
    // },
]; 