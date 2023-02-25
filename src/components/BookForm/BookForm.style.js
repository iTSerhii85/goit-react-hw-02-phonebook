import styled from "styled-components";
import { Form as BookForm } from "formik";
import { Field as BookInput } from "formik";

export const Form = styled(BookForm)`
display: flex;
flex-direction: column;
gap: 16px;
padding: 30px 20px;
width: 500px;
height: fit-content;
background-color: #ffffff;
border-radius: 8px;
background: rgba(255, 255, 255, 0.29);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(6px);
-webkit-backdrop-filter: blur(6px);
border: 1px solid rgba(255, 255, 255, 0.25);
`;

export const Field = styled(BookInput)`
font-size: 22px;
padding: 5px;
border-radius: 6px;
border: 2px solid blue;
`;

export const FormField = styled.label`
display: flex;
flex-direction: column;
gap: 5px;
`;

export const Wrapper = styled.div`
display: flex;
gap: 20px;
`;

export const SubmitButton = styled.button`
display: block;
 width: 50%;
 margin-left: auto;
 margin-right: auto;
 font-size: 18px;
 display: inline-block;
 outline: 0;
 border: 0;
 cursor: pointer;
 will-change: box-shadow,transform;
 background: radial-gradient( 100% 100% at 100% 0%, #89E5FF 0%, #5468FF 100% );
 box-shadow: 0px 0.01em 0.01em rgb(45 35 66 / 40%), 0px 0.3em 0.7em -0.01em rgb(45 35 66 / 30%), inset 0px -0.01em 0px rgb(58 65 111 / 50%);
 padding: 0 2em;
 border-radius: 0.3em;
 color: #fff;
 height: 2.6em;
 text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
 transition: box-shadow 0.15s ease, transform 0.15s ease;

&:hover {
 box-shadow: 0px 0.1em 0.2em rgb(45 35 66 / 40%), 0px 0.4em 0.7em -0.1em rgb(45 35 66 / 30%), inset 0px -0.1em 0px #3c4fe0;
 transform: translateY(-0.1em);
}

&:active {
 box-shadow: inset 0px 0.1em 0.6em #3c4fe0;
 transform: translateY(0em);
}
`;