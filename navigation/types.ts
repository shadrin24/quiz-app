export type RootStackParamList = {
    Main: undefined;
    Home: undefined;
    Quiz: undefined;
    Paywall: undefined;
    QuizResults: {
        answers: Record<number, string>;
    };
    QuizAnswers: {
        answers: Record<number, string>;
    };
    UTMData: {
        data: {
            source?: string;
            medium?: string;
            campaign?: string;
        };
    };
    // ... другие экраны
}; 