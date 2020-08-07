import React from "react"
import ContactForm from "./ContactForm"
import {render,screen, fireEvent} from "@testing-library/react"


test('testing if the ContactForm will render without crashing', ()=>{
    render(<ContactForm />)
})

test('Adding your information to the DOM by filling out the form and submit', async()=>{
    render(<ContactForm />)

    const firstName = screen.getByPlaceholderText(/edd/i);
    const lastName = screen.getByPlaceholderText(/burke/i);
    const email = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
    const message = screen.getByLabelText(/message/i);
  
    fireEvent.change(firstName, { target: { value: "sami" } });
    fireEvent.change(lastName, { target: { value: "aloosi" } });
    fireEvent.change(email, { target: { value: "sami@email.com" } });
    fireEvent.change(message, { target: { value: "hello?" } });
  
    const submitBtn = screen.getByTestId(/button/i)
  
    fireEvent.click(submitBtn)

})
