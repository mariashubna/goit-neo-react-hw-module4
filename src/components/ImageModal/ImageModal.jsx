import css from "./ImageModal.module.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ImageModal = ({ image, closeModal, open }) => {
  return (
    <Modal onRequestClose={closeModal} style={customStyles} isOpen={open}>
      <img src={image.urls.regular} alt={image.alt_description} />
    </Modal>
  );
};

export default ImageModal;
