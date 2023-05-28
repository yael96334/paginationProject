import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { GridList, GridListTile, IconButton, GridListTileBar } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import { useDispatch, useSelector } from "react-redux";
import NavigateButton from './NavigateButton'
import ItemModal from './ImageModal'
import { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { sortByValue } from "../api/ImagesApi";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    width: "auto",
    height: "auto",
    margin: "auto"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  },
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));
// this component display current images from api call 3*3
export default function GaelleryImages() {
  const dis = useDispatch()
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false)
  const [currentItem, setCurrentItem] = useState({})

  const imagesList = useSelector(state => state.i.currentData)
  const handleClick = (item) => {
    setOpenModal(true)
    setCurrentItem(item)
  }

  return (
    <>
      <NavigateButton />
      {openModal && < ItemModal detailes={currentItem} openModal={openModal} setOpenModal={setOpenModal} />}
      <div className={classes.root}>
        <GridList cols={3} style={{ width: '70%', margin: '1%' }}>
          className={classes.gridList}
          {imagesList.map(item => (
            <GridListTile key={item.id}
              onClick={() => handleClick(item)}
            >
              <img style={{ width: '100%', height: '100%' }} src={item.previewURL} alt={item.title} />
              <GridListTileBar
                title={item.title}
                subtitle={<span style={{fontSize:'130%'}}>User: {item.user}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${item.title}`}
                    className={classes.icon}
                    value={item.id}
                  >
                    <FavoriteIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </>
  );
}
