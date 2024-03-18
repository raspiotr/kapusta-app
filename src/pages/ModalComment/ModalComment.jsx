import { useState } from "react";
import AsksModal from "../../components/AsksModals/AsksModal.jsx";
import HelloModal from "../../components/HelloModal/HelloModal.jsx";

const ModalComment = () => {
  const [isHelloModalVisible] = useState(true);
  const [isAsksModalVisible, setIsAsksModalVisible] = useState(true);

  const handleAsksModalYes = () => {
    setIsAsksModalVisible(false);
  };

  const handleAsksModalNo = () => {
    setIsAsksModalVisible(false);
  };

  return (
    <>
      <AsksModal
        isVisible={isAsksModalVisible}
        onYes={handleAsksModalYes}
        onNo={handleAsksModalNo}
      />
      <HelloModal isVisible={isHelloModalVisible} />
    </>
  );
};

export default ModalComment;
