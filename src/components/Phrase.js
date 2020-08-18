import React, { Fragment } from 'react';
import PropTypes from "prop-types";

import styled from "@emotion/styled";

const Container = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;
    margin-top: 20rem;
    margin-bottom: 5rem;

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;
        
        &::before {
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }

    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight:bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }
`;

const Phrase = ({phrase}) => {



    return ( 
        <Fragment>
            <Container>
            <h1>{phrase.quote}</h1>
            <p>- {phrase.author}</p>
            </Container>
        </Fragment>
     );
}

Phrase.propTypes = {
    phrase: PropTypes.object.isRequired
}
 
export default Phrase;