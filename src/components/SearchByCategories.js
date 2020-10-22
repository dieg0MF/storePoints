import React, { useContext, useEffect } from "react";
import { AppContext } from "../AppProvider";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function SimpleMenu() {
  const { orderProducts, setOrderProducts } = useContext(AppContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  // console.log("KJKJKJKJK", props);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlerProductList = (e) => {
    setOrderProducts(e.target.id);
    setAnchorEl(null);
    console.log("KJKJKJKJK", orderProducts);
    console.log("KJKJKJKcdfddJK", e.target.id);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        By Categories
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem id="principal" onClick={handlerProductList}>
          Todas las Categorias
        </MenuItem>
        <MenuItem id="Cameras" onClick={handlerProductList}>
          Cameras
        </MenuItem>
        <MenuItem id="Gaming" onClick={handlerProductList}>
          {" "}
          Gaming
        </MenuItem>

        <MenuItem id="Monitors & TV" onClick={handlerProductList}>
          Monitors & TV
        </MenuItem>
        <MenuItem id="Phones" onClick={handlerProductList}>
          Phones
        </MenuItem>
        <MenuItem id="Drones" onClick={handlerProductList}>
          Drones
        </MenuItem>
        <MenuItem id="Audio" onClick={handlerProductList}>
          Audio
        </MenuItem>
        <MenuItem id="Tablets & E-readers" onClick={handlerProductList}>
          Tablets & E-readers
        </MenuItem>
        <MenuItem id="Phone Accessories" onClick={handlerProductList}>
          Phone Accessories
        </MenuItem>
        <MenuItem id="Phones" onClick={handlerProductList}>
          Phones
        </MenuItem>
      </Menu>
    </div>
  );
}
