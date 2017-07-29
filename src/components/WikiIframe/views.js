import React from "react"
import { Iframe, Modal, CloseModalButton } from "./styles"

export const WikiIframeView = ({ src, onTransitionEnd, onClick, isExpanded }) => {

    return (
        <Modal
            isExpanded={ isExpanded }
            onTransitionEnd={ onTransitionEnd }>

            <CloseModalButton onClick={ onClick } isExpanded={ isExpanded }>X</CloseModalButton>
            <Iframe src={ src } />
        </Modal>
    )
}
