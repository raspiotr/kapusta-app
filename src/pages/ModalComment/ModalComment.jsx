import { useState } from "react";
import AsksModal from "../../components/AsksModals/AsksModal.jsx";
import HelloModal from "../../components/HelloModal/HelloModal.jsx";
import SummaryModal from "../../components/Summary/Summary.jsx";

const ModalComment = () => {
  const [isHelloModalVisible] = useState(true);
  const [isAsksModalVisible, setIsAsksModalVisible] = useState(true);

  const summaryData = [
    { month: "January", amount: "$1000" },
    { month: "February", amount: "$1500" },
    { month: "March", amount: "$1200" },
    { month: "April", amount: "$1800" },
    { month: "May", amount: "$2000" },
    { month: "June", amount: "$1700" },
  ];

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
      <SummaryModal data={summaryData} />
    </>
  );
};

export default ModalComment;
