import React from "react";
import { StyledTable } from "../styled/TableStyle";
import { useCarContext } from "../../hooks/useCarContext";
import Comparetable from "./CompareTable";
import {LeadText} from '../styled/TextStyles'

export default function CarCompare() {
  const { state, dispatch } = useCarContext();

  return (
    <div>
      {state.compare.length ? (
        <StyledTable>
          <Comparetable
            compare={state.compare}
            onRemove={id => dispatch({ type: "COMPARE_REMOVE", id })}
          />
        </StyledTable>
      ) : (
        <LeadText>Please add cars to compare</LeadText>
      )}
    </div>
  );
}
