import React from "react";
import styled from "styled-components";

const ChecklistTemplateBlock = styled.div``;

function ChecklistTemplate({ children }) {
	return <ChecklistTemplateBlock>{children}</ChecklistTemplateBlock>;
}

export default ChecklistTemplate;
