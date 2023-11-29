import { Meta } from '@storybook/react';
import Modal from '../lib/Modal';
import { Button } from "@bootwind/button"
import { ModalTrigger } from '../lib/ModalTrigger';
import { ModalContent } from '../lib/ModalContent';
import { ModalHeader } from '../lib/ModalHeader';
import { ModalTitle } from '../lib/ModalTitle';
import { ModalBody } from '../lib/ModalBody';
import { ModalFooter } from '../lib/ModalFooter';
import { useState } from 'react';

export default {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
} as Meta;

export const Basic = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        <div className="test">
            <Modal>
                <ModalTrigger>
                    <Button>Open Modal</Button>
                </ModalTrigger>
                <ModalContent isOpen={isOpen} onModalOpen={() => setIsOpen(true)} onModalClose={() => setIsOpen(false)}>
                    <ModalHeader>
                        <ModalTitle>Sign In</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe mollitia a, molestiae soluta cupiditate consequuntur ullam voluptates, commodi magnam unde amet similique quae! Nostrum ducimus veniam sed labore praesentium molestias.
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={() => setIsOpen(false)}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
        </>
    )
}