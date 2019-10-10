import React, { useState } from "react";
import { Button } from "reactstrap";
import NumberFormat from "react-number-format";
import { CompareImage } from '../styled/ImageStyles'

const NormalValue = ({item, column}) => {
  return <td>{item[column]}</td>;
};

const PriceValue = ({item, column}) => {
  return (
    <td>
      <NumberFormat
        value={item[column]}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />{" "}
    </td>
  );
};

const ImageValue = ({item}) => {
  return (
    <th style={{ verticalAlign: "bottom" }}>
      <CompareImage src={item.img} alt="compare"></CompareImage>
    </th>
  );
};

const ButtonValue = ({item, onRemove}) => {
  return (<td key={item.id}>
    <Button onClick={() => onRemove(item.id)}>Remove</Button>
  </td>)
}

const ColumnValue = ({item, column, onRemove}) => {
  switch (column) {
    case "price":
      return <PriceValue item={item} column={column} />;
    case "img":
      return <ImageValue item={item} column={column} />;
    case "action":
      return <ButtonValue item={item} onRemove={onRemove} />
    default:
      return <NormalValue item={item} column={column} />;
  }
};

export default function CompareTable({ compare, onRemove }) {
  const [columns] = useState(["img", "brand", "model", "year", "price", "action"]);
  return (
    <tbody>
      {columns.map(column => (
        <tr key={column}>
          <th scope="row">{column !== "img" && column !== "action" ? column : ''}</th>
          {compare.map(item => (
            <ColumnValue item={item} column={column} key={item.id} onRemove={() => onRemove(item.id)}/>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
