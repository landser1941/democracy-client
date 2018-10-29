import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

import ActivityIndex from './ActivityIndex';
import DateTime from './Date';
import DemocracyIconComponent from '../../iconfont/DemocracyFont';
import StatusIcon from '../components/StatusIcon';

const DemocracyIcon = styled(DemocracyIconComponent)``;

const ListItemWrapper = styled.View`
  align-items: center;
  width: 300;
  shadow-color: #000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.5;
  shadow-radius: 2px;
`;

const TopWrapper = styled(LinearGradient).attrs({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
  colors: ['#ffab7d', '#e49469'],
})`
  height: 30;
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-top-left-radius: 10;
  border-top-right-radius: 10;
`;

const MainWrapper = styled.View`
  align-items: center;
  width: 100%;
  background-color: #fff;
  padding-vertical: 18;
  padding-horizontal: 18;
`;

const BottomWrapper = styled(LinearGradient).attrs({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
  colors: ['#ffab7d', '#e49469'],
})`
  height: 30;
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-bottom-left-radius: 10;
  border-bottom-right-radius: 10;
`;

const SubjectGroup = styled.Text`
  color: #fff;
  font-weight: 600;
`;

const SubjectGroupDecent = styled.Text`
  color: #fff;
  font-weight: 300;
`;

const SideWrapper = styled.View`
  align-items: center;
  justify-content: space-between;
  min-width: 50;
`;

const Type = styled.Text`
  font-size: 20;
  color: #e49469;
  padding-bottom: 20;
`;

const Title = styled.Text.attrs({ numberOfLines: 3 })`
  font-size: 17;
  color: #030303;
`;

const Tags = styled.Text.attrs({ numberOfLines: 2 })`
  padding-top: 8;
  font-size: 15;
  color: #8f8e94;
`;

const ListItem = ({
  title,
  tags,
  date,
  procedureId,
  children,
  activityIndex: { activityIndex, active },
  votedGovernment,
  voted,
  viewedStatus,
  subjectGroups,
  type,
  ...rest
}) => (
  <ListItemWrapper>
    <TopWrapper>
      <SubjectGroup>{subjectGroups[0]}</SubjectGroup>
    </TopWrapper>
    <MainWrapper>
      <Type>{type}</Type>
      {date && <DateTime date={date} />}
      <Title>{title}</Title>
      {/* {!children && <Tags>{rest && Object.keys(rest).join(', ')}</Tags>} */}
      {children}
    </MainWrapper>
    <BottomWrapper>
      <SubjectGroup>
        <SubjectGroupDecent>bereits</SubjectGroupDecent> {activityIndex} Stimmen
      </SubjectGroup>

      {/* {voted && (
        <DemocracyIcon
          name={`checkmark${votedGovernment ? '-double' : ''}`}
          size={14}
          color="#35a335"
        />
      )} */}
    </BottomWrapper>
  </ListItemWrapper>
);

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  procedureId: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string, PropTypes.bool]),
  children: PropTypes.node,
  activityIndex: PropTypes.shape(),
  votedGovernment: PropTypes.bool,
  voted: PropTypes.bool,
  viewedStatus: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
  tags: [],
  date: false,
  children: null,
  activityIndex: {},
  votedGovernment: false,
  voted: false,
};

export default ListItem;
