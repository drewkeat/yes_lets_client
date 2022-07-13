import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Grid, Typography, IconButton } from "@mui/material";
import { RemoveCircle } from "@mui/icons-material";
import {
  selectCurrentUser,
  selectUserByID,
} from "../Reducers/Users/UsersSelectors";

const HangtimeListItem = ({
  hangtime,
  destroyEntity,
  users,
  currentUser,
  ...props
}) => {
  const start = new Date(hangtime.attributes.start).toLocaleTimeString();
  const end = new Date(hangtime.attributes.end).toLocaleTimeString();
  // const navigate = useNavigate()

  const handleRemove = (e, entityData) => {
    const { id, type } = entityData;
    destroyEntity(id, type);
  };

  const renderHangtimeUsers = () => {
    const otherUsers = users.filter((user) => user.id !== currentUser.id);
    return otherUsers.map((user) => (
      <Link to={"/users/" + user.id}>
        <Typography key={user.id} variant="subtitle1" mr={3}>
          {user.attributes.fullName}
        </Typography>
      </Link>
    ));
  };

  return (
    <Container key={hangtime.id}>
      <Grid container data-entity-id={hangtime.id} alignItems="center">
        <Typography variant="subtitle1">
          {start} - {end}
        </Typography>
        <IconButton
          data-entity-id={hangtime.id}
          onClick={(e) =>
            handleRemove(e, { type: "hangtime", id: hangtime.id })
          }
        >
          <RemoveCircle color="error" />
        </IconButton>
        {renderHangtimeUsers()}
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state, { hangtime, ...props }) => ({
  users: selectUserByID(
    state,
    hangtime.relationships.users.data.map((user) => user.id)
  ),
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(HangtimeListItem);
