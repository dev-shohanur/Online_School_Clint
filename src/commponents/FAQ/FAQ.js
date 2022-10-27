import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';


const FAQ = () => {
    return (
        <div>
            <Container>
                <h2 className="text-center fw-bold mb-4 mt-5 pb-4 pt-4">FAQ</h2>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is the purpose of react router?</Accordion.Header>
                        <Accordion.Body>
                            React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>How does Context API work?</Accordion.Header>
                        <Accordion.Body>
                            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What is useref in react?</Accordion.Header>
                        <Accordion.Body>
                            Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. React will set its .current property to the corresponding DOM node whenever that node changes.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Why we use useRef in React?</Accordion.Header>
                        <Accordion.Body>
                            The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>What is the purpose of context API in react?</Accordion.Header>
                        <Accordion.Body>
                            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>How many ways we can implement conditional rendering in React?</Accordion.Header>
                        <Accordion.Body>
                            7 Ways to Implement Conditional Rendering in React Applications:
                            <ol>
                                <li>Using an if…else Statement</li>
                                <li>Using a switch Statement</li>
                                <li>Using Element Variables</li>
                                <li>Using Ternary Operators</li>
                                <li>Using Logical && (Short Circuit Evaluation)</li>
                                <li>Using Immediately Invoked Function Expressions</li>
                                <li>Using Enhanced JSX Libraries</li>
                             </ol>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </Container>
        </div>
    );
};

export default FAQ;