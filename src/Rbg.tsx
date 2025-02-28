import React, { useState } from 'react';
import type { InputNumberProps } from 'antd';
import { Col, Divider, InputNumber, Row, Slider, Space } from 'antd';

type ColorProps = {
  value?: number;
  onChange: (value: number) => void;
};
const Redcolor: React.FC<ColorProps> = ({value = 0, onChange}) => (
    <Row>
      <Col span={12} style={{border: `4px solid rgb(${value},0, 0)`,
      borderRadius:'10px'}}>
        <Slider
          min={0}
          max={255}
          onChange={onChange}
          value={value}
        />
      </Col>
      <Col span={6}>
        <InputNumber
          min={0}
          max={255}
          style={{ margin: '0 16px' }}
          value={value}
          onChange={(val) => onChange(val ?? 0)}
        />
      </Col>
      <Col span={6}>
        <div style={{ display: "flex", gap: "10px" }}>
          <h4>màu hiện tại:</h4>
          <div style={{ backgroundColor: `rgb(${value},0, 0)`, width: "50px", height: "30px" }} />
        </div>
      </Col>
    </Row>
);
const Greencolor: React.FC<ColorProps> = ({value = 0, onChange}) => (
  <Row>
      <Col span={12} style={{border: `4px solid rgb(0,${value}, 0)`,
      borderRadius:'10px'}}>
        <Slider
          min={0}
          max={255}
          onChange={onChange}
          value={value}
        />
      </Col>
      <Col span={6}>
        <InputNumber
          min={0}
          max={255}
          style={{ margin: '0 16px' }}
          value={value}
          onChange={(val) => onChange(val ?? 0)}
        />
      </Col>
      <Col span={6}>
        <div style={{ display: "flex", gap: "10px" }}>
          <h4>màu hiện tại:</h4>
          <div style={{ backgroundColor: `rgb(0,${value}, 0)`, width: "50px", height: "30px" }} />
        </div>
      </Col>
    </Row>  
);
const Bluecolor: React.FC<ColorProps> = ({value = 0, onChange}) => (
  <Row>
      <Col span={12} style={{border: `4px solid rgb(0, 0, ${value})`,
      borderRadius:'10px'}}>
        <Slider
          min={0}
          max={255}
          onChange={onChange}
          value={value}
        />
      </Col>
      <Col span={6}>
        <InputNumber
          min={0}
          max={255}
          style={{ margin: '0 16px' }}
          value={value}
          onChange={(val) => onChange(val ?? 0)}
        />
      </Col>
      <Col span={6}>
        <div style={{ display: "flex", gap: "10px" }}>
          <h4>màu hiện tại:</h4>
          <div style={{ backgroundColor: `rgb(0, 0, ${value})`, width: "50px", height: "30px" }} />
        </div>
      </Col>
    </Row>
);
const RbgColor: React.FC =() => {
  const [red, setRed] = useState(0)
  const [blue, setBlue] = useState(0)
  const [green, setGreen] = useState(0)
  const getTextColor = (red: number, green: number, blue: number) => {
    // Công thức tính độ sáng (luminance)
    const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
    return brightness > 128 ? "black" : "white"; // Nếu sáng thì dùng chữ đen, ngược lại dùng chữ trắng
  };
  return(
    <>
    <Divider style={{marginTop:'80px'}}>useState và Pops</Divider>
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      border: `4px solid rgb(${red}, ${green}, ${blue})`,
      borderRadius:'80px'
    }}>
    <Space style={{ width: '50%', marginTop: '5px', marginBottom:'10px' }} direction="vertical">
      <div style={{backgroundColor: `rgb(${red}, ${green}, ${blue})`,
           width: '100%', 
           height: '100px',
           textAlign: 'center',
           lineHeight: '100px',
      }}>
            <h1 style={{ color: getTextColor(red, green, blue)}}>mã màu: {red},{green},{blue} </h1>
      </div>
      <Redcolor value={red} onChange={setRed}/>
      <Greencolor value={green} onChange={setGreen} />
      <Bluecolor value={blue} onChange={setBlue} />
  </Space>
  </div>
  </>
  )
}
export default RbgColor;
