import { Form, Select } from "antd";
import { CustomFieldRender } from "src/common/utils";
import { useFlat } from "src/reduxService";
import { MarketItem } from "src/reduxService/stores/marketStore/model";

const { Option } = Select;

const LocationField: CustomFieldRender<MarketItem> = (_, form) => {
  const { locationList } = useFlat("marketStore");
  let locationType = (
    {
      P: "AIRPORT",
      C: "CITY",
      S: "STATE",
      N: "COUNTRY",
      Z: "ATPCO ZONE",
      A: "TC",
      W: "WORLD",
    } as any
  )[form.getFieldValue("locationType")];
  const optionArr =
    locationType in locationList ? locationList[locationType] : [];
  return (
    <Form.Item
      style={{
        margin: 0,
      }}
      name={"locationInfo"}>
      <Select>
        {optionArr &&
          optionArr.length > 0 &&
          optionArr.map((item) => {
            return (
              <Option value={item[0]} key={item[0]}>
                {item[1]}
              </Option>
            );
          })}
      </Select>
    </Form.Item>
  );
};

export default LocationField;