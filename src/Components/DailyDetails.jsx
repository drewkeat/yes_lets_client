import React, { useState } from "react";
import {
  Card,
  Container,
  Grid,
  IconButton,
  Popover,
  Typography,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import EditIcon from "@mui/icons-material/Edit";
import { connect } from "react-redux";
import { getAvailabilitiesFromUser } from "../Reducers/Availabilities/AvailabilitiesSelectors";
import { getHangtimesFromUser } from "../Reducers/Hangtimes/HangtimesSelectors";
import { destroyEntity } from "../Actions";
import { NewAvailabilityForm } from "../Components";

const DailyDetails = ({
  user,
  date,
  availabilities,
  hangtimes,
  destroyEntity,
  ...props
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [newForm, setNewForm] = useState(null);
  const open = Boolean(anchorEl);

  const handleRemove = (e, entityData) => {
    const { id, type } = entityData;
    destroyEntity(id, type);
  };

  const handleAdd = (e) => {
    setAnchorEl(e.currentTarget);
    e.currentTarget.key ? setNewForm(false) : setNewForm(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    e.currentTarget.key ? setNewForm(false) : setNewForm(true);
  };

  const renderAvailabilities = () => {
    if (availabilities) {
      let availList = availabilities.filter(
        (avail) =>
          new Date(avail.attributes.start).toLocaleDateString() ===
          date.toLocaleDateString()
      );
      return availList.map((avail) => {
        const start = new Date(avail.attributes.start).toLocaleTimeString();
        const end = new Date(avail.attributes.end).toLocaleTimeString();
        return (
          <Container key={avail.id}>
            <Grid container data-entity-id={avail.id} alignItems="center">
              <Typography variant="subtitle1">
                {start} - {end}
              </Typography>
              <IconButton>
                <EditIcon />
              </IconButton>
              <IconButton
                data-entity-id={avail.id}
                onClick={(e) =>
                  handleRemove(e, { type: "availability", id: avail.id })
                }
              >
                <RemoveCircleIcon color="error" />
              </IconButton>
            </Grid>
          </Container>
        );
      });
    }
  };

  const renderHangtimes = () => {
    if (hangtimes) {
      let hangList = hangtimes.filter(
        (hang) =>
          new Date(hang.attributes.start).toLocaleDateString() ===
          date.toLocaleDateString()
      );
      return hangList.map((hang) => {
        const start = new Date(hang.attributes.start).toLocaleTimeString();
        const end = new Date(hang.attributes.end).toLocaleTimeString();
        return (
          <Container key={hang.id}>
            <Grid container data-entity-id={hang.id} alignItems="center">
              <Typography variant="subtitle1">
                {start} - {end}
              </Typography>
              <IconButton
                data-entity-id={hang.id}
                onClick={(e) =>
                  handleRemove(e, { type: "hangtime", id: hang.id })
                }
              >
                <RemoveCircleIcon color="error" />
              </IconButton>
            </Grid>
          </Container>
        );
      });
    }
  };

  return (
    <Card raised sx={{ mt: 2, padding: 1 }}>
      <Typography variant="h4" textAlign="center">
        {date.toLocaleDateString()}
      </Typography>
      <Container>
        <Grid container alignItems="center">
          <Typography variant="h5">Availabilities</Typography>
          <IconButton onClick={handleAdd}>
            <AddCircleIcon color="success" />
          </IconButton>
          <Popover
            anchorEl={anchorEl}
            open={open && newForm}
            onClose={handleClose}
          >
            <NewAvailabilityForm start={date} end={date} />
          </Popover>
          {renderAvailabilities()}
        </Grid>
        <Grid container alignItems="center">
          <Typography variant="h5">Hangtimes</Typography>
          <IconButton>
            <AddCircleIcon color="success" />
          </IconButton>
          {renderHangtimes()}
        </Grid>
      </Container>
    </Card>
  );
};

const mapStateToProps = (state, { user }) => ({
  availabilities: getAvailabilitiesFromUser(state, user),
  hangtimes: getHangtimesFromUser(state, user),
});

export default connect(mapStateToProps, { destroyEntity })(DailyDetails);
