import { useState } from "react";
import AsksModal from "../../components/AsksModals/AsksModal.jsx";
import HelloModal from "../../components/HelloModal/HelloModal.jsx";
import ChartComponent from "../../components/Charts/Charts.jsx";

const ModalComment = () => {
  const [isHelloModalVisible] = useState(true);
  const [isAsksModalVisible, setIsAsksModalVisible] = useState(true);

  const handleAsksModalYes = () => {
    setIsAsksModalVisible(false);
  };

  const handleAsksModalNo = () => {
    setIsAsksModalVisible(false);
  };

  const chartData = [
    { category: "Продукты", amount: "2000" },
    { category: "Транспорт", amount: "1500" },
    { category: "Развлечения", amount: "1000" },
    { category: "Продукты", amount: "2000" },
    { category: "Транспорт", amount: "1500" },
    { category: "Развлечения", amount: "1000" },
    { category: "Продукты", amount: "2000" },
    { category: "Транспорт", amount: "1500" },
    { category: "Развлечения", amount: "1000" },
    { category: "Продукты", amount: "2000" },
    { category: "Транспорт", amount: "1500" },
    { category: "Развлечения", amount: "1000" },
  ];

  return (
    <>
      <AsksModal
        isVisible={isAsksModalVisible}
        onYes={handleAsksModalYes}
        onNo={handleAsksModalNo}
      />
      <HelloModal isVisible={isHelloModalVisible} />
      <ChartComponent data={chartData} />
    </>
  );
};

export default ModalComment;
