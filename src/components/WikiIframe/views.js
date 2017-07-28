import React from "react"
import { Container, Iframe, Modal, TintedBackground, CloseModalButton } from "./styles"

//The Modal only renders and shows 
export const WikiIframeView = ({ src, setCurrentArticle }) => {
    return (
        <Container src={ src }>
            <Modal>
                <CloseModalButton onClick={ () => setCurrentArticle("") }>X</CloseModalButton>
                <Iframe src={ src } />
            </Modal>
        </Container>
    )
}
