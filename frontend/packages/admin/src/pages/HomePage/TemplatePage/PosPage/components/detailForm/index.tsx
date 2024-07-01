import { Col, Form, FormInstance, Input, Row } from "antd";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FieldType } from "src/common/utils";
import { useFlat } from "src/service";
import { Pos } from "src/service/stores/posStore/model";

export type DetailFormValue = Pick<Pos, "posName" | "comment">;
const TopForm = ({
	formRef,
	branchName = "",
}: {
	formRef?: FormInstance<DetailFormValue>;
	branchName?: string;
}) => {
	const { currentData, setCurrentPosData } = useFlat(
		["posStore", branchName],
		{
			currentData: "IN",
		},
	);
	const { t } = useTranslation(["pos"]);
	const { t: commonT } = useTranslation(["common"]);
	useEffect(() => {
		currentData && formRef?.setFieldsValue(currentData);
	}, [currentData]);
	return (
		<div>
			<Form<DetailFormValue>
				onValuesChange={(_, values) => {
					let newData = currentData
						? { ...currentData, ...values }
						: { ...values };
					setCurrentPosData(newData as Pos);
				}}
				form={formRef}
				layout="vertical"
				name="basic"
				wrapperCol={{ span: 16 }}
				style={{ width: "100%" }}
				initialValues={currentData || {}}
				autoComplete="off"
			>
				<Row
					style={{
						width: "100%",
					}}
				>
					<Col span={12}>
						<Form.Item<FieldType>
							label="销售地名称"
							name="posName"
							rules={[
								{
									required: true,
									message: `${t("posPage.placeholder_input")} ${t(
										"posPage.POSName",
									)}`,
								},
								{
									max: 30,
									message: t("posPage.rule_posName_1"),
								},
								{
									pattern: /^[0-9a-zA-z_-]+$/,
									message: t("posPage.placeholder_posName"),
								},
							]}
						>
							<Input placeholder={commonT("placeholder_input")} />
						</Form.Item>
					</Col>

					<Col span={12}>
						<Form.Item<FieldType> label="描述" name="comment">
							<Input.TextArea
								placeholder={commonT("placeholder_input")}
								style={{ height: 120 }}
							/>
						</Form.Item>
					</Col>
				</Row>
			</Form>
		</div>
	);
};

export default TopForm;