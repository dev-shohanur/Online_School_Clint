import React from 'react';
import Card from 'react-bootstrap/Card';


const Blog = () => {
    return (
        <div className='container'>
            <h2 className="text-center fw-bold mb-4 mt-5 pb-4 pt-4">Ouer Blog</h2>
            <Card className='mt-4'>
                <Card.Header className='fs-2'>What is cors?</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='mt-4'>
                <Card.Header className='fs-2'>Why are you using `firebase`? What other options do you have to implement authentication?</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Firebase an Authentication system of Google. Hence it is one of the safest and easiest Authentication system. That's the reason I am using it.
                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                        <strong>Other Options of implementing authentication are :</strong>
                        <strong>Auth0, MongoDB, Passport, Okta, and Firebase</strong>
                        are the most popular alternatives and competitors to Firebase Authentication.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='mt-4'>
                <Card.Header className='fs-2'>How does the private route work?</Card.Header>
                <Card.Body>
                    <Card.Text>
                        The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='mt-4'>
                <Card.Header className='fs-2'>What is Node? How does Node work?</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Node is used as a backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blog;