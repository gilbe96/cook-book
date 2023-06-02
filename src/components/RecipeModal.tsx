import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";

interface RecipeModalProps {
  isOpen: boolean;
  onClose: any;
  image: any;
}

const RecipeModal = ({ isOpen, onClose, image }: RecipeModalProps) => {
  return (
    <Modal size={"5xl"} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <img className="image-modal" width={2000} src={image} alt="" />
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose} colorScheme="orange" fontSize={18}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RecipeModal;
