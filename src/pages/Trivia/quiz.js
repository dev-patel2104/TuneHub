import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from "react-responsive";

// Placeholder images for the quiz
import quizImage1 from '../../assets/icon_insta_white.svg';
import quizImage2 from '../../assets/icon_twitter_white.svg';

function Quiz() {
    const isMobile = useMediaQuery({ query: '(max-width: 1080px)' });

    // Sample quiz questions and options
    const quizQuestions = [
        {
            question: "What is the capital of France?",
            options: ["London", "Paris", "Berlin", "Rome"],
            answer: "Paris",
            image: quizImage1,
        },
        {
            question: "Which planet is closest to the sun?",
            options: ["Venus", "Mars", "Mercury", "Jupiter"],
            answer: "Mercury",
            image: quizImage2,
        },
        // Add more quiz questions here
    ];

    return (
        <Flex justifyContent="center" alignItems="center" minH="100vh" backgroundColor="#000C66" direction="column">
            <Heading as="h1" size="2xl" fontWeight="medium" mt="32px" mb="64px" color="white">
                Quiz Page
            </Heading>
          
        </Flex>
    );
}

export default Quiz;
