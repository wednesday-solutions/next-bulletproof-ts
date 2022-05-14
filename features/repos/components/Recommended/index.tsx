/**
 *
 * Recommended
 *
 */

import React from "react";
import { Row, Col } from "antd";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { ClickableTags } from "@common";
import { Recommendation } from "@features/repos/types";

interface RecommendedProps {
  recommendations: Recommendation[] | undefined;
}

const Recommended: React.FC<RecommendedProps> = ({ recommendations }) => {
  const router = useRouter();

  return (
    <Row data-testid="recommended">
      {recommendations?.length &&
        recommendations.map(({ id, name }) => (
          <Col key={id} onClick={() => router.push(`/info/${name}`)}>
            <ClickableTags>{name}</ClickableTags>
          </Col>
        ))}
    </Row>
  );
};

Recommended.propTypes = {
  recommendations: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired, name: PropTypes.string.isRequired })
  ),
};

export default Recommended;
